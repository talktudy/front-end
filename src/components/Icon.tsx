import styled, { css } from 'styled-components';

interface IconStyledProps {
	$variants?: 'lined' | 'filled';
	$radius?: number;
	$containerColor?: string;
	$iconColor: string;
	$size?: number;
	$fontSize?: number;
	$mr?: number;
	$mb?: number;
}

// NOTE: React-icons를 자식 컴포넌트로 받아옴
interface Icon extends IconStyledProps {
	className?: string;
	children: React.ReactNode;
}

const Icon = ({ className, children, ...props }: Icon) => {
	return (
		<StyledIcon {...props} className={className}>
			{children}
		</StyledIcon>
	);
};

export default Icon;

const StyledIcon = styled.div<IconStyledProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.$iconColor};
	font-size: ${props => (props.$fontSize ? `${props.$fontSize}px` : '12px')};
	${props =>
		props.$variants === 'lined' &&
		css`
			border: 1px solid ${props.$containerColor};
		`};
	${props =>
		props.$variants === 'filled' &&
		css`
			background-color: ${props.$containerColor};
		`};
	${props =>
		props.$radius &&
		css`
			border-radius: ${props.$radius}px;
		`};
	${props =>
		props.$size &&
		css`
			width: ${props.$size}px;
			height: ${props.$size}px;
		`};
	${props =>
		props.$mr &&
		css`
			margin-right: ${props.$mr}px;
		`};
	${props =>
		props.$mb &&
		css`
			margin-bottom: ${props.$mb}px;
		`};
`;
