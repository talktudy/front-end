import styled from 'styled-components';

interface LoadingSpinner {
	position?: string;
	message: string;
	dimmed?: boolean;
	color?: string;
}

const LoadingSpinner = ({ position, message, dimmed = true, color = '#fff' }: LoadingSpinner) => {
	return (
		<LoadingDimmed $position={position} $hasDimmed={dimmed}>
			<Loadingbar $color={color} />
			<LoadingText $color={color}>{message}</LoadingText>
		</LoadingDimmed>
	);
};

export default LoadingSpinner;

const LoadingDimmed = styled.div<{ $position?: string; $hasDimmed: boolean }>`
	position: ${props => (props.$position ? props.$position : 'fixed')};
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${props => (props.$hasDimmed ? '#000' : 'transparent')};
	z-index: 8888;
	opacity: 0.8;
`;

const Loadingbar = styled.span<{ $color: string }>`
	display: inline-block;
	width: 48px;
	height: 48px;
	margin-bottom: 20px;
	border: 5px solid ${props => (props.$color ? props.$color : '#fff')};
	border-bottom-color: transparent;
	border-radius: 50%;
	animation: rotation 1s linear infinite;
	box-sizing: border-box;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const LoadingText = styled.p<{ $color: string }>`
	color: ${props => (props.$color ? props.$color : '#fff')};
	z-index: 9999;
`;
