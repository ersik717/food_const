import { useParams, useLocation } from "react-router-dom"
import Header from "../components/Header/Header";

export default function DishPage() {
    const location = useLocation()
    const { state } = location;
    const params = useParams();
    const id = parseInt(params.id);

    const listDishes = state.from.map((dish) =>
        (
            dish.dish_id == id
                ? (
                    <ul key={dish.dish_id}>
                        <b>{dish.dish_name}</b>
                        <li>{dish.dish_description}</li>
                    </ul>
                )
                : null
        )   
    );

    return (
        <>  
            {listDishes}
        </>
    )
}