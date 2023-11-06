import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { Header } from '@components/index';
import {
	ChatListPage,
	BoardListPage,
	LoginPage,
	DetailPage,
	DetailPage_owner,
	RegisterPage,
	EditPage,
	JoinPage,
} from '@pages/index';
import './global.css';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<QueryClientProvider client={queryClient}>
			<Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
			<main>
				<Routes>
					<Route path='/' element={<BoardListPage />} />
					<Route path='/chat' element={<ChatListPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path=':boardId/edit' element={<EditPage />} />
					<Route path='/login' element={<LoginPage onIsLogin={handleLogin} />} />
					<Route path='/detail/:id' element={<DetailPage />} />
					<Route path='/join' element={<JoinPage />} />
					<Route path='/detail/own' element={<DetailPage_owner />} />
				</Routes>
			</main>
		</QueryClientProvider>
	);
}

export default App;
