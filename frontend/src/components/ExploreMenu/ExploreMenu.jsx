import { menu_list } from "../../assets/Assets"
import "./ExploreMenu.css"
export default function ExploreMenu(){
    return(
        <>
            <div className="explore-menu" id="explore-menu">
                <h1>Explore our menu</h1>
                <p className="explore-menu-text">Choose from a diverse menu featuring a delecatable array of dishes. Our misson is to Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, earum!</p>
                <div className="explore-menu-list">
                    {
                        menu_list.map()
                    }
                </div>
            </div>
        </>
    )
}