import { BsPencil } from 'react-icons/bs';
import styled from 'styled-components';

import BoardListForm, { FormHeader, FormTitle } from '@/components/BoardListForm';
import ContentWrapper from '@components/ContentWrapper';
import Icon from '@/components/Icon';

const RegisterPage = () => {
	return (
		<ContentWrapper>
			<FormHeader $align='center' $py={10} $px={10} $mb={20}>
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
				<FormTitle>팀원 모집 폼</FormTitle>
				<TitleCaption>팀원을 모집하기 위해 필요한 정보이니 꼼꼼하게 입력해주세요.</TitleCaption>
			</FormHeader>
			<BoardListForm />
		</ContentWrapper>
	);
};

export default RegisterPage;

const TitleCaption = styled.span`
	color: #c1c1c1;
	font-size: 13px;
	align-self: end;
`;
