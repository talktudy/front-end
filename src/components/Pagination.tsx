import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { StyledStack } from './Stack';
import Icon from './Icon';
import styled from 'styled-components';

const Pagination = () => {
	return (
		<StyledStack as='ul' $justify='center'>
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
		</StyledStack>
	);
};

export default Pagination;

const PageList = styled.li`
	margin-right: 4px;
`;

const PageButton = styled.button<{ $isCurrent?: boolean }>`
	width: 30px;
	height: 30px;
	border: none;
	border-radius: 4px;
	background-color: ${props => (props.$isCurrent ? '#ffe579' : 'transparent')};

	&:hover {
		background-color: #eee;
	}
`;
