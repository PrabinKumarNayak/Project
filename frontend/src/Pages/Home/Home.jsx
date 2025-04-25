import { useState } from "react"
import Header from "../../components/Header/Header"
import "./Home.css"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"

export default function Home(){
    const[category,setCategory] = useState("All")
    return(
        <div>
            <Header/>
            <ExploreMenu setCategory = {setCategory} category = {category}/>
            <FoodDisplay category = {category} />
        </div>
    )
}