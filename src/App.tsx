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

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<BoardListPage />} />
					<Route path='/chat' element={<ChatListPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path=':boardId/edit' element={<EditPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/detail/:id' element={<DetailPage />} />
					<Route path='/join' element={<JoinPage />} />
					<Route path='/detail/own' element={<DetailPage_owner />} />
				</Routes>
			</main>
		</QueryClientProvider>
	);
}

export default App;
