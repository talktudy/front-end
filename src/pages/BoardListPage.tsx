import { useCallback, useState } from 'react';

import ContentWrapper from '@/components/Content/ContentWrapper';
import Stack, { StyledStack } from '@/components/Stack';
import ContentTitle from '@/components/Content/ContentTitle';
import Pagination from '@/components/Pagination';
import FilterWrapper from '@/components/Filter/FilterWrapper';
import Title from '@/components/Filter/Title';
import FilterButton from '@/components/Filter/FilterButton';
import FilterInput from '@/components/Filter/FilterInput';

import BoardLists from '@/layouts/BoardLists';
import { getStudyLists } from '@/api/api';
import { useQuery } from 'react-query';
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

const MainPage = () => {
	const [searchParams] = useSearchParams();

	const searchType = searchParams.get('type') ? `&type=${searchParams.get('type')}` : '';
	const searchKeyword = searchParams.get('keyword')
		? `&keyword=${searchParams.get('keyword')}`
		: '';

	const [page, setPage] = useState(0);
	const [orderBy, setOrderBy] = useState('');
	const [isOpen, setIsOpen] = useState(true);
	const [positions, setPositions] = useState<string[]>([]);
	const interestsInStr = positions.join(',');

	const queries = `?page=${page}&size=12&orderBy=${orderBy}&open=${isOpen}&interests=${interestsInStr}${searchType}${searchKeyword}`;

	const setNewOrderBy = useCallback((query: string) => {
		if (query.length <= 0) setOrderBy('');
		setOrderBy(query);
	}, []);

	const setNewOpenState = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const setNewPage = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.target as HTMLButtonElement;
		const newPage = button.dataset.id ? Number(button.dataset.id) : 0;
		setPage(newPage);
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

	const query = useQuery(['studyLists', queries], () => getStudyLists(queries));

	return (
		<ContentWrapper>
			<ContentTitle>
				스터디에서 함께 할 <br />
				멋진 동료를 찾고 있어요! 😎
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
					<FilterButton
						id='open'
						name='open'
						label='👀 모집중'
						onChange={setNewOpenState}
						defaultChecked={true}
					/>
				</StyledStack>
				<Title title='분야별 스터디 보기' />
				<StyledStack $align='center' $mb={14}>
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
				<BoardListWrapper
					$justify={query.data && query.data.content.length <= 0 ? 'center' : 'flex-start'}
				>
					{query.status === 'loading' && (
						<LoadingSpinner position='absolute' dimmed={false} color='#99ccf3' message='로딩중' />
					)}
					{query.status === 'success' && <BoardLists data={query.data.content} />}
				</BoardListWrapper>

				<Pagination currentPage={page} totalPages={query.data?.totalPages} onClick={setNewPage} />
			</Stack>
		</ContentWrapper>
	);
};

export default MainPage;

const BoardListWrapper = styled(StyledStack)`
	position: relative;
	width: 100%;
	min-height: 600px;
`;
