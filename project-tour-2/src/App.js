// import logo from './logo.svg';
import './App.css';
// import Formjs from './Component/Customisetour/formjs';
// import Formjs from './Component/Customisetour/formjs';
import Home from './Pages/Home';
import About from './Pages/About';
import Grouptour from './Pages/Grouptour';
import Destination from './Pages/Destination';
import Personaltour from './Pages/Personaltour';
import Custamizetour from './Pages/Custamizetour';
import Contactmain from './Pages/Contactmain';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import { Sanjay } from './Component/Contact/sanjay';
// import Contact1 from './Component/Contact/Contact1';
import Kpatnerpg from './Pages/Kpatnerpg';
function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Grouptour' element={<Grouptour/>}></Route>
          <Route path='/Destination' element={<Destination/>}></Route>
          <Route path='/Personaltour' element={<Personaltour/>}></Route>
          <Route path='/Custamizetour' element={<Custamizetour/>}></Route>
          <Route path='/Contactmain' element={<Contactmain/>}></Route>
          <Route path='/Kpatner' element={<Kpatnerpg/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Formjs/> */}
    </>
  );
}

export default App;
