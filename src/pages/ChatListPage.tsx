import ContentWrapper from '@/components/Content/ContentWrapper';
import Stack, { StyledStack } from '@/components/Stack';
import ContentTitle from '@/components/Content/ContentTitle';
import Pagination from '@/components/Pagination';
import FilterWrapper from '@/components/Filter/FilterWrapper';
import Title from '@/components/Filter/Title';
import FilterButton from '@/components/Filter/FilterButton';
import FilterInput from '@/components/Filter/FilterInput';

import ChatLists from '@/layouts/ChatLists';

const chatLists = [
	{
		teamId: 1,
		title: '취업 정보 공유합니다',
		interests: 'FRONTEND',
		createdDate: '2023-10-20T15:03:22.788Z', //startDate
		updatedDate: '2023-10-20T15:03:22.788Z', //
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'Typescript,java',
		views: 13,
		nickname: '닉네임123',
	},
	{
		teamId: 2,
		title: '취업 정보 공유합니다',
		interests: 'FRONTEND',
		createdDate: '2023-10-20T15:03:22.788Z', //startDate
		updatedDate: '2023-10-20T15:03:22.788Z', //
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'Typescript,java',
		views: 13,
		nickname: '닉네임123',
	},
	{
		teamId: 3,
		title:
			'취업 정보 공유합니다.취업 정보 공유합니다.취업 정보 공유합니다.취업 정보 공유합니다.취업 정보 공유합니다.취업 정보 공유합니다',
		interests: 'FRONTEND',
		createdDate: '2023-10-20T15:03:22.788Z', //startDate
		updatedDate: '2023-10-20T15:03:22.788Z', //
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'Typescript,java',
		views: 13,
		nickname: '닉네임123',
	},
	{
		teamId: 4,
		title: '취업 정보 공유합니다',
		interests: 'FRONTEND',
		createdDate: '2023-10-20T15:03:22.788Z', //startDate
		updatedDate: '2023-10-20T15:03:22.788Z', //
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'Typescript,java',
		views: 13,
		nickname: '닉네임123',
	},
	{
		teamId: 5,
		title: '취업 정보 공유합니다',
		interests: 'FRONTEND',
		createdDate: '2023-10-20T15:03:22.788Z', //startDate
		updatedDate: '2023-10-20T15:03:22.788Z', //
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'Typescript,java',
		views: 13,
		nickname: '닉네임123',
	},
];

const interests = [
	{ id: 'NONE', value: '전체' },
	{ id: 'FRONTEND', value: '프론트엔드' },
	{ id: 'BACKEND', value: '백엔드' },
	{ id: 'DESIGNER', value: '디자이너' },
	{ id: 'PM', value: 'PM' },
	{ id: 'ANDROID', value: '안드로이드' },
	{ id: 'IOS', value: 'IOS' },
	{ id: 'FULLSTACK', value: '풀 스택' },
];

const ChatPage = () => {
	return (
		<ContentWrapper>
			<ContentTitle>
				채팅에서 관심사를 공유하고
				<br />
				함께 성장해요! 🚀
			</ContentTitle>
			<FilterWrapper>
				<Title title='정렬로 한눈에 보기' />
				<StyledStack $align='center' $mb={14}>
					<FilterButton id='views' name='orderBy' label='🔥 인기순' />
				</StyledStack>
				<Title title='분야별 채팅 보기' />
				<StyledStack $align='center' $mb={40}>
					{interests.map(interest => (
						<FilterButton
							key={interest.id}
							id={interest.id}
							name='interests'
							label={interest.value}
						/>
					))}
				</StyledStack>
				<FilterInput />
			</FilterWrapper>

			<Stack $direction='column' $justify='space-between' $align='center' $py={30}>
				<ChatLists data={chatLists} />
				<Pagination />
			</Stack>
		</ContentWrapper>
	);
};

export default ChatPage;
