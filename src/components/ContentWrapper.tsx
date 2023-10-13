import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ContentWrapper = ({ children }: PropsWithChildren) => {
	return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;

const Wrapper = styled.div`
	width: 1280px;
	margin: 0 auto;
`;
