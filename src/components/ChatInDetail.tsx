import { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { SChatInDetail } from './sChatInDetail';
import axios from 'axios';
import { useParams } from 'react-router';

let stomp_client: any;

const ChatInDetail = () => {
	const { id } = useParams();
	const [chatRoomId, setChatRoomId] = useState<number>(0);
	const [isEnter, setIsEnter] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');

	const getChatRoomId = async () => {
		try {
			const res = await axios.get(
				`https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app:443/api/chat/study/apply/${id}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			);
			setChatRoomId(res.data.chatRoomId);
		} catch (error) {
			console.log(error);
		}
	};

	const connectChat = () => {
		const socket = new SockJS(
			'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/chat'
		);
		stomp_client = Stomp.over(socket);
		stomp_client.connect({}, function (frame: any) {
			console.log('Connected:' + frame);
			stomp_client.subscribe(`/topic/chat/room/${chatRoomId}`, function (response: any) {
				console.log(response);
				console.log(JSON.parse(response.body));
			});
		});
		setIsEnter(true);
	};

	const sendMessage = (msg: string) => {
		stomp_client.send(
			'/app/chat/message',
			{},
			JSON.stringify({
				messageType: 'TALK',
				chatRoomId: chatRoomId,
				nickname: '새로운닉네임',
				message: msg,
				email: 'test@test.com',
			})
		);
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isEnter) {
			sendMessage(message);
		}
		setMessage('');
	};

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	};

	useEffect(() => {
		getChatRoomId();
		connectChat();
	}, []);

	return (
		<SChatInDetail>
			<div className='writer'>
				<span>채팅창</span>
			</div>
			<div className='chat'>
				<div className='chat_log'></div>
				<div className='chat_input'>
					<form onSubmit={onSubmit}>
						<textarea placeholder='메세지를 입력해주세요.' onChange={onChange} />
						<button type='submit'>전송</button>
					</form>
				</div>
			</div>
		</SChatInDetail>
	);
};

export default ChatInDetail;
