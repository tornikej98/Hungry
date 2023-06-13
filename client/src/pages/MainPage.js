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



    // const api = `https://api.spoonacular.com/recipes/random?number=1&tags=${stringTags}&apiKey=e0be19ede420492499f458b771674281`



    const handleLike = () => {



        // const { id, title, image, cuisines, sourceUrl, summary, instructions, extendedIngredients } = randomRecipe.recipes[0]
        // addLikedRecipe(({ id, title, image, cuisines, sourceUrl, summary, instructions, extendedIngredients }), user)
        // fetchOnClick()




        //REMOVE
        // console.log(stringTags)
        // console.log(randomRecipe.recipes[0])
        // console.log(id, title, image, cuisines, sourceUrl)
        // console.log(JSON.stringify({ id, title, image, cuisines, sourceUrl }))



        // console.log(user);
        //REMOVE-END
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
        // const getRecipes = async () => {
        //     const recipe = await fetchRecipeFromApi(stringTags)

        //     if (recipe.ok) {
        //         (recipe)
        //         setLoading(false)

        //     } else {
        //         console.log('error')
        //     }
        // }


        // getRecipes()



    }, [])


    console.log(randomRecipe.recipes)
    console.log(randomRecipe)


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









{/* {
                dropDown && <div className='flex flex-col dropdown-menu'>
                    <form className='flex flex-col gap-4'>
                        <h3>Cuisine</h3>
                        <label for="USA"> <US className='country-flag' /></label>
                        <input type="checkbox" id="USA" options="american" />

                        <label for="China"> <CN className='country-flag' /></label>
                        <input type="checkbox" id="China" value="chinese" />

                        <label for="Greece"> <GR className='country-flag' /></label>
                        <input type="checkbox" id="Greece" value="greek" />

                        <label for="India"> <IN className='country-flag' /></label>
                        <input type="checkbox" id="India" value="indian" />

                        <label for="Italy"> <IT className='country-flag' /></label>
                        <input type="checkbox" id="Italy" value="italian" />

                        <label for="Japan"> <JP className='country-flag' /></label>
                        <input type="checkbox" id="Japan" value="japanese" />

                        <label for="Mexico"> <MX className='country-flag' /></label>
                        <input type="checkbox" id="Mexico" value="mexican" />

                        <label for="Thailand"> <TH className='country-flag' /></label>
                        <input type="checkbox" id="Thailand" value="thai" />

                        <label for="Vietnam"> <VN className='country-flag' /></label>
                        <input type="checkbox" id="Vietnam" value="vietnamese" />

                        <br />
                        <h3>Meal Type</h3>
                        <label for="Breakfast"> Breakfast </label>
                        <input type="checkbox" id="Breakfast" value="breakfast" />

                        <label for="MainCourse"> Main course </label>
                        <input type="checkbox" id="MainCourse" value="main+course" />

                        <label for="Dessert"> Dessert </label>
                        <input type="checkbox" id="Dessert" value="dessert" />

                        <br />
                        <h3>Diet</h3>
                        <label for="Vegetarian"> <TbMeatOff /> </label>
                        <input type="checkbox" id="Vegetarian" value="vegetarian" />

                        <label for="Vegan"> <LuVegan /> </label>
                        <input type="checkbox" id="Vegan" value="vegan" />

                        <label for="GlutenFree"> <LuWheatOff /> </label>
                        <input type="checkbox" id="GlutenFree" value="gluten+free" />

                        <br />
                        <br />
                        <Link to='/logout'>
                            <button className='logout-button'> <BiLogOut /> Logout </button>
                        </Link>
                    </form>

                </div>
            } */}
