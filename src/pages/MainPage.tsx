import { AiOutlineSearch } from 'react-icons/ai';

import ContentWrapper from '@/components/ContentWrapper';
import Icon from '@/components/Icon';
import { StyledStack } from '@/components/Stack';

import styled from 'styled-components';
import Container from '@/components/Container';
import ContentTitle from '@/components/ContentTitle';
import BoardLists from '@/components/BoardLists';
import Pagination from '@/components/Pagination';

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

			<FilterSection>
				<h3>필터 및 정렬</h3>
				<strong>다중 선택 가능합니다 ✨</strong>
				<FilterTitle>정렬로 한눈에 보기</FilterTitle>
				<StyledStack $align='center' $mb={14}>
					<Container $display='inline-block'>
						<FilterButton htmlFor='views'>🔥 인기순</FilterButton>
						<input type='checkbox' id='views' name='orderBy' className='srOnly' />
					</Container>
					<Container $display='inline-block'>
						<FilterButton htmlFor='open'>👀 모집중</FilterButton>
						<input type='checkbox' id='open' name='open' className='srOnly' />
					</Container>
				</StyledStack>
				<FilterTitle>분야별 스터디 보기</FilterTitle>
				<StyledStack $align='center' $mb={40}>
					{interests.map(interest => (
						<Container $display='inline-block' key={interest.id}>
							<FilterButton htmlFor={interest.id}>{interest.value}</FilterButton>
							<input type='checkbox' id={interest.id} name='interest' className='srOnly' />
						</Container>
					))}
				</StyledStack>
				<Search $align='center'>
					<span>
						<label htmlFor='type' className='srOnly'>
							검색 타입
						</label>
						<select name='type' id='type'>
							<option value='title'>제목</option>
							<option value='tag'>태그</option>
						</select>
					</span>
					<span>
						<label htmlFor='type' className='srOnly'>
							검색어
						</label>
						<input type='text' name='keyword' id='keyword' />
					</span>
					<Icon $iconColor='#e5eaf2' $fontSize={24} $mr={10}>
						<AiOutlineSearch />
					</Icon>
				</Search>
			</FilterSection>

			<BoardSection>
				<h2 className='srOnly'>일반 모집순으로 보기</h2>
				<BoardLists data={boardLists} />
				<Pagination />
			</BoardSection>
		</ContentWrapper>
	);
};

export default MainPage;

const FilterSection = styled.section`
	position: relative;
	padding: 0 20px;

	h3 {
		margin-bottom: 4px;
	}

	strong {
		display: block;
		margin-bottom: 20px;
		color: #b2b2b2;
		font-size: 14px;
		font-weight: 400;
	}
`;

const FilterTitle = styled.h4`
	font-size: 14px;
	margin-bottom: 10px;
`;

const FilterButton = styled.label<{ $isSelected?: boolean }>`
	display: inline-flex;
	align-items: center;
	padding: 8px 16px;
	margin-right: 10px;
	border-radius: 5px;
	border: 1px solid ${props => (props.$isSelected ? '#fbd85d' : '#f2f4f7')};
	background-color: ${props => (props.$isSelected ? '#fbd85d' : '#f2f4f7')};
	cursor: pointer;
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:hover {
		background-color: #fbd85d;
	}
`;

const Search = styled(StyledStack)`
	position: absolute;
	bottom: 0;
	right: 30px;
	height: 40px;
	border: 1px solid #e5eaf2;
	border-radius: 10px;
	font-size: 16px;

	span {
		display: block;
		height: 100%;
	}

	select,
	input {
		display: block;
		height: 100%;
		padding: 0 10px;
		border: none;
	}

	select {
		padding: 0 20px;
		border-radius: 10px 0 0 10px;
	}

	input {
		width: 200px;
		outline: none;
	}
`;

const BoardSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 30px;
`;
