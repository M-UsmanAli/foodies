import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

interface Props{
    category:any,
    setCategory:React.Dispatch<React.SetStateAction<string>>;
}
const ExploreMenu = ({category, setCategory}:Props) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu!</h1>
        <p className='explore-menu-text'>Choose from our menu featuring delectable array of food dishes. Our abbission is to satisfy your CRAVINGS!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory((prev:any)=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                        <img className={category===item.menu_name?'active':""} src={item.menu_image} alt=''/>
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