import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const HomePage = () => {
    const [dinner, setDinner] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v2/1/randomselection.php`)
            .then(({data}) => {
                setDinner(data.meals)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {loading ? <h2>loading...</h2> :
                <div className={'container'}>
                    <div className={'meals-name'}>
                        {
                            dinner.map((meal, idx) =>
                                <div key={idx} className={'meal'}>
                                    <img className={'img-meal'} src={meal.strMealThumb} alt=""/>
                                    <h3>
                                        <Link to={`/dinner/${meal.idMeal}`}>
                                            {meal.strMeal}
                                        </Link>
                                    </h3>
                                </div>
                            )

                        }
                    </div>
                </div>
            }

        </div>
    )
}

export default HomePage