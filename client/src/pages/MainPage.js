import { Link } from 'react-router-dom'
import { useAuthCtx } from '../hooks/useAuthCtx';
import TopBar from "../components/TopBar"

import { useEffect } from 'react'
import React, { useState } from 'react'
import { addLikedRecipe } from '../utils/ApiService'

import { TbToolsKitchen2, TbTrash, TbMeatOff } from 'react-icons/tb'
import { FiSettings } from 'react-icons/fi'
import { LuWheatOff, LuVegan } from 'react-icons/lu'
import { BiLogOut } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { US, CN, GR, IT, IN, JP, MX, TH, VN } from 'country-flag-icons/react/3x2'
import { MultiSelect } from "react-multi-select-component"

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
    { label: 'Apetizer', value: "apetizer" },
    { label: 'Main', value: "main+course" },
    { label: "Dessert", value: "dessert" },


]

const diet = [
    { label: <TbMeatOff />, value: "vegetarian" },
    { label: <LuVegan />, value: "vegan" },
    { label: <LuWheatOff />, value: "gluten+free" },
]


//make api call on page startup

//if red button is clicked make another call (changing the image)
//if green button is called, post recipe in database, and then make another call (changing the image)



function MainPage() {
    const { user } = useAuthCtx()
    const [randomRecipe, setRandomRecipe] = useState('')
    const [dropDown, setDropDown] = useState(false)
    const [likedRecipe, setLikedRecipe] = useState('')
    const [selected, setSelected] = useState([])



    const arrayOfTags = []


    selected.map((sel) => {
        arrayOfTags.push(sel.value)
    })

    const stringTags = arrayOfTags.toString()
    // let tagsForAPI = selected.reduce((result, tag) => {
    //     return `${result}${tag.value}`, ''
    // })


    const api = `https://api.spoonacular.com/recipes/random?number=1&tags=${stringTags}&apiKey=e0be19ede420492499f458b771674281`




    const handleLike = () => {



        const { id, title, image, cuisines, sourceUrl, } = randomRecipe.recipes[0]
        addLikedRecipe(({ id, title, image, cuisines, sourceUrl }), user)


        console.log(stringTags)
        console.log(randomRecipe.recipes[0])
        console.log(id, title, image, cuisines, sourceUrl)
        console.log(JSON.stringify({ id, title, image, cuisines, sourceUrl }))

        // fetchOnClick()

    }



    const fetchOnClick = async () => {

        // try {
        //     const response = await fetch(api, {

        //     })
        //     const jsonResponse = await response.json()

        //     if (response.ok) {
        //         setRandomRecipe(jsonResponse)
        //     }
        //     console.log(randomRecipe.recipes)
        // } catch (error) {
        //     console.log(error)
        // }
    }


    // useEffect(() => {

    //     const fetchOnStartup = async () => {
    //         try {
    //             const response = await fetch(api, {

    //             })
    //             const jsonResponse = await response.json()

    //             if (response.ok) {
    //                 setRandomRecipe(jsonResponse)
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchOnStartup()

    //     console.log('effect')
    // }, [])


    // console.log(randomRecipe.recipes)
    // console.log(randomRecipe)


    //use form for input 
    //on change update state variable
    //

    return (


        <div className='main-page'>
            <div className='top-bar'>
                <IconContext.Provider value={{ size: "2em" }}>
                    <BiLogOut className='icon' onClick={() => { setDropDown((prev) => !prev) }} />
                </IconContext.Provider>

                <h3>Hungry</h3>

                <Link to='/likedRecipes'>
                    <IconContext.Provider value={{ color: '#fe3c72', size: "2em" }}>
                        < BsFillHeartFill />
                    </IconContext.Provider>
                </Link>

            </div>



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

            {dropDown && <div className='flex flex-col dropdown-menu'>
                <h4>Log out?</h4>
                <button onClick={() => { setDropDown((prev) => !prev) }}>NO</button>
                <Link to='/logout'>
                    <button >Yes</button>
                </Link>


            </div>}

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


            <div className='recipe-selector'>
                <div className='picture'>

                    {/* {randomRecipe.recipes[0].image ? <img src={randomRecipe.recipes[0].image} /> : 'no image'} */}
                    {/* <img src={randomRecipe.recipes[0].image} /> */}

                </div>
                <IconContext.Provider value={{ size: "2em" }}>

                    <div className='buttons'>
                        <button className='dislike' onClick={() => fetchOnClick()}><TbTrash /></button>
                        <button className='info'>?</button>
                        <button className='like' onClick={() => handleLike()}><TbToolsKitchen2 /></button>
                    </div>
                </IconContext.Provider>
                <div className='recipe-name'>
                    {/* <p>{randomRecipe && randomRecipe.recipes[0].title}</p> */}
                </div>

            </div>


        </div>

    )


}



export default MainPage