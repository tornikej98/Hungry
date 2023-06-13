import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchRecipeDetails } from '../utils/ApiService'
import { useAuthCtx } from '../hooks/useAuthCtx'
import { useRecipeCtx } from '../hooks/useRecipeCtx'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { BiArrowBack } from 'react-icons/bi'
import('./recipepage.css')


function RecipePage() {
    const [selectedRecipe, setSelectedRecipe] = useState('')
    const [comment, setComment] = useState('')
    const { user } = useAuthCtx()
    const params = useParams()


    console.log(params)



    useEffect(() => {

        const fetchRecipeOnStartup = async () => {

            const response = await fetchRecipeDetails(params.id, user)

            if (response.ok) {
                setSelectedRecipe(response)
            }
        }

        fetchRecipeOnStartup()



    }, [])




    // console.log(selectedRecipe.extendedIngredients)


    // selectedRecipe && selectedRecipe.extendedIngredients.map((num) => {
    //     console.log(num.name)
    // })



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

                <div className='recipe-ingredients-container'>
                    <div className='recipe-ingredients'>
                        <h4>Ingredients:</h4>
                        {
                            selectedRecipe && selectedRecipe.extendedIngredients.map((num) => (

                                <li key={num._id}>{num.name}</li>

                            ))
                        }
                    </div>

                </div>


                <div className='recipe-instructions'>
                    <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
                </div>


                <div className='recipe-notes'>
                    <h4>Notes:</h4>
                    <textarea className='recipe-notes-textarea' placeholder='add notes...' onChange={setComment}></textarea>
                </div>




                <a href={selectedRecipe.sourceUrl}>
                    <h4>View the full recipe here...</h4>
                </a>


            </div>
        </div >
    )
}

export default RecipePage