import React, { createContext } from 'react';

import ChildC from './ChildC';

const myInfo = createContext();

function App() {

  const data = {
    firstName: "Rano",
    lastName: "Mal",
    gender: "Male",
    city: "Umerkot",
    phoneNo: "67467 678900",
  }


  return (
    <div>
      <myInfo.Provider value={data}>
        <ChildC />
      </myInfo.Provider>
    </div>
  );
}

export default App;
export { myInfo }


// What is useContext;
// To Solve Prop Drilling
//eg: I have Parent Component -> (inside) ChildA  Comp: inside this I am calling my ChildB ComP: and inside this 
//I am calling my ChildC
//parameter:-
// 1) Create, createContext()
// 2) Provider, 
// 3) useContext;