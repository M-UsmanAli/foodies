import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Fooditem.css'
import { StoredContext } from '../../context/StoredContext'

interface Props {
    id: number
    name: string
    price: string
    image: string
    description: string
}
const Fooditem = ({ id, name, price, image, description }: Props) => {

    const [itemCount, setItemCount] = useState(0)
    const {cartItems, addToCart, removeFromCart}= useContext(StoredContext)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
                {
                    !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                    :
                    <div className='food-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default Fooditem