import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoImage from '../img/logo.png';

const Login = () => {
	return (
		<LoginWrap>
			<div>
				<LogoImg src={LogoImage} alt='talktudy logo' />
			</div>
			<div>
				{/* <div>로그인</div> */}
				<div>
					<InputTitle>이메일</InputTitle>
					<LoginInput type='text' name='input_id' placeholder='이메일를 입력하세요' />
				</div>
				<div>
					<InputTitle>패스워드</InputTitle>
					<LoginInput type='password' name='input_pw' placeholder='패스워드를 입력하세요' />
				</div>
				<CheckWrap>
					<label>
						<input type='checkbox' />
						아이디 저장하기
					</label>
				</CheckWrap>
			</div>
			<ButtonWrap>
				<LoginButton type='submit'>Log in</LoginButton>
			</ButtonWrap>
			<LoginBtnDiv>
				{/* <div>아이디 찾기</div>
				<div>패스워드 찾기</div> */}
				<div>
					<StyledLink to='/join'>회원가입</StyledLink>
				</div>
			</LoginBtnDiv>
		</LoginWrap>
	);
};

export default Login;

const LoginWrap = styled.div`
	width: 500px;
	height: 650px;
	margin: 0 auto;
	margin-top: 3rem;
	text-align: -webkit-center;
	background-color: #f0f0f0;
	padding: 3rem 5rem;
`;

const LogoImg = styled.img`
	width: 100%;
	height: 100%;
	margin-bottom: 1rem;
`;
const InputTitle = styled.div`
	margin-bottom: 1rem;
	text-align: left;
	font-size: 24px;
`;
const LoginInput = styled.input`
	margin-bottom: 10px;
	width: 90%;
	font-size: 24px;
	border-radius: 10px;
	padding: 5px 10px 5px 10px;
	border: none;
`;

const CheckWrap = styled.div`
	text-align: left;
	font-size: 18px;
`;
const ButtonWrap = styled.div`
	padding: 1.5rem 0 1.5rem 0;
`;
const LoginButton = styled.button`
	width: 80%;
	height: 3rem;
	font-size: 1.5rem;
	border: 1px solid black;
	border-radius: 10px;
	background-color: #fbd85d;
	color: white;
	border: none;
`;

const LoginBtnDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 24px;
`;
