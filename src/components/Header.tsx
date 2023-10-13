import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../img/logo.png';

interface HeaderProps {
	isLoggedIn?: boolean; // Add a prop to check if user is logged in
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
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
				<MenuTitle>스터디</MenuTitle>
				<MenuTitle>팀 채팅</MenuTitle>
			</Menu>

			{/* 사용자 영역 */}
			<UserSection>
				{isLoggedIn ? (
					<>
						{/* <AlarmIcon />
						<UserIcon /> */}
					</>
				) : (
					<>
						{/* You can replace this with an actual login button */}
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

const MenuTitle = styled.div`
	font-size: 2rem;
	color: white;
	text-shadow: 4px 2px 2px gray;
	margin-right: 2rem;
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
