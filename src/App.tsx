import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Login from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import './global.css';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/detail' element={<DetailPage />} />
			</Routes>
		</>
	);
}

export default App;
