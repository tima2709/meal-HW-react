import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const IngredientMealPage = () => {
    const [ingredient, setIngredient] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.ingredient}`)
            .then(({data})=>{
                setIngredient(data.meals)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [params.ingredient])
    return (
        <div>
            {loading ? <h2>Loading...</h2> :
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-5'}>
                            <div className={'box'}>
                                <img src={`https://themealdb.com/images/ingredients/${params.ingredient}.png`} alt=""/>
                            </div>
                        </div>
                        <div className={'col-7'}
                            style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}>
                            {
                                ingredient.map((meal, idx) => <div key={idx} className={'from-ingredient'}>
                                        <img src={meal.strMealThumb} alt=""/>
                                        <Link to={`/dinner/${meal.idMeal}`}>
                                            <h3>{meal.strMeal}</h3>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <button onClick={() => navigate(-1)}>Go back</button>
                </div>
            }

        </div>
    )
};

export default IngredientMealPage;