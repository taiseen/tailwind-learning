import { Routes, Route, } from "react-router-dom";
import { NavBar } from "./components";
import { AllPlaces, Favorites, NewPlace } from './pages';

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<AllPlaces />} />
        <Route path='/new-place' element={<NewPlace />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </ >
  );

}

export default App;
