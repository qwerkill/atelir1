import { useState } from "react";
import AddRecipe from "./components/AddRecipe";
import RecipeLogin from "./components/RecipeLogin";
import Recipe from "./components/Recipe";
import NewRecipe from "./components/NewRecipe";


function App() {
  const [user, setUser] = useState("");
  const [itemList,setItemList] = useState([
    {
        id:1,
        name:"item1",
        description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vel qui quibusdam perspiciatis aperiam eligendi, modi nam esse quidem earum nobis consectetur repellat accusamus maxime aspernatur magnam sint eaque aliquid.",
        ingredients:"item1, item2, item3",
    },
    

]);

  return (
    <div className="App">
       {user ? <Recipe itemList={itemList} user={user}/> : <RecipeLogin setUser={setUser} />}
       <AddRecipe  itemList={itemList} setItemList={setItemList}/>
       {itemList.map((element, index) => 
            <NewRecipe 
            key={index}
            element={element}
            index={index}
            itemList={itemList}
            setItemList={setItemList}
            />
         )}
    </div>
  );
}

export default App;
