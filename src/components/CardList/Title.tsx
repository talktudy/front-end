import styled from 'styled-components';

interface Title {
	title: string;
}

const Title = ({ title }: Title) => {
	return <StyledTitle>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h4`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #1c2025;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
`;
