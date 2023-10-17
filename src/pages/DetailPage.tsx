import React from 'react';
import { ChatInDetail } from '../components/index';
import { SDetailPage } from './sDetailPage';

const DetailPage: React.FC = () => {
	return (
		<SDetailPage>
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
							</div>
							<h5>지원하기</h5>
							<div className='apply_form'>
								<div className='writing_space'></div>
							</div>
							<div className='container-btn'>
								<button>수정하기</button>
								<button>지원하기</button>
							</div>
						</div>
					</div>
					<ChatInDetail />
				</div>
			</div>
		</SDetailPage>
	);
};

export default DetailPage;
