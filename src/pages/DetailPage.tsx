import React, { useState, useEffect } from 'react';
import { ChatInDetail } from '../components/index';
import { SDetailPage } from './sDetailPage';
import { AiOutlineEye } from 'react-icons/ai';
import axios from 'axios';

const DetailPage: React.FC = () => {
	const [data, setData] = useState({});

	// 게시자가 작성한 데이터를 불러오는 함수
	const getData = async () => {
		const res = await axios.get('주소');
		setData(res.data);
	};
	useEffect(() => {
		getData();
	}, []);
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
							<span>
								<AiOutlineEye />: 98
							</span>
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
								{/* {data?.content && (
									<div
										style={{
											width: '60vw',
											whiteSpace: 'normal',
										}}
										dangerouslySetInnerHTML={{
											__html: DOMPurify.sanitize(String(data?.content)),
										}}
									/>
								)} */}
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
