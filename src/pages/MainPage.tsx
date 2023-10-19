import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { AiOutlineEye } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import ContentWrapper from '@/components/ContentWrapper';
import Icon from '@/components/Icon';
import { StyledStack } from '@/components/Stack';

import styled from 'styled-components';

const examples = [
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

const interests: { [key: string]: string } = {
	NONE: '전체',
	FRONTEND: '프론트엔드',
	BACKEND: '백엔드',
	DESIGNER: '디자이너',
	PM: 'PM',
	ANDROID: '안드로이드',
	IOS: 'IOS',
	FULLSTACK: '풀스택',
};

const MainPage = () => {
	return (
		<ContentWrapper>
			<Tab>
				<StyledStack as='ul' $mb={10} $px={20}>
					<TabList>
						<TabButton type='button'>🔥 인기순으로 보기</TabButton>
					</TabList>
					<TabList>
						<TabButton type='button'>👀 모집중만 보기</TabButton>
					</TabList>
				</StyledStack>
			</Tab>
			<BoardSection>
				<h2 className='srOnly'>일반 모집순으로 보기</h2>
				<StyledStack as='ul' $wrap='wrap' $px={20}>
					{examples.map(list => (
						<BoardListWrapper key={list.studyId}>
							<BoardList as={Link} to={`/detail/${list.studyId}`}>
								<BoardHeader>
									<Status $isOpen={list.open}>{list.open ? '모집중' : '모집완료'}</Status>
									<EndDate>마감일 | {format(new Date(list.endDate), 'yyyy년 MM월 dd일')}</EndDate>
								</BoardHeader>
								<Title>
									[{list.interests}]{list.title}
								</Title>
								<BoardContent $direction='column' $justify='space-between'>
									<TeamStatus>
										현재 등록된 인원 : {list.currentCapacity} / {list.maxCapacity}
									</TeamStatus>
									<div>
										<InterestedIn>{interests[list.interests]}</InterestedIn>
										<TagLists>
											{list.tag.split(',').map(listTag => (
												<span key={listTag}>#{listTag}</span>
											))}
										</TagLists>
									</div>
								</BoardContent>
								<BoardFooter $justify='space-between'>
									<dl>
										<dt className='srOnly'>작성자</dt>
										<dd>{list.nickname}</dd>
									</dl>
									<dl>
										<dt className='srOnly'>조회수</dt>
										<dd>
											<Icon $iconColor='#1c2025' $mr={8} $fontSize={16}>
												<AiOutlineEye />
											</Icon>
											{list.views}
										</dd>
									</dl>
								</BoardFooter>
							</BoardList>
						</BoardListWrapper>
					))}
				</StyledStack>
				<Pagination as='ul' $justify='center'>
					<PageList>
						<PageButton type='button'>
							<Icon $iconColor='#1c2025'>
								<FiChevronLeft />
							</Icon>
						</PageButton>
					</PageList>
					<PageList>
						<PageButton type='button' $isCurrent>
							1
						</PageButton>
					</PageList>
					<PageList>
						<PageButton type='button'>2</PageButton>
					</PageList>
					<PageList>
						<PageButton type='button'>3</PageButton>
					</PageList>
					<PageList>
						<PageButton type='button'>4</PageButton>
					</PageList>
					<PageList>
						<PageButton type='button'>5</PageButton>
					</PageList>
					<PageList>
						<PageButton type='button'>
							<Icon $iconColor='#1c2025'>
								<FiChevronRight />
							</Icon>
						</PageButton>
					</PageList>
				</Pagination>
			</BoardSection>
		</ContentWrapper>
	);
};

export default MainPage;

const Tab = styled.aside`
	margin-bottom: 20px;
`;

const TabList = styled.li`
	margin-right: 10px;
`;

const TabButton = styled.button<{ $isActive?: boolean }>`
	padding: 10px 20px;
	border: 1px solid ${props => (props.$isActive ? '#fbd85d' : '#e5eaf2')};
	border-radius: 20px;
	background-color: transparent;
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	box-shadow: inset 0 1px 2px #f3f6f9, 0 1px 0.5px rgba(229, 234, 242, 0.6);

	&:hover {
		background-color: #fbd85d;
		border-color: #fbd85d;
		box-shadow: #fbd85d 0px 2px 2px;
	}
`;

const BoardSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: calc(100vh - 200px);
`;

const BoardListWrapper = styled.li`
	width: 300px;
	height: 340px;
	margin-right: 10px;
	margin-bottom: 10px;
	padding: 20px;
	border: 1px solid #e5eaf2;
	border-radius: 8px;
	background: linear-gradient(rgba(243, 246, 249, 0.5) 20%, #fff 100%);
	box-shadow: inset 0 1px 2px #f3f6f9, 0 1px 0.5px rgba(229, 234, 242, 0.6);
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:hover {
		box-shadow: #dae2ed 0px 4px 16px;
	}
`;

const BoardList = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	text-decoration: none;
`;

const BoardHeader = styled.div``;

const Status = styled.span<{ $isOpen: boolean }>`
	display: inline-block;
	padding: 4px 20px;
	border-radius: 20px;
	margin-bottom: 10px;
	border: 1px solid #000;

	background-color: ${props => (props.$isOpen ? '#f0f7ff' : '#f1f1f1')};
	color: ${props => (props.$isOpen ? '#0072e5' : '#303740')};
	border-color: ${props => (props.$isOpen ? '#99ccf3' : '#dae2ed')};
`;

const EndDate = styled.span`
	display: block;
	font-size: 14px;
	color: #b2b2b2;
`;

const Title = styled.h4`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #1c2025;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
`;

const TeamStatus = styled.strong`
	color: #b2b2b2;
	font-weight: 400;
`;

const InterestedIn = styled.div`
	display: inline-block;
	padding: 0 10px;
	margin-bottom: 4px;
	border: 1px solid #dae2ed;
	border-radius: 4px;
	background-color: rgba(243, 246, 249, 0.5);
	color: #1c2025;
	text-align: center;
	font-size: 14px;
`;

const BoardContent = styled(StyledStack)`
	height: 110px;
`;

const BoardFooter = styled(StyledStack)`
	padding: 20px 4px 0;
	border-top: 1px solid #e5eaf2;

	dd {
		display: flex;
		color: #1c2025;
		font-size: 14px;
	}
`;

const TagLists = styled.div`
	padding-left: 2px;

	span {
		display: inline-block;
		margin-right: 10px;
		color: #b2b2b2;
		font-size: 12px;
		text-transform: capitalize;
	}
`;

const Pagination = styled(StyledStack)``;

const PageList = styled.li`
	margin-right: 4px;
`;

const PageButton = styled.button<{ $isCurrent?: boolean }>`
	width: 30px;
	height: 30px;
	border: none;
	border-radius: 4px;
	background-color: ${props => (props.$isCurrent ? '#ffe579' : 'transparent')};
`;
