import { BsPencil } from 'react-icons/bs';

import BoardListForm, { FormHeader, FormTitle } from '@/components/BoardListForm';
import ContentWrapper from '@components/ContentWrapper';
import Icon from '@/components/Icon';

const EditPage = () => {
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
				<FormTitle>[작성한 글 타이틀] 폼 수정</FormTitle>
			</FormHeader>
			<BoardListForm />
		</ContentWrapper>
	);
};

export default EditPage;
