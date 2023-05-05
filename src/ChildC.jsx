import React, { useContext } from 'react';
import { myInfo } from './App';


const ChildC = () => {
    const info = useContext(myInfo);
    
  return (
    <div>
      <h1>Hi, My first name is {info.firstName} and My lastName is {info.lastName} Gender is {info.gender} and my City is {info.city} </h1>
    </div>
  )
}

export default ChildC

// abidkhan11845@gmail.com