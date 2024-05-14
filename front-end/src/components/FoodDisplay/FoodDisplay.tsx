import { useContext } from 'react'
import { StoredContext } from '../../context/StoredContext'
import './FoodDisplay.css'
import Fooditem from '../FoodItem/Fooditem'

interface Props{
    category:any
}
const FoodDisplay = ({category}:Props) => {
    const { food_list } = useContext(StoredContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Around You</h2>
            <div className="food-display-list">
                {food_list.map((item: any, index: any)=>{
                    if (category==='All' || category===item.category) {
                        return <Fooditem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay