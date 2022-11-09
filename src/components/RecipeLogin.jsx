import { useState } from "react";

const RecipeLogin = ({setUser}) => {
    const [username, setUsername] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username);
      };
      return (
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="user"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input type="submit" value="submit" />
        </form>
      );
    };
export default RecipeLogin;