import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '@/img/logo.png';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';

interface LoginProps {
	onIsLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onIsLogin }) => {
	const navigate = useNavigate();
	// 로그인에 필요한 변수 선언
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
	const [isRemember, setIsRemember] = useState<boolean>(false);

	const handleChange =
		(setFunction: React.Dispatch<React.SetStateAction<string>>) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setFunction(event.target.value);
		};
	//이메일 유효성 검사
	const isValidEmail = (email: string): boolean => {
		const emailRegex =
			/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

		return emailRegex.test(email);
	};

	// 로그인 시 입력값 유효성 확인
	const userImputCheck = () => {
		//null or "" check
		if (email === '' || email === null) {
			alert('이메일을 입력해주세요.');
			return false;
		}
		if (!isValidEmail(email)) {
			alert('이메일 양식을 정확히 입력해주세요.');
			return false;
		}
		if (password === '' || password === null) {
			alert('패스워드를 입력해주세요.');
			return false;
		}
		return true;
	};
	// 로그인 시 실행될 함수
	const onLogin = () => {
		if (!userImputCheck()) {
			return;
		} else {
			axios({
				url: 'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/api/auth/login', // 통신할 웹문서
				method: 'post', // 통신 방식
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
				data: {
					// 보낼 데이터
					email: email,
					password: password,
				},
			})
				.then(function (response: any) {
					console.log('onLogin response : ', response.data);
					const data = response.data;
					localStorage.setItem('accessToken', data.accessToken);
					localStorage.setItem('refreshToken', data.refreshToken);
					//아이디 저장하기 기능
					if (isRemember) {
						setCookie('rememberEmail', email);
					}
					navigate('/');
					onIsLogin();
				})
				.catch(function (error: any) {
					console.log('onLogin error : ', error);
					Swal.fire('로그인에 실패하였습니다.</br> 다시 시도해 주세요!');
				});
		}
	};

	useEffect(() => {
		if (cookies.rememberEmail !== undefined) {
			setEmail(cookies.rememberEmail);
			setIsRemember(true);
		}
	}, []);
	const handleOnChange = (e: any) => {
		setIsRemember(e.target.checked);

		if (e.target.checked === false) {
			removeCookie('rememberEmail');
		}
	};
	return (
		<LoginWrap>
			<div>
				<LogoImg src={LogoImage} alt='talktudy logo' />
			</div>
			<div>
				{/* <div>로그인</div> */}
				<div>
					<InputTitle>이메일</InputTitle>
					<LoginInput
						type='email'
						name='email'
						value={email}
						onChange={handleChange(setEmail)}
						placeholder='이메일를 입력하세요'
					/>
				</div>
				<div>
					<InputTitle>패스워드</InputTitle>
					<LoginInput
						type='password'
						name='password'
						value={password}
						onChange={handleChange(setPassword)}
						placeholder='패스워드를 입력하세요'
					/>
				</div>
				<CheckWrap>
					<label>
						<input
							type='checkbox'
							id='rememberEmail'
							onChange={handleOnChange}
							checked={isRemember}
							// checked={false}
						/>
						이메일 저장하기
					</label>
				</CheckWrap>
			</div>
			<ButtonWrap>
				<LoginButton type='submit' onClick={() => onLogin()}>
					Log in
				</LoginButton>
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
