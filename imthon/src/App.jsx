import Card from "./coponents/card";
import Exap from "./coponents/exap"
import Footer from "./coponents/footer";



import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Exap />} />
        <Route path="/Home" element={<Exap />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
