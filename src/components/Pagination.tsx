import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

import { StyledStack } from '@components/Stack';
import Icon from '@components/Icon';

interface Pagination {
	currentPage: number;
	totalPages?: number;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Pagination = ({ currentPage = 0, totalPages = 0, onClick }: Pagination) => {
	const pagination: number[] = [];
	pagination.fill(0, 0, totalPages);

	return (
		<StyledStack as='ul' $justify='center'>
			<PageList>
				<PageButton
					type='button'
					disabled={currentPage === 0}
					data-id={currentPage - 1 <= 0 ? 0 : currentPage - 1}
				>
					<Icon $iconColor='#1c2025'>
						<FiChevronLeft />
					</Icon>
				</PageButton>
			</PageList>
			{pagination.length > 0 ? (
				pagination.map((_, index) => (
					<PageList>
						<PageButton
							type='button'
							$isCurrent={currentPage === index}
							onClick={onClick}
							data-id={index}
						>
							{index + 1}
						</PageButton>
					</PageList>
				))
			) : (
				<PageList>
					<PageButton type='button' $isCurrent={true} onClick={onClick}>
						1
					</PageButton>
				</PageList>
			)}
			<PageList>
				<PageButton
					type='button'
					disabled={currentPage + 1 === totalPages}
					data-id={currentPage + 2 > totalPages ? totalPages : currentPage + 1}
				>
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

	&:disabled {
		cursor: default;
		background-color: transparent;
	}

	&:not(:disabled):hover {
		background-color: ${props => (props.$isCurrent ? '#ffe579' : '#eee')};
	}
`;
