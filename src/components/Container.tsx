import styled, { css } from 'styled-components';

interface ContainerStyledProps {
	$display?: 'block' | 'inline-block';
	$mr?: number;
	$mb?: number;
	$py?: number;
	$px?: number;
}

interface Container extends ContainerStyledProps {
	children: React.ReactNode;
}

const Container = ({ children, ...props }: Container) => {
	return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;

export const StyledContainer = styled.div<ContainerStyledProps>`
	display: ${props => props.$display ?? 'block'};
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
