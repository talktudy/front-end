import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultImg from '../img/defaultImg.png';
import Select from 'react-select';

import DownloadIcon from '../assets/download.svg';

type OptionType = {
	value: string;
	label: string;
};

const JoinPage = () => {
	//페이지 이동을 위한 navigate 선언
	const navigate = useNavigate();

	// 회원가입에 필요한 요소 선언
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordCheck, setPasswordCheck] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [interests, setInterests] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [portfolioFileName, setPortfolioFileName] = useState<string>(''); //포트폴리오 파일 이름 담는 변수
	const [portfolioFile, setPortfolioFile] = useState<File>();
	const [portfolioUrl, setPortfolioUrl] = useState<string>('');
	const [profileImageName, setProfileImageName] = useState<string>(DefaultImg);
	const [profileImage, setProfileImage] = useState<File>();

	//file 업로드 커스텀
	const portfolioFileInput = useRef<HTMLInputElement>(null);
	const fileInputHandler = useCallback(event => {
		const files = event.target && event.target.files;
		if (files && files[0]) {
			setPortfolioFileName(event.target.files[0].name);
		}
	}, []);

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

	// 관심분야 select 설정
	let interestsList = [
		{ value: 'frontend', label: '프론트엔드' },
		{ value: 'backend', label: '백엔드' },
		{ value: 'design', label: '디자인' },
		{ value: 'productManager ', label: '기획' },
		{ value: 'android', label: '안드로이드' },
		{ value: 'ios', label: 'iOS' },
		{ value: 'fullStack', label: '풀스택' },
	];

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

	// 회원가입 시 동작 함수 생성
	const onSubmit = () => {};

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
			<JoinTitle>회원가입</JoinTitle>
			<form onSubmit={onSubmit}>
				<ImgDiv>
					<ProfileImg src={profileImageName} alt='defaultImg' />
					<Filelabel htmlFor='profileImg'>
						<ProfileImgBtn>프로필 이미지 등록</ProfileImgBtn>
					</Filelabel>
					<HiddenInput
						type='file'
						id='profileImg'
						name='profileImg'
						ref={profileImg}
						onChange={handleProfileChange(setProfileImageName, setProfileImage)}
					/>
				</ImgDiv>
				<div>
					<div>
						<InputTitle>이메일</InputTitle>
						<LoginInput
							type='email'
							name='email'
							value={email}
							onChange={handleChange(setEmail)}
							placeholder='이메일을 입력하세요'
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
					<div>
						<InputTitle>패스워드 확인</InputTitle>
						<LoginInput
							type='password'
							name='passwordCheck'
							value={passwordCheck}
							onChange={handleChange(setPasswordCheck)}
							placeholder='패스워드를 입력하세요'
						/>
					</div>
					<div>
						<InputTitle>닉네임</InputTitle>
						<LoginInput
							type='text'
							name='nickname'
							value={nickname}
							onChange={handleChange(setNickname)}
							placeholder='닉네임을 입력하세요'
						/>
					</div>
					<div>
						<InputTitle>관심분야</InputTitle>
						<StyledSelect
							className='selectItem'
							options={interestsList}
							onChange={handleSelectChange(setInterests)}
							value={interestsList.filter(function (option) {
								return option.value === interests;
							})}
						/>
					</div>
					<div>
						<InputTitle>소개</InputTitle>
						<InputText
							name='input_pw'
							value={description}
							onChange={handleTextAreaChange(setDescription)}
							placeholder='간단히 소개를 작성해주세요'
						/>
					</div>
					<div>
						<InputTitle>포트폴리오 업로드</InputTitle>
						<label htmlFor='portfolioFile'>
							<PortfolioFileInput>
								<p>{portfolioFileName}</p>
								<AttachmentButton src={DownloadIcon} />
							</PortfolioFileInput>
						</label>
						<HiddenInput
							type='file'
							id='portfolioFile'
							name='portfolioFile'
							ref={portfolioFileInput}
							onChange={handleFileChange(setPortfolioFileName, setPortfolioFile)}
						/>
					</div>
					<div>
						<InputTitle>포트폴리오 URL</InputTitle>
						<LoginInput
							type='text'
							name='portfolioUrl'
							value={portfolioUrl}
							onChange={handleChange(setPortfolioUrl)}
							placeholder='https://'
						/>
					</div>
				</div>
			</form>
			<ButtonWrap>
				<LoginButton onClick={() => navigate(-1)}>이전페이지</LoginButton>
				<LoginButton type='submit'>가입하기</LoginButton>
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
	height: 1300px;
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
	width: 200px;
	height: 200px;
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
const InputTitle = styled.div`
	margin-bottom: 1rem;
	text-align: left;
	font-size: 24px;
`;
const LoginInput = styled.input`
	margin-bottom: 10px;
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
