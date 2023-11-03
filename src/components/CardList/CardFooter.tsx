import { PropsWithChildren } from 'react';

import { StyledStack } from '@/components/Stack';

import styled from 'styled-components';

const CardFooter = ({ children }: PropsWithChildren) => {
	return <StyledCardFooter $justify='space-between'>{children}</StyledCardFooter>;
};

export default CardFooter;

const StyledCardFooter = styled(StyledStack)`
	padding: 20px 4px 0;
	border-top: 1px solid #e5eaf2;
`;
