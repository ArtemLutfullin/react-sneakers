import './App.css';
import { Routes, Route, Outlet } from 'react-router';
import Catalog from './components/Header/Catalog.jsx';
import Head from './components/Header/Head.jsx';
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Head />
            <Outlet />
          </div>
        }
      >
        <Route index element={<Catalog />} />
        <Route path="/favorites" element={<div>Валера лучший!!!</div>} />
        <Route path="/profile" element={<div>Стр профиля</div>} />
      </Route>
    </Routes>
  );
}

export default App;
