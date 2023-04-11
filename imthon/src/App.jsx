import Fetchdata from "./coponents/Fetchdata";
import Card from "./coponents/card";
import Examp from "./coponents/exap"
import Search from "./coponents/search"
import { Routes, Route } from 'react-router-dom';



import Home from "./coponents/Home";

const App = () => {
  return (
    <>
      {/* <Examp /> */}
      <Search />
      <Routes>
        {/* <Route path="/" element={} />  */}
        <Route path="/" element={<Fetchdata />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
    </>
  )
}

export default App
