import styled from 'styled-components';

interface Tags {
	tags: string;
}

const Tags = ({ tags }: Tags) => {
	return (
		<StyledTags>
			{tags.split(',').map(listTag => (
				<TagList key={listTag}>#{listTag}</TagList>
			))}
		</StyledTags>
	);
};

export default Tags;

const StyledTags = styled.div`
	padding-left: 2px;
`;

const TagList = styled.span`
	display: inline-block;
	margin-right: 10px;
	color: #b2b2b2;
	font-size: 12px;
	text-transform: capitalize;
`;
