import { useState } from "react";

const AddRecipe = ({setItemList,itemList}) => {
  const [credentials, setCredentials] = useState ({});

  const handleSubmit = (event) => {
    event.preventDefault();  
    const newItem =    {
      ...credentials,
      id: itemList.length,
      isDone : false
    }
    setItemList([
      ...itemList,
      newItem
    ])
  }

  const handleChange = (event) => {
    console.log('handleChange')
    const {value, name} = event.target
    setCredentials({
      [name]: value
    })
  }
    return ( 
        <form  onSubmit={handleSubmit}>
        <input type="texte" onChange={handleChange} value={credentials.name} name="name"/>
        <input type="submit"/>
      </form>
     );
}
 
export default AddRecipe;