import { useAuthCtx } from '../hooks/useAuthCtx';
import TopBar from "../components/TopBar"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import React, { useState } from 'react'
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

            <div className='recipe-selector'>
                <div className='picture'>
                    {/* <img src={randomRecipe.recipes[0].image} /> */}

                </div>
                <div className='buttons'>
                    <button onClick={() => fetchOnClick()}>DISLIKE</button>
                    <button>LIKE</button>
                </div>

            </div>

        </div>
    )
}

export default MainPage