import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuthCtx } from '../hooks/useAuthCtx'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { BiArrowBack } from 'react-icons/bi'
import('./recipepage.css')

function RecipePage() {
    const [selectedRecipe, setSelectedRecipe] = useState('')
    const { user } = useAuthCtx()
    const params = useParams()


    console.log(params)



    useEffect(() => {
        const fetchOnStartup = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/recipes/' + params.id, {
                    headers: { 'Authorization': `Bearer ${user.accessToken} ` }
                })
                const jsonResponse = await response.json()

                if (response.ok) {
                    setSelectedRecipe(jsonResponse)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchOnStartup()

    }, [])




    const summary = selectedRecipe.summary
    const instructions = selectedRecipe.instructions

    //use effect and params.id
    return (
        <div className='recipe-page'>
            <div className='top-bar'>
                <Link to='/likedRecipes'>
                    <IconContext.Provider value={{ size: "2em", color: '#fe3c72' }}>
                        <BiArrowBack />
                    </IconContext.Provider>
                </Link>

                <h1>Recipe Details</h1>
                <IconContext.Provider value={{ color: '#fe3c72', size: "2em" }}>
                    {selectedRecipe.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </IconContext.Provider>
            </div>

            <div className='recipe-description'>

                <div className='image-frame'>
                    <img src={selectedRecipe.image ? selectedRecipe.image : 'no image :('} alt="Recipe has no image :( " />
                </div>

                <div className='recipe-title'>
                    <h2>{selectedRecipe.title}</h2>
                </div>




                <div className='recipe-summary'>
                    <p dangerouslySetInnerHTML={{ __html: summary }}></p>
                </div>

                <div className='recipe-instructions'>
                    <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
                </div>

                <br />
                <a href={selectedRecipe.sourceUrl}>
                    <h4>View the full recipe here...</h4>
                </a>


            </div>
        </div >
    )
}

export default RecipePage