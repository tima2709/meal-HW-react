import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const MealPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [dinner, setDinner] = useState({})
    const [loading, setLoading] = useState(true)
    const [showMore, setShowMore] = useState(false)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.strMeal}`)
            .then(({data})=> {
                setDinner(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [params.strMeal])
    console.log(params)
    return (
        <div className={'container'}>

            {
                loading ? <h3>Loading...</h3> :
                    <div>
                        <div style={{
                            textAlign: 'center'
                        }}>
                            <h2><span>Name of meal: </span>{dinner.meals[0].strMeal}</h2>
                            <h3><span>Home of food: </span>{dinner.meals[0].strArea}</h3>
                            <h3><span>Food categories: </span>{dinner.meals[0].strCategory}</h3>
                        </div>
                        <div className={'info-meal'}>
                            <div>
                                <img style={{
                                    width: '300px'
                                }}
                                     src={dinner.meals[0].strMealThumb} alt=""/>
                            </div>
                            <div className={'information'}>
                                <p><span>Instructions: </span>{dinner.meals[0].strInstructions}</p>
                            </div>
                        </div>
                        <div className={'ingredients'}>
                            <div>
                                <h4><span>Ingredients: </span></h4>
                            </div>
                            <div>
                                <div className={'items-ingredient'}>
                                    {
                                        dinner.meals[0].strIngredient1 &&
                                        <div>
                                            <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient1}-Small.png`} alt=""/>
                                            <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient1}`}>
                                                <h4>{dinner.meals[0].strIngredient1}</h4>
                                            </Link>
                                        </div>

                                    }
                                    {
                                        dinner.meals[0].strIngredient2 &&
                                        <div>
                                            <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient2}-Small.png`} alt=""/>
                                            <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient2}`}>
                                                <h4>{dinner.meals[0].strIngredient2}</h4>
                                            </Link>
                                        </div>

                                    }
                                    {
                                        dinner.meals[0].strIngredient3 &&
                                        <div>
                                            <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient3}-Small.png`} alt=""/>
                                            <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient3}`}>
                                                <h4>{dinner.meals[0].strIngredient3}</h4>
                                            </Link>
                                        </div>

                                    }
                                    {
                                        dinner.meals[0].strIngredient4 &&
                                        <div>
                                            <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient4}-Small.png`} alt=""/>
                                            <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient4}`}>
                                                <h4>{dinner.meals[0].strIngredient4}</h4>
                                            </Link>
                                        </div>

                                    }
                                    {
                                        dinner.meals[0].strIngredient5 &&
                                        <div>
                                            <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient5}-Small.png`} alt=""/>
                                            <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient5}`}>
                                                <h4>{dinner.meals[0].strIngredient5}</h4>
                                            </Link>
                                        </div>

                                    }
                                </div>
                                {showMore &&
                                    <div className={'items-ingredient'}>
                                        {
                                            dinner.meals[0].strIngredient6 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient6}-Small.png`} alt=""/>
                                                <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient6}`}>
                                                    <h4>{dinner.meals[0].strIngredient6}</h4>
                                                </Link>
                                            </div>

                                        }
                                        {
                                            dinner.meals[0].strIngredient7 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient7}-Small.png`} alt=""/>
                                                <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient7}`}>
                                                    <h4>{dinner.meals[0].strIngredient7}</h4>
                                                </Link>
                                            </div>

                                        }
                                        {
                                            dinner.meals[0].strIngredient8 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient8}-Small.png`} alt=""/>
                                                <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient8}`}>
                                                    <h4>{dinner.meals[0].strIngredient8}</h4>
                                                </Link>
                                            </div>

                                        }
                                        {
                                            dinner.meals[0].strIngredient9 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient9}-Small.png`} alt=""/>
                                                <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient9}`}>
                                                    <h4>{dinner.meals[0].strIngredient9}</h4>
                                                </Link>
                                            </div>

                                        }
                                        {
                                            dinner.meals[0].strIngredient10 &&
                                            <div>
                                                <img src={`https://themealdb.com/images/ingredients/${dinner.meals[0].strIngredient10}-Small.png`} alt=""/>
                                                <Link to={`/dinner/strMeal/${dinner.meals[0].strIngredient10}`}>
                                                    <h4>{dinner.meals[0].strIngredient10}</h4>
                                                </Link>
                                            </div>

                                        }
                                    </div>}
                                <button onClick={() => setShowMore(!showMore)}>
                                    {showMore ? "Show less" : "Show more"}
                                </button>
                            </div>
                        </div>
                    </div>
            }
            <button onClick={() => navigate(-1)}>Go back</button>


        </div>
    )
}

export default MealPage