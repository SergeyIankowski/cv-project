import React from 'react'
import { createRoot } from 'react-dom/client'
import Signup from './pages/Signup/Signup';
// console.log("Hello World!");

// const someTest = (saaas: number) => {
//   return saaas;
// };
// console.log(someTest(1));

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
)