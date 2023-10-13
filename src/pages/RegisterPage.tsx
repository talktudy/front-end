import { BsPencil } from 'react-icons/bs';
import styled from 'styled-components';

import ContentWrapper from '@components/ContentWrapper';
import { StyledStack } from '@/components/Stack';
import Icon from '@/components/Icon';
import BoardListForm from '@/components/BoardListForm';

const RegisterPage = () => {
	return (
		<ContentWrapper>
			<RegisterHeader $align='center' $py={10} $px={10} $mb={20}>
				<Icon
					$variants='filled'
					$size={24}
					$radius={4}
					$containerColor='#f8c332'
					$iconColor='#fff'
					$mr={10}
				>
					<BsPencil />
				</Icon>
				<Title>팀원 모집 폼</Title>
				<TitleCaption>팀원을 모집하기 위해 필요한 정보이니 꼼꼼하게 입력해주세요.</TitleCaption>
			</RegisterHeader>
			<BoardListForm />
		</ContentWrapper>
	);
};

export default RegisterPage;

const RegisterHeader = styled(StyledStack)`
	max-width: 600px;
	margin: 0 auto;
	border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
	margin-right: 8px;
	font-size: 20px;
`;

const TitleCaption = styled.span`
	color: #c1c1c1;
	font-size: 13px;
	align-self: end;
`;
