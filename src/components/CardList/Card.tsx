import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface Card {
	size?: 'sm' | 'lg';
	href: string;
	children: React.ReactNode;
}

const Card = ({ size, href, children }: Card) => {
	return (
		<CardWrapper $isSmall={size === 'sm'}>
			<CardInner to={href}>{children}</CardInner>
		</CardWrapper>
	);
};

export default Card;

const CardWrapper = styled.article<{ $isSmall?: boolean }>`
	width: ${props => (props.$isSmall ? '362px' : '300px')};
	height: ${props => (props.$isSmall ? '220px' : '340px')};
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

const CardInner = styled(Link)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	text-decoration: none;
`;
