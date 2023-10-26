import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ContentWrapper = ({ children }: PropsWithChildren) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;

export const Wrapper = styled.div`
	width: 1280px;
	margin: 0 auto;
	padding: 20px 0;
`;
