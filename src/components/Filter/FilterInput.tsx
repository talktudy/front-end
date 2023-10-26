import { AiOutlineSearch } from 'react-icons/ai';

import Icon from '@/components/Icon';
import { StyledStack } from '@/components/Stack';

import styled from 'styled-components';

const FilterInput = () => {
	return (
		<StyledFilterInput $align='center'>
			<span>
				<label htmlFor='type' className='srOnly'>
					검색 타입
				</label>
				<select name='type' id='type'>
					<option value='title'>제목</option>
					<option value='tag'>태그</option>
				</select>
			</span>
			<span>
				<label htmlFor='type' className='srOnly'>
					검색어
				</label>
				<input type='text' name='keyword' id='keyword' />
			</span>
			<Icon $iconColor='#e5eaf2' $fontSize={24} $mr={10}>
				<AiOutlineSearch />
			</Icon>
		</StyledFilterInput>
	);
};

export default FilterInput;

const StyledFilterInput = styled(StyledStack)`
	position: absolute;
	bottom: 0;
	right: 30px;
	height: 40px;
	border: 1px solid #e5eaf2;
	border-radius: 10px;
	font-size: 16px;

	span {
		display: block;
		height: 100%;
	}

	select,
	input {
		display: block;
		height: 100%;
		padding: 0 10px;
		border: none;
	}

	select {
		padding: 0 20px;
		border-radius: 10px 0 0 10px;
	}

	input {
		width: 200px;
		outline: none;
	}
`;
