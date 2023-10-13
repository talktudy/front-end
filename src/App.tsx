import { Route, Routes } from 'react-router-dom';
import { Header } from './components/index';
import { MainPage, LoginPage, DetailPage, DetailPage_owner, RegisterPage } from './pages/index';
import './global.css';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/detail' element={<DetailPage />} />
					<Route path='/detail/own' element={<DetailPage_owner />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
