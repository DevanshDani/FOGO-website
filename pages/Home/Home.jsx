import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/Exploremenu/Exploremenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import Appdownload from '../../component/Appdownload/Appdownload'
const home = () => {
  const [category,setcategory] =useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
        <Appdownload/>
    </div>
  )
}

export default home
