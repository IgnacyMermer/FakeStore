import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainScreen from './MainScreen';
import BasketScreen from './pages/BasketScreen';
import Details from './pages/Details';
import LogInScreen from './pages/LogInScreen';


function App() {
  return (
    <div className="App" style={{marginTop:'80px'}}>
      <Router>
        <header>
          <Navbar/>
        </header>
        <Routes>
          <Route path='/' element={<MainScreen/>}/>
          <Route path='/szczegoly/:id_produktu' element={<Details/>}/>
          <Route path='/koszyk' element={<BasketScreen/>}/>
          <Route path='/twoje_konto' element={<LogInScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
