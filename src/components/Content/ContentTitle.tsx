import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ContentTitle = ({ children }: PropsWithChildren) => {
	return <StyledContentTitle>{children}</StyledContentTitle>;
};

export default ContentTitle;

export const StyledContentTitle = styled.h2`
	margin: 30px 0;
	padding: 0 20px;
	font-size: 30px;
`;
