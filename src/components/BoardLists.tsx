import styled from 'styled-components';
import Stack, { StyledStack } from './Stack';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { AiOutlineEye } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import Icon from './Icon';

const interestsMap: { [key: string]: string } = {
	NONE: '전체',
	FRONTEND: '프론트엔드',
	BACKEND: '백엔드',
	DESIGNER: '디자이너',
	PM: 'PM',
	ANDROID: '안드로이드',
	IOS: 'IOS',
	FULLSTACK: '풀스택',
};

interface BoardLists {
	data?: {
		studyId: number;
		title: string;
		interests: string;
		startDate: string;
		endDate: string;
		maxCapacity: number;
		currentCapacity: number;
		description: string;
		tag: string;
		views: number;
		nickname: string;
		open: boolean;
	}[];
}

const BoardLists = ({ data }: BoardLists) => {
	return (
		<StyledStack as='ul' $wrap='wrap' $px={20} $mb={40}>
			{data?.map(list => (
				<BoardListWrapper key={list.studyId}>
					<BoardList as={Link} to={`/detail/${list.studyId}`}>
						<BoardHeader>
							<Status $isOpen={list.open}>{list.open ? '모집중' : '모집완료'}</Status>
							<EndDate>마감일 | {format(new Date(list.endDate), 'yyyy년 MM월 dd일')}</EndDate>
						</BoardHeader>
						<Title>{list.title}</Title>
						<BoardContent $direction='column' $justify='flex-end'>
							<InterestedIn>{interestsMap[list.interests]}</InterestedIn>
							<TagLists>
								{list.tag.split(',').map(listTag => (
									<span key={listTag}>#{listTag}</span>
								))}
							</TagLists>
						</BoardContent>
						<BoardFooter $justify='space-between'>
							<dl>
								<dt className='srOnly'>작성자</dt>
								<dd>{list.nickname}</dd>
							</dl>
							<Stack>
								<dl>
									<dt className='srOnly'>팀원 현황</dt>
									<dd>
										<Icon $iconColor='#1c2025' $mr={4} $fontSize={16}>
											<FiUsers />
										</Icon>
										{list.currentCapacity} / {list.maxCapacity}명
									</dd>
								</dl>
								<dl>
									<dt className='srOnly'>조회수</dt>
									<dd>
										<Icon $iconColor='#1c2025' $mr={4} $fontSize={16}>
											<AiOutlineEye />
										</Icon>
										{list.views}
									</dd>
								</dl>
							</Stack>
						</BoardFooter>
					</BoardList>
				</BoardListWrapper>
			))}
		</StyledStack>
	);
};

export default BoardLists;

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

	dl {
		margin-left: 8px;
	}

	dd {
		display: flex;
		color: #1c2025;
		font-size: 12px;
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
