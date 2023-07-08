import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';
import { RestaurantDetailPage } from './pages/restaurantDetailPage/RestaurantDetailPage';

function App() {
  return (
    <>
      <div className="App">

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/restaurantdetail/:restaurantId" element={<RestaurantDetailPage/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
