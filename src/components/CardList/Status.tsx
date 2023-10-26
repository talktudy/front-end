import styled from 'styled-components';

interface Status {
	isOpen: boolean;
}

const Status = ({ isOpen }: Status) => {
	return <StyledStatus $isOpen={isOpen}>{isOpen ? '모집중' : '모집완료'}</StyledStatus>;
};

export default Status;

const StyledStatus = styled.span<{ $isOpen: boolean }>`
	display: inline-block;
	padding: 4px 20px;
	border-radius: 20px;
	margin-bottom: 10px;
	border: 1px solid #000;

	background-color: ${props => (props.$isOpen ? '#f0f7ff' : '#f1f1f1')};
	color: ${props => (props.$isOpen ? '#0072e5' : '#303740')};
	border-color: ${props => (props.$isOpen ? '#99ccf3' : '#dae2ed')};
`;
