import Header from "../components/Header/Header"
import { useEffect, useState, useCallback } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


export default function RecipesPage() {


    const [loading, setLoading] = useState(false)
    const [dishes, setDishes] = useState();

    const fetchDishes = useCallback(async () => {
        setLoading(true)
        const apiURL = 'http://127.0.0.1:8000/api/v1/dishes/'
        axios.get(apiURL)
            .then((response) => {
                setDishes(response.data)
            })
        setLoading(false)
    }, [])

    const handleDish = (event) => {
        setDishes(event.target.value)
    }

    useEffect(() => {
        fetchDishes()
    }, [setDishes])

    if (!dishes) return null;

    return (
        <>
            <section>
                {loading && <p>Loading ...</p>}

                <div className="d-flex justify-content-around">
                    {dishes.map(dish => (
                        <Card key={dish.dish_id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={dish.image_url} style={{ height: '10rem '}}/>
                            <Card.Body>
                                <Card.Title>{dish.dish_name}</Card.Title>
                                <Card.Text>
                                    {/* {dish.dish_description} */}
                                </Card.Text>
                                <Button 
                                    as={Link} 
                                    key={dish.dish_id} 
                                    to={{
                                            pathname: `/${dish.dish_id}`,
                                        }} 
                                    state={{
                                            from: dishes
                                        }}
                                    variant="primary">Перейти</Button>
                            </Card.Body>
                        </Card>
                    ))}

                </div>
            </section>
        </>

    )
}