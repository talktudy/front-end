import React, { useState, useMemo } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import Icon from '@/components/Icon';
import { StyledStack } from '@/components/Stack';

import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const convertValue = (value: string | null, defaultValue: string) => {
	if (!value) return defaultValue;
	return value.length > 0 ? value : defaultValue;
};

const FilterInput = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const qType = searchParams.get('type');
	const qKeyword = searchParams.get('keyword');

	const queries = useMemo(() => {
		return {
			type: convertValue(qType, 'title'),
			keyword: convertValue(qKeyword, ''),
		};
	}, [qType, qKeyword]);

	const [type, setType] = useState(queries.type);
	const [keyword, setKeyword] = useState(queries.keyword);

	const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};

	const handleSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code !== 'Enter') return;
		const input = e.target as HTMLInputElement;
		setSearchParams({ type, keyword: input.value });
	};

	const resetSearchParams = () => {
		const searchKeyword = searchParams.get('keyword');
		if (typeof searchKeyword === 'string' && searchKeyword.length > 0) {
			setSearchParams({ type: '', keyword: '' });
		}
		setKeyword('');
	};

	return (
		<StyledFilterInput $align='center'>
			<span>
				<label htmlFor='type' className='srOnly'>
					검색 타입
				</label>
				<select name='type' id='type' onChange={e => setType(e.target.value)}>
					<option value='title'>제목</option>
					<option value='tag'>태그</option>
				</select>
			</span>
			<span>
				<label htmlFor='type' className='srOnly'>
					검색어
				</label>
				<input
					type='text'
					name='keyword'
					id='keyword'
					onKeyDown={handleSearchInput}
					onChange={handleKeyword}
					value={keyword}
				/>
			</span>
			{keyword ? (
				<ResetButton type='button' onClick={resetSearchParams}>
					<Icon $iconColor='#e5eaf2' $fontSize={24} $mr={10}>
						<AiOutlineClose />
					</Icon>
				</ResetButton>
			) : (
				<Icon $iconColor='#e5eaf2' $fontSize={24} $mr={10}>
					<AiOutlineSearch />
				</Icon>
			)}
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

const ResetButton = styled.button`
	border: none;
	background-color: transparent;
`;
