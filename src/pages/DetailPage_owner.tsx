import React, { useRef, useState } from 'react';
import { ChatInDetail } from '../components';
import { SDetailPage_owner } from './sDetailPage_owner';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DetailPage_owner: React.FC = () => {
	const quillRef = useRef<ReactQuill | null>(null);
	const [edit, setEdit] = useState<boolean>(false);
	// 수정 버튼을 누르면 React-Quill이 보이도록 구현
	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, 3, 4, 5, 6, false] }],
				[{ font: [] }],
				[{ align: [] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[{ list: 'ordered' }, { list: 'bullet' }, 'link'],
				[
					{
						color: [
							'#000000',
							'#e60000',
							'#ff9900',
							'#ffff00',
							'#008a00',
							'#0066cc',
							'#9933ff',
							'#ffffff',
							'#facccc',
							'#ffebcc',
							'#ffffcc',
							'#cce8cc',
							'#cce0f5',
							'#ebd6ff',
							'#bbbbbb',
							'#f06666',
							'#ffc266',
							'#ffff66',
							'#66b966',
							'#66a3e0',
							'#c285ff',
							'#888888',
							'#a10000',
							'#b26b00',
							'#b2b200',
							'#006100',
							'#0047b2',
							'#6b24b2',
							'#444444',
							'#5c0000',
							'#663d00',
							'#666600',
							'#003700',
							'#002966',
							'#3d1466',
							'custom-color',
						],
					},
					{ background: [] },
				],
				['image'],
				['clean'],
			],
		},
	};

	const handleEdit = () => {};
	return (
		<SDetailPage_owner>
			<div className='wrapper'>
				<div className='container-title'>
					<div className='status'>모집중</div>
					<span className='title'>타입스크립트 스터디 인원 모집</span>
				</div>
				<div className='container-below'>
					<div className='container-info'>
						<div className='writer'>
							<span>작성자: 염승준</span>
							<span>조회수: 98</span>
						</div>
						<div className='info'>
							<h5>모집 정보</h5>
							<div className='info-detail'>
								<div className='details_top'>
									<span>모집기간: 2023/10/8 ~ 2023/10/16</span>
									<span>모집인원: 4</span>
								</div>
								<div className='details_down'>
									<span>태그: TypeScript</span>
									<span>분야: 프론트엔드</span>
								</div>
							</div>
							<h5>모집 소개</h5>
							<div className='info-intro'>
								{/* <textarea placeholder='자세한 정보를 입력해주세요!'></textarea> */}
								<ReactQuill theme='snow' ref={quillRef} className='editor' modules={modules} />
							</div>
							<div className='edit-button'>
								<button onClick={handleEdit}>수정하기</button>
							</div>
							<h5>신청자 현황</h5>
							<div className='info-applicant'>
								<div className='applicant-form'>
									<div className='applicant'>
										<div className='profile-img'>.</div>
										<div className='name'>
											<span>홍길동</span>
											<span>프론트엔드</span>
										</div>
									</div>
									<div className='accept'>
										<div>수락</div>
										<div>거절</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ChatInDetail />
				</div>
			</div>
		</SDetailPage_owner>
	);
};

export default DetailPage_owner;
