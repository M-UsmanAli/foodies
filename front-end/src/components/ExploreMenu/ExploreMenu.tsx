import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu!</h1>
        <p className='explore-menu-text'>Choose from our menu featuring delectable array of food dishes. Our abbission is to satisfy your CRAVINGS!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div className="explore-menu-list-item" key={index}>
                        <img src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu