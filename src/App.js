import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Reservation from './components/pages/ReservationPage';
import User from './components/pages/UserPage';
import Request from './components/pages/RequestPage';
function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Reservation/>} />
         <Route path='/reservations' element={<Reservation/>} />
         <Route path='/users' element={<User/>} />
         <Route path='/requests' element={<Request/>} />
       </Routes>
    </div>
  );
}

export default App;
