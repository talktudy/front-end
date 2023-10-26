import { format, formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';

import styled from 'styled-components';

interface TimeStamp {
	type: 'lastUpdated' | 'date';
	title: string;
	date: Date | string;
	hasDivider?: boolean;
}

const TimeStamp = ({ type, title, date, hasDivider }: TimeStamp) => {
	const convertedDate =
		type === 'lastUpdated'
			? formatDistance(new Date(), new Date(date), { locale: ko }) + ' 전'
			: format(new Date(date), 'yyyy년 MM월 dd일');

	return (
		<StyledTimeStamp>
			{title} {hasDivider ? '|' : ''} {convertedDate}
		</StyledTimeStamp>
	);
};

export default TimeStamp;

const StyledTimeStamp = styled.span`
	display: block;
	font-size: 14px;
	color: #b2b2b2;
`;
