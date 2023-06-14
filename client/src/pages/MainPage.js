import { Link } from 'react-router-dom'
import { useAuthCtx } from '../hooks/useAuthCtx';
import TopBar from "../components/TopBar"
import { LogoutUser } from "../hooks/Logout"
import { useEffect } from 'react'
import React, { useState } from 'react'
import { addLikedRecipe } from '../utils/ApiService'
import SyncLoader from 'react-spinners/SyncLoader'
import { TbToolsKitchen2, TbTrash, TbMeatOff } from 'react-icons/tb'
import { FiSettings, FiFilter } from 'react-icons/fi'
import { LuWheatOff, LuVegan } from 'react-icons/lu'
import { BiLogOut } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { US, CN, GR, IT, IN, JP, MX, TH, VN } from 'country-flag-icons/react/3x2'
import { MultiSelect } from "react-multi-select-component"
import { fetchRecipeFromApi } from '../utils/ApiService';


import('./mainpage.css')


const cuisine = [

    { label: <US className='country-flag' />, value: "american" },
    { label: <CN className='country-flag' />, value: "chinese" },
    { label: <GR className='country-flag' />, value: "greek" },
    { label: <IT className='country-flag' />, value: "italian" },
    { label: <IN className='country-flag' />, value: "indian" },
    { label: <JP className='country-flag' />, value: "japanese" },
    { label: <MX className='country-flag' />, value: "mexican" },
    { label: <TH className='country-flag' />, value: "thai" },
    { label: <VN className='country-flag' />, value: "vietnamese" }
]

const mealType = [
    { label: 'Breakfast', value: "breakfast" },
    { label: 'Appetizer', value: "apetizer" },
    { label: 'Main', value: "main+course" },
    { label: "Dessert", value: "dessert" },


]

const diet = [
    { label: <TbMeatOff />, value: "vegetarian" },
    { label: <LuVegan />, value: "vegan" },
    { label: <LuWheatOff />, value: "gluten+free" },
]




function MainPage() {
    const { user } = useAuthCtx()
    const [randomRecipe, setRandomRecipe] = useState('')
    const [dropDown, setDropDown] = useState(false)
    const [likedRecipe, setLikedRecipe] = useState('')
    const [selected, setSelected] = useState([])
    const { logout } = LogoutUser()
    const [loading, setLoading] = useState(false)


    const arrayOfTags = []


    selected.map((sel) => {
        arrayOfTags.push(sel.value)
    })

    const stringTags = arrayOfTags.toString()




    const handleLike = () => {



        const { id, title, image, cuisines, sourceUrl, summary, instructions, extendedIngredients } = randomRecipe.recipes[0]
        addLikedRecipe(({ id, title, image, cuisines, sourceUrl, summary, instructions, extendedIngredients }), user)
        fetchOnClick()


    }



    const fetchOnClick = async () => {



        const recipe = await fetchRecipeFromApi(stringTags)

        if (recipe.ok) {
            setRandomRecipe(recipe)
            setLoading(false)

        } else {
            console.log('error')
        }



    }


    useEffect(() => {
        const getRecipes = async () => {
            const recipe = await fetchRecipeFromApi(stringTags)

            if (recipe.ok) {
                setRandomRecipe(recipe)
                setLoading(false)

            } else {
                console.log('error')
            }
        }


        getRecipes()



    }, [])




    return (


        <div className='main-page'>
            <div className='top-bar'>
                <IconContext.Provider value={{ size: "2em", color: '#b1b7bd' }}>
                    <BiLogOut className='icon' onClick={() => { setDropDown((prev) => !prev) }} />
                </IconContext.Provider>

                <h1 className='mainpage-title'>Hungry</h1>

                <Link to='/likedRecipes'>
                    <IconContext.Provider value={{ color: '#fe3c72', size: "2em" }}>
                        < BsFillHeartFill className='icon' />
                    </IconContext.Provider>
                </Link>

            </div>

            <IconContext.Provider value={{ color: 'white', size: "2em" }}>
                <FiFilter className='filter-icon' />
            </IconContext.Provider>



            <div className='dropdown-container'>
                <MultiSelect className='dropdown'
                    options={cuisine}
                    value={selected}
                    onChange={setSelected}
                    hasSelectAll={false}
                    disableSearch={true}
                    labelledBy="Cuisine"
                />
                <MultiSelect className='dropdown'
                    options={mealType}
                    value={selected}
                    onChange={setSelected}
                    hasSelectAll={false}
                    disableSearch={true}
                    labelledBy="Cuisine"
                />
                <MultiSelect className='dropdown'
                    options={diet}
                    value={selected}
                    onChange={setSelected}
                    hasSelectAll={false}
                    disableSearch={true}
                    labelledBy="Cuisine"

                />
            </div>

            {
                dropDown && <div className='flex flex-col dropdown-menu'>
                    <h4>Log out?</h4>
                    <br />
                    <button className="no-btn" onClick={() => { setDropDown((prev) => !prev) }}>No</button>
                    <Link to='/logout'>

                        <button className="yes-btn" onClick={() => { logout() }}>Yes</button>
                    </Link>
                </div>
            }


            <div className='recipe-selector'>
                <div className='picture'>
                    {
                        randomRecipe ?
                            <img src={randomRecipe.recipes[0].image ? randomRecipe.recipes[0].image : 'no image :('} alt="Recipe has no image :( " />
                            :
                            <SyncLoader color='white' />
                    }
                </div>

                <div className='recipe-name'>
                    {

                        <h4>{randomRecipe && randomRecipe.recipes[0].title}</h4>
                    }

                </div>


                <div className='buttons'>
                    <IconContext.Provider value={{ size: "2em", color: "white" }}>
                        <button className='dislike' onClick={() => fetchOnClick()}><TbTrash /></button>
                    </IconContext.Provider>
                    {/* <button className='info'>?</button> */}

                    <IconContext.Provider value={{ size: "2em", color: "#ef4a75" }}>
                        <button className='like' onClick={() => handleLike()}><TbToolsKitchen2 /></button>
                    </IconContext.Provider>
                </div>

            </div>

        </div >

    )

}



export default MainPage




