import { useState } from "react"
import Header from "../../components/Header/Header"
import "./Home.css"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
export default function Home(){
    const[category,setCategory] = useState("All")
    return(
        <div>
            <Header/>
            <ExploreMenu setCategory = {setCategory} category = {category}/>
        </div>
    )
}