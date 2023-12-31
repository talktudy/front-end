import styled from 'styled-components';

import Container from '@/components/Container';

interface FilterButton {
	id: string;
	name: string;
	label: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	defaultChecked?: boolean;
	checked?: boolean;
}

const FilterButton = ({ id, name, label, onChange, defaultChecked, checked }: FilterButton) => {
	return (
		<Container $display='inline-block'>
			<FilterInput
				type='checkbox'
				id={id}
				name={name}
				className='srOnly'
				onChange={onChange}
				defaultChecked={defaultChecked}
				checked={checked}
			/>
			<FilterLabel htmlFor={id}>{label}</FilterLabel>
		</Container>
	);
};

export default FilterButton;

const FilterInput = styled.input`
	&:checked + label {
		border: 1px solid #fbd85d;
		background-color: #fbd85d;
	}
`;

const FilterLabel = styled.label`
	display: inline-flex;
	align-items: center;
	padding: 8px 16px;
	margin-right: 10px;
	border-radius: 5px;
	border: 1px solid #f2f4f7;
	background-color: #f2f4f7;
	cursor: pointer;
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

	&:hover {
		background-color: #fbd85d;
	}
`;
