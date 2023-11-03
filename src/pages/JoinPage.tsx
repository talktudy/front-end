import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultImg from '../img/defaultImg.png';
import Select from 'react-select';

import DownloadIcon from '../assets/download.svg';
import axios from 'axios';

// Select 사용시 type 설정
type OptionType = {
	value: string;
	label: string;
};

const JoinPage = () => {
	/* 페이지 이동을 위한 navigate 선언 */
	const navigate = useNavigate();

	/* 회원가입에 필요한 요소 선언 */
	const [profileImgName, setProfileImageName] = useState<string>(DefaultImg); // 프로필 이미지 이름 (이미지 표출, alt값 설정을 위함)
	const [profileImgPath, setProfileImgPath] = useState<File>(); // 서버에 전달할 file path
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordCheck, setPasswordCheck] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [interests, setInterests] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [portfolioFileName, setPortfolioFileName] = useState<string>(''); //포트폴리오 파일 이름 담는 변수
	const [portfolioFile, setPortfolioFile] = useState<File>(); // 포트폴리오 파일 PATH
	// const [portfolioUrl, setPortfolioUrl] = useState<string>('');

	// 관심분야 select 설정
	const interestsList = [
		{ value: 'FRONTEND', label: '프론트엔드' },
		{ value: 'BACKEND', label: '백엔드' },
		{ value: 'DESIGNER', label: '디자인' },
		{ value: 'PM ', label: '기획' },
		{ value: 'ANDROID', label: '안드로이드' },
		{ value: 'IOS', label: 'iOS' },
		{ value: 'FULLSTACK', label: '풀스택' },
	];

	//프로필 이미지 등록에 따른 이미지 경로 변경을 위해
	const profileImg = useRef<HTMLInputElement>(null);
	const handleProfileChange =
		(
			setFileNameFunction: React.Dispatch<React.SetStateAction<string>>,
			setFileFunction: React.Dispatch<React.SetStateAction<File | undefined>>
		) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files && event.target.files[0];
			if (!file) return;

			const reader = new FileReader();
			reader.onloadend = () => {
				setProfileImageName(reader.result as string);
			};
			reader.readAsDataURL(file);

			setFileNameFunction(file.name);
			setFileFunction(file);
		};

	//file 업로드 커스텀
	const portfolioFileInput = useRef<HTMLInputElement>(null);
	const fileInputHandler = useCallback((event: any) => {
		const files = event.target && event.target.files;
		if (files && files[0]) {
			setPortfolioFileName(event.target.files[0].name);
		}
	}, []);

	//handler 적용
	const handleChange =
		(setFunction: React.Dispatch<React.SetStateAction<string>>) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setFunction(event.target.value);
		};

	const handleTextAreaChange =
		(setFunction: React.Dispatch<React.SetStateAction<string>>) =>
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			setFunction(event.target.value);
		};

	const handleSelectChange =
		(setFunction: React.Dispatch<React.SetStateAction<string>>) =>
		(selectedOption: OptionType | null) => {
			if (selectedOption) {
				setFunction(selectedOption.value);
			}
		};
	const handleFileChange =
		(
			setFileNameFunction: React.Dispatch<React.SetStateAction<string>>,
			setFileFunction: React.Dispatch<React.SetStateAction<File | undefined>>
		) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files && event.target.files[0];
			if (!file) return;

			setFileNameFunction(file.name);
			setFileFunction(file);
		};
	//이메일 유효성 검사
	const isEmail = (email: string): boolean => {
		const emailRegex =
			/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

		return emailRegex.test(email);
	};
	//비밀번호 유효성 검사
	const chkPW = (password: string) => {
		var pw = password;

		if (pw.length < 8 || pw.length > 20) {
			alert('8자리 ~ 20자리 이내로 입력해주세요.');
			return false;
		} else if (pw.search(/\s/) != -1) {
			alert('비밀번호는 공백 없이 입력해주세요.');
			return false;
		}
		return true;
	};
	//유효성 검사 함수
	const userInsertCheck = () => {
		//null or "" check
		if (email === '' || email === null) {
			alert('이메일을 입력해주세요.');
			return false;
		}
		if (!chkPW(password)) {
			return false;
		}
		if (passwordCheck === '' || passwordCheck === null) {
			alert('패스워드 확인을 입력해주세요.');
			return false;
		}
		if (nickname === '' || nickname === null) {
			alert('닉네임을 입력해주세요.');
			return false;
		}
		if (interests === '' || interests === null) {
			alert('관심분야를 선택해주세요.');
			return false;
		}
		if (password != passwordCheck) {
			alert('패스워드가 일치하지 않습니다.');
			return false;
		}
		//패스워드 길이 8~13
		if (password.length < 8 && password.length > 13) {
			alert('패스워드의 길이를 확인해주세요.(패스워드 길이 8 ~ 13)');
			return false;
		}
		//이메일 양식 - 이메일형식이 아닙니다.
		if (!isEmail(email)) {
			alert('이메일 양식을 정확히 입력해주세요.');
			return false;
		}

		return true;
	};
	// 회원가입 시 동작 함수 생성
	const onSubmit = () => {
		if (!userInsertCheck()) {
			return;
		}

		axios({
			url: 'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/api/auth/register', // 통신할 웹문서
			method: 'post', // 통신 방식
			headers: {
				'Content-Type': 'multipart/form-data; charset=UTF-8',
			},
			data: {
				// 보낼 데이터
				email: email,
				password: password,
				// passwordCheck: passwordCheck,
				nickname: nickname,
				interests: interests,
				description: description,
				// portfolio: portfolioFileName,
				portfolio: portfolioFile,
				// portfolioUrl: portfolioUrl,
				// profileImgName: profileImgName,
				profileImage: profileImgPath,
			},
		})
			.then(function (response: any) {
				console.log('onSubmit response : ', response);
				navigate('/login');
			})
			.catch(function (error: any) {
				console.log('onSubmit error : ', error);
			});
		// console.log('email : ', email);
		// console.log('password : ', password);
		// console.log('passwordCheck : ', passwordCheck);
		// console.log('nickname : ', nickname);
		// console.log('interests : ', interests);
		// console.log('description : ', description);
		// console.log('portfolioFileName : ', portfolioFileName);
		// console.log('portfolioFile : ', portfolioFile);
		// console.log('portfolioUrl : ', portfolioUrl);
		// console.log('profileImgName : ', profileImgName);
		// console.log('profileImage : ', profileImage);
	};
	// Emali 중복 체크 확인
	const emailCheck = () => {
		console.log('test');
		axios({
			url: 'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/api/auth/check-email', // 통신할 웹문서
			method: 'GET', // 통신 방식
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			data: {
				email: email,
			},
		})
			.then(function (response: any) {
				console.log('emailCheck response : ', response);
			})
			.catch(function (error: any) {
				console.log('emailCheck error : ', error);
			});
	};

	useEffect(() => {
		if (portfolioFileInput.current !== null) {
			portfolioFileInput.current.addEventListener('input', fileInputHandler);
		}
		return () => {
			portfolioFileInput.current &&
				portfolioFileInput.current.removeEventListener('input', fileInputHandler);
		};
	}, [portfolioFileInput, fileInputHandler]);

	return (
		<JoinWrap>
			{/* 상단 타이틀 */}
			<JoinTitle>회원가입</JoinTitle>
			{/* 회원가입 input 영역 */}
			{/* 회원 프로필 등록 영역 */}
			<ImgDiv>
				<ProfileImg src={profileImgName} alt={profileImgName} />
				<Filelabel htmlFor='profileImg'>
					<ProfileImgBtn>프로필 이미지 등록</ProfileImgBtn>
				</Filelabel>
				<HiddenInput
					type='file'
					id='profileImg'
					name='profileImg'
					ref={profileImg}
					onChange={handleProfileChange(setProfileImageName, setProfileImgPath)}
				/>
			</ImgDiv>
			<label>
				<InputTitle>이메일</InputTitle>
				<EmailWrap>
					<JoinInput
						type='email'
						name='email'
						value={email}
						onChange={handleChange(setEmail)}
						placeholder='이메일을 입력하세요'
					/>
					<EmailCkBtn type='button' value='중복확인' onClick={() => emailCheck()} />
				</EmailWrap>
			</label>
			<label>
				<InputTitle>패스워드</InputTitle>
				<JoinInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange(setPassword)}
					placeholder='패스워드를 입력하세요'
				/>
			</label>
			<label>
				<InputTitle>패스워드 확인</InputTitle>
				<JoinInput
					type='password'
					name='passwordCheck'
					value={passwordCheck}
					onChange={handleChange(setPasswordCheck)}
					placeholder='패스워드를 입력하세요'
				/>
			</label>
			<label>
				<InputTitle>닉네임</InputTitle>
				<JoinInput
					type='text'
					name='nickname'
					value={nickname}
					onChange={handleChange(setNickname)}
					placeholder='닉네임을 입력하세요'
				/>
			</label>
			<label>
				<InputTitle>관심분야</InputTitle>
				<StyledSelect
					className='selectItem'
					options={interestsList}
					onChange={handleSelectChange(setInterests)}
					value={interestsList.filter(function (option) {
						return option.value === interests;
					})}
				/>
			</label>
			<label>
				<InputTitle>소개</InputTitle>
				<InputText
					name='input_pw'
					value={description}
					onChange={handleTextAreaChange(setDescription)}
					placeholder='간단히 소개를 작성해주세요'
				/>
			</label>
			<label htmlFor='portfolioFile'>
				<InputTitle>포트폴리오 업로드</InputTitle>
				<PortfolioFileInput>
					<p>{portfolioFileName}</p>
					<AttachmentButton src={DownloadIcon} />
				</PortfolioFileInput>
				<HiddenInput
					type='file'
					id='portfolioFile'
					name='portfolioFile'
					ref={portfolioFileInput}
					onChange={handleFileChange(setPortfolioFileName, setPortfolioFile)}
				/>
			</label>
			{/* <label>
					<InputTitle>포트폴리오 URL</InputTitle>
					<JoinInput
						type='text'
						name='portfolioUrl'
						value={portfolioUrl}
						onChange={handleChange(setPortfolioUrl)}
						placeholder='https://'
					/>
				</label> */}
			<ButtonWrap>
				<LoginButton onClick={() => navigate(-1)}>이전페이지</LoginButton>
				<LoginButton onClick={() => onSubmit()}>가입하기</LoginButton>
			</ButtonWrap>
		</JoinWrap>
	);
};

export default JoinPage;

const JoinWrap = styled.div`
	// width: 500px;
	// height: 1300px;
	// margin: 0 auto;
	// margin-top: 3rem;
	// margin-bottom: 3rem;
	// text-align: -webkit-center;
	// background-color: #f0f0f0;
	// padding: 3rem 5rem;
	width: 500px;
	height: 1100px;
	margin: 0 auto;
	margin-top: 3rem;
	margin-bottom: 3rem;
	// text-align: -webkit-center;
	background-color: #f0f0f0;
	padding: 1rem 3rem;
`;
const JoinTitle = styled.div`
	text-align: center;
	font-size: 34px;
`;

const ImgDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;
const ProfileImg = styled.img`
	width: 150px;
	height: 150px;
	border: 1px solid;
	border-radius: 130px;
	background-color: white;
`;
const Filelabel = styled.label`
	border: none;
`;
const ProfileImgBtn = styled.div`
	background-color: white;
	border: none;
	width: 200px;
	font-size: 18px;
	margin: 1rem;
	border-radius: 5px;
`;
const EmailWrap = styled.div`
	display: flex;
`;
const EmailCkBtn = styled.input`
	background-color: #fbd85d;
	border: none;
	border-radius: 10px;
`;
const InputTitle = styled.div`
	// margin-bottom: 1rem;
	margin-top: 1rem;
	text-align: left;
	font-size: 24px;
`;
const JoinInput = styled.input`
	// margin-bottom: 10px;
	width: 100%;
	font-size: 24px;
	border-radius: 10px;
	padding: 5px 10px 5px 10px;
	border: none;
`;

const StyledSelect = styled(Select)`
	width: 100%;
	font-size: 20px;
	text-align: center;
	border-radius: 10px;
`;

const InputText = styled.textarea`
	width: 100%;
	height: 7rem;
	font-size: 18px;
	border: none;
	padding: 10px;
	resize: none;
`;
const PortfolioFileInput = styled.div`
	width: auto;
	display: flex;
	gap: 16px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 16px;
	justify-content: space-between;
	margin-bottom: 1rem;
	background-color: white;
`;

const AttachmentButton = styled.img`
	width: 2rem;
	border-radius: 2px;
	// padding: 16px;
	// color: white;
	// font-weight: bold;
	// cursor: pointer;
	// text-overflow: ellipsis;
`;

const HiddenInput = styled.input`
	display: none;
`;

const ButtonWrap = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-evenly;
`;
const LoginButton = styled.button`
	width: 40%;
	height: 3rem;
	font-size: 1.5rem;
	border: 1px solid black;
	border-radius: 10px;
	background-color: white;
	color: black;
	border: white;
`;
