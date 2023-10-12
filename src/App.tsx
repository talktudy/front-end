import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Main/Header';
import ViewMain from './Main/ViewMain';
import Login from './Login/Login';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<ViewMain />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
