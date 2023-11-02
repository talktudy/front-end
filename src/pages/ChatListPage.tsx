import { useState, useCallback } from 'react';
import ContentWrapper from '@/components/Content/ContentWrapper';
import Stack, { StyledStack } from '@/components/Stack';
import ContentTitle from '@/components/Content/ContentTitle';
import Pagination from '@/components/Pagination';
import FilterWrapper from '@/components/Filter/FilterWrapper';
import Title from '@/components/Filter/Title';
import FilterButton from '@/components/Filter/FilterButton';
import FilterInput from '@/components/Filter/FilterInput';

import ChatLists from '@/layouts/ChatLists';
import { useQuery } from 'react-query';
import { getChatLists } from '@/api/api';
import LoadingSpinner from '@/components/LoadingSpinner';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const interests = [
	{ id: 'NONE', value: '자유' },
	{ id: 'FRONTEND', value: '프론트엔드' },
	{ id: 'BACKEND', value: '백엔드' },
	{ id: 'DESIGNER', value: '디자이너' },
	{ id: 'PM', value: 'PM' },
	{ id: 'ANDROID', value: '안드로이드' },
	{ id: 'IOS', value: 'IOS' },
	{ id: 'FULLSTACK', value: '풀 스택' },
];

const ChatPage = () => {
	const [searchParams] = useSearchParams();

	const searchType = searchParams.get('type') ? `&type=${searchParams.get('type')}` : '';
	const searchKeyword = searchParams.get('keyword')
		? `&keyword=${searchParams.get('keyword')}`
		: '';

	const [page, setPage] = useState(0);
	const [orderBy, setOrderBy] = useState('');
	const [positions, setPositions] = useState<string[]>([]);
	const interestsInStr = positions.join(',');

	const setNewPage = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.target as HTMLButtonElement;
		const newPage = button.dataset.id ? Number(button.dataset.id) : 0;
		setPage(newPage);
	}, []);

	const setNewOrderBy = useCallback((query: string) => {
		if (query.length <= 0) setOrderBy('');
		setOrderBy(query);
	}, []);

	const setNewInterests = useCallback(
		(query: string, e: React.ChangeEvent<HTMLInputElement>) => {
			const isChecked = e.target.checked;
			if (isChecked) {
				if (positions.includes(query)) return;
				setPositions([...positions, query]);
			} else {
				const newPositions = positions.filter(position => position !== query);
				setPositions(newPositions);
			}
		},
		[positions]
	);

	const queries = `?page=${page}&size=12&orderBy=${orderBy}&interests=${interestsInStr}${searchType}${searchKeyword}`;
	const query = useQuery(['ChatLists', queries], () => getChatLists(queries));

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
					<FilterButton
						id='views'
						name='orderBy'
						label='🔥 인기순'
						onChange={() => setNewOrderBy('views')}
					/>
				</StyledStack>
				<Title title='분야별 채팅 보기' />
				<StyledStack $align='center' $mb={40}>
					{interests.map(interest => (
						<FilterButton
							key={interest.id}
							id={interest.id}
							name='interests'
							label={interest.value}
							onChange={e => setNewInterests(interest.id, e)}
						/>
					))}
				</StyledStack>
				<FilterInput />
			</FilterWrapper>

			<Stack $direction='column' $justify='space-between' $align='center' $py={30}>
				<ChatListWrapper
					$justify={query.data && query.data.content.length <= 0 ? 'center' : 'flex-start'}
				>
					{query.status === 'loading' && (
						<LoadingSpinner position='absolute' dimmed={false} color='#99ccf3' message='로딩중' />
					)}
					{query.status === 'success' && <ChatLists data={query.data.content} />}
				</ChatListWrapper>
				<Pagination currentPage={0} totalPages={query.data?.totalPages} onClick={setNewPage} />
			</Stack>
		</ContentWrapper>
	);
};

export default ChatPage;

const ChatListWrapper = styled(StyledStack)`
	position: relative;
	width: 100%;
	min-height: 600px;
`;
