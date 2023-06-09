import { useAuthCtx } from '../hooks/useAuthCtx';
import TopBar from "../components/TopBar"
import { Link } from 'react-router-dom'
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

import('./mainpage.css')




//make api call on page startup

//if red button is clicked make another call (changing the image)
//if green button is called, post recipe in database, and then make another call (changing the image)



function MainPage() {

    const [randomRecipe, setRandomRecipe] = useState('')
    const [dropDown, setDropDown] = useState(false)




    const fetchOnClick = async () => {

        try {
            const response = await fetch('https://api.spoonacular.com/recipes/random?number=1&tags=greek,main+course&apiKey=e0be19ede420492499f458b771674281', {

            })
            const jsonResponse = await response.json()

            if (response.ok) {
                setRandomRecipe(jsonResponse)
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    // useEffect(() => {

    //     const fetchOnStartup = async () => {
    //         try {
    //             const response = await fetch('https://api.spoonacular.com/recipes/random?number=1&tags=greek,main+course&apiKey=e0be19ede420492499f458b771674281', {

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
    console.log(dropDown)
    // console.log(randomRecipe)


    return (


        <div className='main-page'>
            <div className='top-bar'>
                <IconContext.Provider value={{ size: "2em" }}>
                    <FiSettings className='icon' onClick={() => { setDropDown((prev) => !prev) }} />
                </IconContext.Provider>

                <h3>Hungry</h3>

                <Link to='/likedRecipes'>
                    <IconContext.Provider value={{ color: 'red', size: "2em" }}>
                        < BsFillHeartFill />
                    </IconContext.Provider>
                </Link>

            </div>
            {
                dropDown && <div className='flex flex-col dropdown-menu'>
                    <div className='flex flex-col gap-4'>
                        <h3>Cuisine</h3>
                        <label for="USA"> <US className='country-flag' /></label>
                        <input type="checkbox" id="USA" value="american" />

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
                    </div>

                </div>
            }


            <div className='recipe-selector'>
                <div className='picture'>
                    {/* <img src={randomRecipe.recipes[0].image} /> */}

                </div>
                <IconContext.Provider value={{ size: "2em" }}>

                    <div className='buttons'>
                        <button className='dislike' onClick={() => fetchOnClick()}><TbTrash /></button>
                        <button className='info'>?</button>
                        <button className='like'><TbToolsKitchen2 /></button>
                    </div>
                </IconContext.Provider>
                <div className='recipe-name'>
                    {/* <p>{randomRecipe.recipes[0].title}</p> */}
                </div>

            </div>


        </div>

    )


}



export default MainPage