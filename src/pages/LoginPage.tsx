import React from 'react';
import styled from 'styled-components';
import LogoImage from '../img/logo.png';

const Login = () => {
	return (
		<LoginWrap>
			<div>
				<LogoImg src={LogoImage} alt='talktudy logo' />
			</div>
			<div>
				<div>
					<InputTitle>아이디</InputTitle>
					<LoginInput type='text' name='input_id' placeholder='아이디를 입력하세요' />
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
			<div>소셜로그인?</div>
		</LoginWrap>
	);
};

export default Login;

const LoginWrap = styled.div`
	width: 400px;
	height: 500px;
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
`;

const CheckWrap = styled.div`
	text-align: left;
	font-size: 18px;
`;
const ButtonWrap = styled.div`
	padding: 1.5rem 0 1.5rem 0;
	border-bottom: 1px solid gray;
`;
const LoginButton = styled.button`
	width: 80%;
	font-size: 1.5rem;
	border: 1px solid black;
	border-radius: 10px;
	background-color: #fbd85d;
`;
