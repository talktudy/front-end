import styled from 'styled-components';
import Spinner from '@assets/Spinner.gif';

const Loading = () => {
	return (
		<SLoading>
			<SLoadingText>로딩 중...</SLoadingText>
			<img src={Spinner} alt='로딩중' width='5%' />
		</SLoading>
	);
};

export default Loading;

const SLoading = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background: white;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	overflow-x: hidden;
`;

const SLoadingText = styled.div`
	font: 1rem 'Noto Sans KR';
	text-align: center;
`;
