import { StyledStack } from '@/components/Stack';

import styled from 'styled-components';

interface Caption {
	title: string;
	children: React.ReactNode;
}

const Caption = ({ title, children }: Caption) => {
	return (
		<CaptionWrapper as='dl'>
			<dt className='srOnly'>{title}</dt>
			<CaptionValue>{children}</CaptionValue>
		</CaptionWrapper>
	);
};

export default Caption;

const CaptionWrapper = styled(StyledStack)`
	margin-left: 8px;
`;

const CaptionValue = styled.dd`
	display: flex;
	color: #1c2025;
	font-size: 12px;
`;
