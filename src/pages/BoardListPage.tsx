import ContentWrapper from '@/components/Content/ContentWrapper';
import Stack, { StyledStack } from '@/components/Stack';
import ContentTitle from '@/components/Content/ContentTitle';
import Pagination from '@/components/Pagination';
import FilterWrapper from '@/components/Filter/FilterWrapper';
import Title from '@/components/Filter/Title';
import FilterButton from '@/components/Filter/FilterButton';
import FilterInput from '@/components/Filter/FilterInput';

import BoardLists from '@/layouts/BoardLists';

const boardLists = [
	{
		studyId: 1,
		title: '[스터디를 구합니다] 프론트 스터디 모집합니다. 이것은 두 줄 타이틀입니다.',
		interests: 'FRONTEND',
		startDate: '2023-10-17T00:00:00',
		endDate: '2023-10-31T00:00:00',
		maxCapacity: 4,
		currentCapacity: 0,
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'Typescript,React',
		views: 0,
		nickname: '테스트인닉네임',
		open: true,
	},
	{
		studyId: 2,
		title: '백엔드 스터디 모집합니다.',
		interests: 'BACKEND',
		startDate: '2023-10-17T00:00:00',
		endDate: '2023-11-01T00:00:00',
		maxCapacity: 6,
		currentCapacity: 2,
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'java, Spring',
		views: 0,
		nickname: '닉넴',
		open: false,
	},
	{
		studyId: 3,
		title: '백엔드 스터디 모집합니다.',
		interests: 'BACKEND',
		startDate: '2023-10-17T00:00:00',
		endDate: '2023-11-01T00:00:00',
		maxCapacity: 6,
		currentCapacity: 2,
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'java, Spring',
		views: 0,
		nickname: '닉넴',
		open: false,
	},
	{
		studyId: 4,
		title: '백엔드 스터디 모집합니다.',
		interests: 'BACKEND',
		startDate: '2023-10-17T00:00:00',
		endDate: '2023-11-01T00:00:00',
		maxCapacity: 6,
		currentCapacity: 2,
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'java, Spring',
		views: 0,
		nickname: '닉넴',
		open: false,
	},
	{
		studyId: 5,
		title: '백엔드 스터디 모집합니다.',
		interests: 'BACKEND',
		startDate: '2023-10-17T00:00:00',
		endDate: '2023-11-01T00:00:00',
		maxCapacity: 6,
		currentCapacity: 2,
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'java, Spring',
		views: 0,
		nickname: '닉넴',
		open: false,
	},
	{
		studyId: 6,
		title: '백엔드 스터디 모집합니다.',
		interests: 'BACKEND',
		startDate: '2023-10-17T00:00:00',
		endDate: '2023-11-01T00:00:00',
		maxCapacity: 6,
		currentCapacity: 2,
		description: '<p>예시내용</p><strong>강조표시</strong>',
		tag: 'java, Spring',
		views: 0,
		nickname: '닉넴',
		open: false,
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

const MainPage = () => {
	return (
		<ContentWrapper>
			<ContentTitle>
				스터디에서 함께 할 <br />
				멋진 동료를 찾고 있어요! 😎
			</ContentTitle>

			<FilterWrapper>
				<Title title='정렬로 한눈에 보기' />
				<StyledStack $align='center' $mb={14}>
					<FilterButton id='views' name='orderBy' label='🔥 인기순' />
					<FilterButton id='open' name='open' label='👀 모집중' />
				</StyledStack>
				<Title title='분야별 스터디 보기' />
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
				<BoardLists data={boardLists} />
				<Pagination />
			</Stack>
		</ContentWrapper>
	);
};

export default MainPage;
