import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";



const SearchPageMeal = () => {
    const [meals, setMeals] = useState({});
    const params = useParams().name
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params}`)
            .then(({data}) => {
                setMeals(data.meals)
            })
            .finally(() => {
                setLoading(false)
            })
    },[params])

    return (
        <div className={'container'}>
            {
                meals === null ? <h4>not found</h4> :
                    <div>
                        { loading ? <h2>Wait pls...</h2> :
                        <div className={'row'}>
                            {
                                meals.map((meal, idx) =>
                                    <div key={idx} className={'col-4'}>
                                        <div className="box">
                                            <img className={'search-meal'} src={meal.strMealThumb} alt=""/>
                                            <Link to={`/dinner/${meal.idMeal}`}>
                                                <h3>{meal.strMeal}</h3>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    }
                    </div>
            }
        </div>
    );
};

export default SearchPageMeal;