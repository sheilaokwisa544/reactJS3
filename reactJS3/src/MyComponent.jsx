
import React, {useState} from "react";



function MyComponent(){

   
const  [name, setName]= useState("Guest");
const [age,setAge] = useState(0);
const [isEmployed, setIsEmployed] =useState(false);


    const updateName = () => {
      setName("sheila");
    }
    const incrementAge = ()=>{
        setAge(age + 2);
    }
    const toggleEmplyedStatus =() =>{
        setIsEmployed(!isEmployed);
    }


    return(
        <div>
            <p>name:   {name} </p>
            <button onClick={updateName}>set name</button>

            <br />
            <p>age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            
            <br />
            <p>is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmplyedStatus}>Toggle Employment status</button>
        </div>

       

      
    )
}
export default MyComponent