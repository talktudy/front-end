import React, { useState, useEffect } from 'react';
import { ChatInDetail, Loading } from '../components/index';
import { SDetailPage } from './sDetailPage';
import { AiOutlineEye } from 'react-icons/ai';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';
import axios from 'axios';

interface IData {
	createdDate: string;
	currentCapacity: number;
	description: string;
	endDate: string;
	interests: string;
	maxCapacity: number;
	nickname: string;
	open: boolean;
	studyId: number;
	tag: string;
	title: string;
	updatedDate: string;
	views: number;
}

const DetailPage = () => {
	const [data, setData] = useState({} as IData);
	const { id } = useParams();
	const [text, setText] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	const getData = async () => {
		try {
			const res = await axios.get(
				`https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app:443/api/study/${id}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			);
			setData(res.data);
			setLoading(false);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		// 토큰을 받아와서 headers에 추가하기.
		// const applyStudy = async () => {
		// 	try {
		// 		const res = await axios.post(
		// 			`https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app:443/api/study/apply/${2}`,
		// 			text,
		// 			{
		// 				headers: {
		// 					'Content-Type': 'application/json',
		// 					Authorization: 'token',
		// 				},
		// 				withCredentials: true,
		// 			}
		// 		);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };
		// applyStudy();
		// console.log(text);
	};
	useEffect(() => {
		getData();
	}, [id]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<SDetailPage>
					{data && (
						<div className='wrapper'>
							<div className='container-title'>
								{data.open === true ? (
									<div className='status'>모집중</div>
								) : (
									<div className='status-done'>모집완료</div>
								)}
								<span className='title'>{data.title}</span>
							</div>
							<div className='container-below'>
								<div className='container-info'>
									<div className='writer'>
										<span>작성자: {data.nickname}</span>
										<span>
											<AiOutlineEye />: {data.views}
										</span>
									</div>
									<div className='info'>
										<h5>모집 정보</h5>
										<div className='info-detail'>
											{data.createdDate && data.endDate && (
												<div className='details_top'>
													<span>
														모집기간: {data.createdDate.slice(0, data.createdDate.indexOf('T'))} ~{' '}
														{data.endDate.slice(0, data.endDate.indexOf('T'))}
													</span>
													<span>
														모집인원: {data.currentCapacity} / {data.maxCapacity}
													</span>
												</div>
											)}
											<div className='details_down'>
												<span>태그: {data.tag}</span>
												<span>분야: {data.interests}</span>
											</div>
										</div>
										<h5>모집 소개</h5>
										<div className='info-intro'>
											{data?.description && (
												<div
													style={{
														width: '60vw',
														whiteSpace: 'normal',
													}}
													dangerouslySetInnerHTML={{
														__html: DOMPurify.sanitize(String(data?.description)),
													}}
												/>
											)}
										</div>
										<h5>지원하기</h5>
										<form onSubmit={submitHandler}>
											<div className='apply_form'>
												<div className='writing_space'>
													<textarea
														placeholder='간단하게 자기소개를 해주세요.'
														value={text}
														onChange={onChangeHandler}
													></textarea>
												</div>
											</div>
											<div className='container-btn'>
												{/* <button>수정하기</button> */}
												<button type='submit'>지원하기</button>
											</div>
										</form>
									</div>
								</div>
								<ChatInDetail />
							</div>
						</div>
					)}
				</SDetailPage>
			)}
		</>
	);
};

export default DetailPage;
