import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu'id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Late-night cravings or exam-time meals — we deliver affordable, tasty food for students on the go. No mess, no stress — just great food at student-friendly prices.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=> setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu