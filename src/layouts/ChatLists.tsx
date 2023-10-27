import { AiOutlineEye } from 'react-icons/ai';

import Stack, { StyledStack } from '@/components/Stack';
import Icon from '@/components/Icon';
import Card from '@/components/CardList/Card';
import Container from '@/components/Container';
import TimeStamp from '@/components/CardList/TimeStamp';
import Title from '@/components/CardList/Title';
import Interests from '@/components/CardList/Interests';
import Tags from '@/components/CardList/Tags';
import Caption from '@/components/CardList/Caption';
import CardFooter from '@/components/CardList/CardFooter';

import BgChat from '@/assets/bg_chat.png';

import styled from 'styled-components';

interface ChatLists {
	data?: {
		teamId: number;
		title: string;
		interests: string;
		createdDate: string; //startDate
		updatedDate: string; //
		description: string;
		tag: string;
		views: number;
		nickname: string;
	}[];
}

const ChatLists = ({ data }: ChatLists) => {
	return (
		<StyledStack $wrap='wrap' $px={20} $mb={40}>
			{data?.map(list => (
				<CardWrapper key={list.teamId}>
					<Card key={list.teamId} href={`/detail/${list.teamId}`} size='sm'>
						<Container>
							<TimeStamp type='lastUpdated' title='업데이트' date={list.updatedDate} />
						</Container>
						<Container>
							<Title title={list.title} />
						</Container>
						<Stack $direction='column' $justify='flex-end'>
							<Interests interests={list.interests} />
							<Tags tags={list.tag} />
						</Stack>
						<CardFooter>
							<Caption title='작성자' children={list.nickname} />
							<Stack>
								<Caption title='조회수'>
									<Icon $iconColor='#1c2025' $mr={4} $fontSize={16}>
										<AiOutlineEye />
									</Icon>
									{list.views}
								</Caption>
							</Stack>
						</CardFooter>
					</Card>
					<Background>
						<img src={BgChat} />
					</Background>
				</CardWrapper>
			))}
		</StyledStack>
	);
};

export default ChatLists;

const CardWrapper = styled(StyledStack)`
	position: relative;
`;

const Background = styled.div`
	position: absolute;
	bottom: 60px;
	right: 0px;
	width: 140px;
	z-index: -1;

	img {
		display: block;
		width: 100%;
	}
`;
