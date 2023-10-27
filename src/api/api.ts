import { StudyContent } from '@/types/study';
import request from './request';
import { ChatContent } from '@/types/chat';

// 리스트
export const getStudyLists = async (query: string) => {
	try {
		const response = await request.get(`/study${query}`);
		if (response.status !== 200) throw Error();
		return response.data;
	} catch (error: unknown) {
		console.log(error);
	}
};

// 모집
export const postRegisterStudyForm = async (data: StudyContent) => {
	try {
		const response = await request.post('/study/register', JSON.stringify(data));
		if (response.status !== 200) throw Error();
		alert('모집 폼이 등록 되었습니다! 홈 화면으로 이동됩니다.');
		window.location.href = '/';
	} catch (error: unknown) {
		alert('모집 폼 등록이 되지 않았습니다. 다시 시도해주세요.');
	}
};

export const postRegisterChatForm = async (data: ChatContent) => {
	try {
		const response = await request.post('/team/register', JSON.stringify(data));
		if (response.status !== 200) throw Error();
		alert('모집 폼이 등록 되었습니다! 홈 화면으로 이동됩니다.');
		window.location.href = '/';
	} catch (error: unknown) {
		alert('모집 폼 등록이 되지 않았습니다. 다시 시도해주세요.');
	}
};

// 이미지 업로드
export const updateImage = async (data: { file: File }) => {
	try {
		const response = await request.post('/upload', data, {
			headers: { 'Content-Type': 'multipart/form-data' },
		});
		if (response.status !== 200) throw Error();
		return response.data;
	} catch (error: unknown) {
		alert('이미지가 등록되지 못했습니다. 다시 시도해 주세요');
	}
};
