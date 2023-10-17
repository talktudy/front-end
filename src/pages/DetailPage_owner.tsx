import React from 'react';
import { ChatInDetail } from '../components';
import { SDetailPage_owner } from './sDetailPage_owner';
import ReactQuill from 'react-quill';

const DetailPage_owner: React.FC = () => {
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
								<ReactQuill />
							</div>
							<div className='edit-button'>
								<button>수정하기</button>
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
