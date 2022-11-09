const NewRecipe = ({element,index,itemList,setItemList}) => {
      const handleDelete = (index) => {
          itemList.splice(index, 1)
          setItemList([...itemList])
        }
      

  
 
  
  
      return (
          <li>
                <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        );
  }
   
  export default NewRecipe;