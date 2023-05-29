import './App.css';
import Home_page from './components/Home_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Membership_page from './components/Membership_page';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home_page />}></Route>
          <Route path="/Membership_page" element={<Membership_page />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
