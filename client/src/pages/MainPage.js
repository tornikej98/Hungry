import { useAuthCtx } from '../hooks/useAuthCtx';
import TopBar from "../components/TopBar"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import React, { useState } from 'react'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { TbTrash } from 'react-icons/tb'
import { IconContext } from "react-icons";

import('./mainpage.css')




//make api call on page startup

//if red button is clicked make another call (changing the image)
//if green button is called, post recipe in database, and then make another call (changing the image)



function MainPage() {

    const [randomRecipe, setRandomRecipe] = useState('')



    const fetchOnClick = async () => {

        // try {
        //     const response = await fetch('https://api.spoonacular.com/recipes/random?number=1&tags=greek,main+course&apiKey=6d13482078f04a64b617d5b8bcb7628b', {

        //     })
        //     const jsonResponse = await response.json()

        //     if (response.ok) {
        //         setRandomRecipe(jsonResponse)
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }


    useEffect(() => {

        // const fetchOnStartup = async () => {
        //     try {
        //         const response = await fetch('https://api.spoonacular.com/recipes/random?number=1&tags=greek,main+course&apiKey=6d13482078f04a64b617d5b8bcb7628b', {

        //         })
        //         const jsonResponse = await response.json()

        //         if (response.ok) {
        //             setRandomRecipe(jsonResponse)
        //         }
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

        // fetchOnStartup()
    }, [])
    console.log(randomRecipe.recipes)
    return (

        <div className='main-page'>
            <TopBar />
            <Link to='/likedRecipes'>
                <h3>LikedRecipes</h3>
            </Link>

            <div className='dropdown-menu'>
                <h4>Settings</h4>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>

                </ul>
            </div>
            <div className='recipe-selector'>
                <div className='picture'>
                    {/* <img src={randomRecipe.recipes[0].image} /> */}

                </div>
                <IconContext.Provider value={{ size: "2em" }}>

                    <div className='buttons'>
                        <button className='dislike' onClick={() => fetchOnClick()}><TbTrash className='icon' /></button>
                        <button className='info'>?</button>
                        <button className='like'><TbToolsKitchen2 className='icon' /></button>
                    </div>
                </IconContext.Provider>
                <div className='recipe-name'>
                    <p>dish name</p>
                </div>

            </div>

        </div>
    )


}



export default MainPage