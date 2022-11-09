const Recipe = ({itemList,setItemList,user,index}) => {
    return ( 
    <div className="recipe">
              <h1>Hello {user}</h1>

        {itemList.length > 0 ? itemList.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <li>{item.ingredients}</li>
            </div>
          ))
        : "Il y  a pas de recette pour le moment mais vous pouvez en ajouter une!"}
    </div>
                

     );
}
 
export default Recipe;