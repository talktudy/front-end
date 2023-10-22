import styled from 'styled-components';

interface Title {
	title: string;
}

const Title = ({ title }: Title) => {
	return <StyledTitle>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h4`
	font-size: 14px;
	margin-bottom: 10px;
`;
