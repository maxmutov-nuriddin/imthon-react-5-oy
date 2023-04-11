import Fetchdata from "./coponents/Fetchdata";
import Card from "./coponents/card";
import Search from "./coponents/search"


import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Search />
      <Routes>
        <Route path="/" element={<Fetchdata />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
    </>
  )
}

export default App
