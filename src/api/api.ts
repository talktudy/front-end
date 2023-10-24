import { StudyContent } from '@/types/study';
import request from './request';
import { ChatContent } from '@/types/chat';

export const postRegisterStudyForm = async (data: StudyContent) => {
	try {
		const response = await request.post('/study/register', JSON.stringify(data));
		if (response.status !== 200) throw Error();
	} catch (error: unknown) {
		alert('모집 폼 등록이 되지 않았습니다. 다시 시도해주세요.');
	}
};

export const postRegisterChatForm = async (data: ChatContent) => {
	try {
		const response = await request.post('/team/register', JSON.stringify(data));
		if (response.status !== 200) throw Error();
	} catch (error: unknown) {
		alert('모집 폼 등록이 되지 않았습니다. 다시 시도해주세요.');
	}
};
