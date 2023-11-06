import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../img/logo.png';
import axios from 'axios';

interface HeaderProps {
	isLoggedIn: boolean;
	onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		onLogout();
	};

	return (
		<HeaderWrap>
			{/* 로고영역 */}
			<LogoWrap>
				<Link to='/'>
					<LogoImg src={LogoImage} alt='talktudy logo' />
				</Link>
			</LogoWrap>

			{/* 메뉴 영역 */}
			<Menu>
				<MenuTitle to='/'>스터디</MenuTitle>
				<MenuTitle to='/chat'>팀 채팅</MenuTitle>
			</Menu>

			{/* 사용자 영역 */}
			<UserSection>
				{isLoggedIn ? (
					<>
						<Dropdown>
							<a>내 메뉴</a>
							<DropdownContent>
								<DropboxMenu>
									<Link to='/register'>새 글 쓰기</Link>
									<a onClick={() => alert('준비 중입니다.')}>마이페이지</a>
								</DropboxMenu>
							</DropdownContent>
						</Dropdown>

						<button onClick={handleLogout}>로그아웃</button>
					</>
				) : (
					<>
						<Link to='/login'>
							<LoginBtn>Login</LoginBtn>
						</Link>
					</>
				)}
			</UserSection>
		</HeaderWrap>
	);
};

export default Header;

const HeaderWrap = styled.header`
	width: 98%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fbd85d;
	padding: 0.5rem 1rem;
`;

const LogoWrap = styled.div`
	width: 10rem;
	height: 5rem;
	background-size: cover;
`;

const LogoImg = styled.img`
	width: 100%;
	height: 100%;
`;

const Menu = styled.nav`
	display: flex;
	width: 20rem;
	justify-content: space-evenly;
	// margin-left: -100px;
`;

const MenuTitle = styled(NavLink)`
	margin-right: 2rem;
	font-size: 2rem;
	color: white;
	text-shadow: 4px 2px 2px gray;
	text-decoration: none;
`;

const UserSection = styled.div`
	display: flex;
	align-items: center;
`;
const LoginBtn = styled.button`
	width: 6rem;
	height: 3rem;
	border-radius: 10px;
	font-size: 1.5rem;
	border: none;
	background-color: #f0f0f0;
`;

const Dropdown = styled.li`
	position: relative;
	display: inline-block;
`;
const DropdownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	top: 100%;

	${Dropdown}:hover & {
		display: block;
	}
`;
const DropboxMenu = styled.div`
	display: flex;
	flex-direction: column;
`;
