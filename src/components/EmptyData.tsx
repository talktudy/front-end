import EmptyImage from '@/assets/bg_empty.png';

import styled from 'styled-components';

interface EmptyData {
	message: string;
}

const EmptyData = ({ message }: EmptyData) => {
	return (
		<EmptyDataWrapper>
			<img src={EmptyImage} />
			<Text>{message}</Text>
		</EmptyDataWrapper>
	);
};

export default EmptyData;

const EmptyDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 600px;

	img {
		display: block;
		width: 300px;
		margin-bottom: 20px;
	}
`;

const Text = styled.p`
	text-align: center;
`;
