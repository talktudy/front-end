import styled, { css } from 'styled-components';

interface StackStyledProps {
	$direction?: 'row' | 'column';
	$wrap?: 'wrap' | 'nowrap';
	$justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	$align?: 'flex-start' | 'center' | 'flex-end';
	$mb?: number;
	$mr?: number;
	$py?: number;
	$px?: number;
}

interface Stack extends StackStyledProps {
	children: React.ReactNode;
}

const Stack = ({ children, ...props }: Stack) => {
	return <StyledStack {...props}>{children}</StyledStack>;
};

export default Stack;

export const StyledStack = styled.div<StackStyledProps>`
	display: flex;
	${props =>
		props.$wrap &&
		css`
			flex-wrap: ${props.$wrap};
		`}
	${props =>
		props.$direction &&
		css`
			flex-direction: ${props.$direction};
		`}
	justify-content: ${props => props.$justify || 'flex-start'};
	align-items: ${props => props.$align || 'flex-start'};
	${props =>
		props.$py &&
		css`
			padding-top: ${props.$py}px;
			padding-bottom: ${props.$py}px;
		`}
	${props =>
		props.$px &&
		css`
			padding-left: ${props.$px}px;
			padding-right: ${props.$px}px;
		`}
	${props =>
		props.$mb &&
		css`
			margin-bottom: ${props.$mb}px;
		`}
    ${props =>
		props.$mr &&
		css`
			margin-right: ${props.$mr}px;
		`}
`;
