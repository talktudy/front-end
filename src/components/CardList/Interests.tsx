import styled from 'styled-components';

interface Interests {
	interests: string;
}

const interestsMap: { [key: string]: string } = {
	NONE: '전체',
	FRONTEND: '프론트엔드',
	BACKEND: '백엔드',
	DESIGNER: '디자이너',
	PM: 'PM',
	ANDROID: '안드로이드',
	IOS: 'IOS',
	FULLSTACK: '풀스택',
};

const Interests = ({ interests }: Interests) => {
	return <StyledInterests>{interestsMap[interests]}</StyledInterests>;
};

export default Interests;

const StyledInterests = styled.div`
	display: inline-block;
	padding: 0 10px;
	margin-bottom: 4px;
	border: 1px solid #dae2ed;
	border-radius: 4px;
	background-color: rgba(243, 246, 249, 0.5);
	color: #1c2025;
	text-align: center;
	font-size: 14px;
`;
