
// react hook-- special function that allows functional components 
//             to use features without using class components
// usestate()-- a react hook that allowsa the creation of a stateful variable
//             and a setter function to update its value in the
//            virtual DOM


import MyComponent from "./MyComponent"
import Counter from "./Counter"
import OnChanges from "./OnChanges"





// onchange  is an event handler used primarily with form elements
//          triggers a function everytime the value of the input changes






function App() {
 
  return (
    <>
     <MyComponent />;
     <Counter />
     <OnChanges />
   
    </>
  )
}

export default App
