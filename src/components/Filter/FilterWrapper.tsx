import { PropsWithChildren } from 'react';

import styled from 'styled-components';

const FilterWrapper = ({ children }: PropsWithChildren) => {
	return (
		<StyledFilterWrapper>
			<h3>필터 및 정렬</h3>
			<strong>다중 선택 가능합니다 ✨</strong>
			{children}
		</StyledFilterWrapper>
	);
};

export default FilterWrapper;

const StyledFilterWrapper = styled.section`
	position: relative;
	padding: 0 20px;

	h3 {
		margin-bottom: 4px;
	}

	strong {
		display: block;
		margin-bottom: 20px;
		color: #b2b2b2;
		font-size: 14px;
		font-weight: 400;
	}
`;
