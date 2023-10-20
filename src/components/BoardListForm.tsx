import { useState } from 'react';

import { useLocation } from 'react-router';
import { BsCalendarEvent } from 'react-icons/bs';
import { ko } from 'date-fns/esm/locale';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';

import { StyledStack } from '@/components/Stack';
import Icon from '@/components/Icon';
import Editor from '@/components/Editor';

import 'react-datepicker/dist/react-datepicker.css';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const BoardListForm = () => {
	const location = useLocation();
	const isEditPage = location.pathname.includes('edit');

	const [endDate, setEndDate] = useState<Date>(tomorrow);
	const [editor, setEditor] = useState<ReactQuill.Value>('');

	return (
		<FormWrapper>
			<FormField $align='center' $mb={10}>
				<label htmlFor='type'>모집 구분</label>
				<select name='type' id='type'>
					<option value='1'>스터디</option>
					<option value='2'>채팅</option>
				</select>
			</FormField>
			<FormField $align='center' $mb={10}>
				<label htmlFor='position'>모집 포지션</label>
				<select name='position' id='position'>
					<option value='NONE'>선택안함</option>
					<option value='FRONTEND'>프론트엔드</option>
					<option value='BACKEND'>백엔드</option>
					<option value='FULLSTACK'>풀스택</option>
					<option value='ANDROID'>안드로이드</option>
					<option value='IOS'>IOS</option>
					<option value='PM'>PM</option>
					<option value='DESIGNER'>디자이너</option>
				</select>
			</FormField>
			<FormField $align='center' $mb={10}>
				<label htmlFor='endDate'>모집 마감일</label>
				<Calendar>
					<DatePicker
						dateFormat='yyyy-MM-dd'
						selected={endDate}
						onChange={date => date && setEndDate(date)}
						locale={ko}
					/>
					<Icon className='icon' $size={32} $iconColor='#000'>
						<BsCalendarEvent />
					</Icon>
				</Calendar>
			</FormField>
			<FormField $align='center' $mb={10}>
				<label htmlFor='team'>모집 인원</label>
				<select name='team' id='team'>
					<option value='1'>1명</option>
					<option value='2'>2명</option>
					<option value='3'>3명</option>
					<option value='4'>4명</option>
					<option value='5'>5명</option>
					<option value='6'>6명</option>
					<option value='7'>7명</option>
					<option value='8'>8명</option>
					<option value='9'>9명</option>
				</select>
			</FormField>
			<FormField $direction='column' $mb={10} $fieldWidth={100} $gap={10}>
				<label htmlFor='title'>제목</label>
				<input type='text' name='title' value='' placeholder='제목을 입력해 주세요.' />
			</FormField>
			<EditorFormField $direction='column' $mb={10}>
				<Editor html={editor} setHtml={setEditor} />
				<label htmlFor='tags' className='srOnly'>
					태그 모음
				</label>
				<input type='text' name='tags' value='' placeholder='#태그입력' />
			</EditorFormField>
			<SubmitButton>{isEditPage ? '수정하기' : '등록하기'}</SubmitButton>
		</FormWrapper>
	);
};

export default BoardListForm;

export const FormHeader = styled(StyledStack)`
	max-width: 600px;
	margin: 0 auto;
	border-bottom: 1px solid #ddd;
`;

export const FormTitle = styled.h2`
	margin-right: 8px;
	font-size: 20px;
`;

const FormWrapper = styled.form`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px 10px;
`;

const FormField = styled(StyledStack)<{ $gap?: number; $fieldWidth?: number }>`
	${props =>
		props.$gap &&
		css`
			label {
				${props.$direction === 'row' ? 'margin-right' : 'margin-bottom'}: ${props.$gap}px;
			}
		`}

	label {
		display: block;
		min-width: 140px;
		font-weight: 500;
		text-align: left;
	}

	select,
	input {
		width: ${props => (props.$fieldWidth ? `${props.$fieldWidth}%` : '200px')};
		padding: 6px 8px;
		border: 1px solid #c1c1c1;
		border-radius: 4px;
	}

	select:focus,
	input:focus {
		border-color: #3e86f5;
		outline: #3e86f5;
	}
`;

const EditorFormField = styled(StyledStack)`
	border: 1px solid #c1c1c1;
	border-radius: 4px;

	.editor {
		width: 100%;
		border: none;
	}

	.ql-toolbar.ql-snow,
	.ql-container.ql-snow {
		position: relative;
		border: none;
	}

	.ql-container.ql-snow {
		min-height: 400px;
	}

	.ql-container.ql-snow::before,
	.ql-container.ql-snow::after {
		position: absolute;
		left: 50%;
		width: 96%;
		height: 0.5px;
		background-color: #c1c1c1;
		transform: translateX(-50%);
		content: '';
	}

	.ql-container.ql-snow::before {
		top: 0;
	}

	.ql-container.ql-snow::after {
		bottom: 0;
	}

	input {
		position: relative;
		top: -3px;
		width: 100%;
		padding: 8px 16px;
		border: none;
		outline: none;
		background-color: transparent;
	}
`;

const Calendar = styled.div`
	position: relative;

	.icon {
		position: absolute;
		top: 0;
		right: -5px;
		pointer-events: none;
		z-index: 222;
	}
`;

const SubmitButton = styled.button`
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 4px;
	color: #fff;
	background-color: #f8c332;
	font-weight: 700;
	font-size: 14px;
`;