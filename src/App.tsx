import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/index';
import { MainPage, LoginPage, DetailPage, DetailPage_owner } from './pages/index';
import './global.css';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/detail' element={<DetailPage />} />
				<Route path='/detail/own' element={<DetailPage_owner />} />
			</Routes>
		</>
	);
}

export default App;
