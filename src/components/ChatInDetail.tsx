import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import SockJS from 'sockjs-client';
// import StompJs from 'stompjs';
import axios from 'axios';
import * as StompJs from '@stomp/stompjs';
import webstomp from 'webstomp-client';

let stompClient: any;

const ChatInDetail = () => {
	const { id } = useParams();
	const [chatRoomId, setChatRoomId] = useState<number>(0);
	const [isEnter, setIsEnter] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const [chatLog, setChatLog] = useState<string[]>([]);
	const chatLogRef = useRef();

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
			//console.log(res.data);
			setChatRoomId(res.data.chatRoomId);
			connectChat();
		} catch (error) {
			console.log(error);
		}
	};

	const getChatLog = async () => {
		try {
			const res = await axios.get(
				`https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app:443/api/chat/${chatRoomId}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	// getChatLog();

	const callbackSubscribe = (response: any) => {
		if (response.body) {
			console.log(response);
			console.log(JSON.parse(response.body));
		}
	};

	const connectChat = async () => {
		try {
			/*	const client = new StompJs.Client({
					brokerURL: 'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/chat',
					connectHeaders: {},
					debug: function (str) {
						console.log(str);
					},
					reconnectDelay: 5000,
					heartbeatIncoming: 4000,
					heartbeatOutgoing: 4000,
				});
				client.onConnect = function (frame) {
					console.log('Connected!');
				};
				const callback = function (message: any) {
					if (message.body) {
						alert('got message with body ' + message.body);
					} else {
						alert('got empty message');
					}
				};
				setTimeout(function () {
					client.subscribe(`/topic/chat/room/${chatRoomId}`, callback);
				}, 1000);
				client.onStompError = function (frame) {
					console.log('Broker reported error: ' + frame.headers['message']);
					console.log('Additional details: ' + frame.body);
				};
				client.activate();
				setTimeout(function () {
					client.publish({
						destination: 'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/chat',
						body: 'Hello world',
					});
				}, 1500);*/
			const socket = new SockJS(
				'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/chat'
			);
			stompClient = webstomp.over(socket);
			await stompClient.connect({}, (frame: any) => {
				console.log('Connected:' + frame);
			});
			setTimeout(function () {
				stompClient.subscribe(`/topic/chat/room/${chatRoomId}`, function (response: any) {
					if (response.body) {
						console.log(response);
						console.log(JSON.parse(response.body));
					}
				});
			}, 1000);
			setTimeout(function () {
				stompClient.send(
					'/app/chat/message',
					{},
					{
						messageType: 'ENTER',
						chatRoomId: 1,
						nickname: '새로운닉네임',
						email: 'test@test.com',
					},
					function (message: any) {
						console.log(JSON.parse(message.body));
					}
				);
			}, 2000);
			setIsEnter(true);
		} catch (error) {
			console.log(error);
		}
	};

	// const connect = () => {
	// 	const clientData = new StompJs.Client({
	// 		brokerURL: 'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/chat',
	// 		connectHeaders: {},
	// 		debug: function (str) {
	// 			console.log(str);
	// 		},
	// 		reconnectDelay: 10000,
	// 		heartbeatIncoming: 5000,
	// 		heartbeatOutgoing: 5000,
	// 	});

	// 	clientData.onConnect = function () {
	// 		console.log('성공!');
	// 		clientData.subscribe(`/topic/chat/room/${chatRoomId}`, callbackSubscribe);
	// 	};
	// 	clientData.activate();
	// };

	// 예슬님 코드 merge후 axios interceptor 적용
	const sendMessage = (msg: string) => {
		// stomp_client.send(
		// 	'/app/chat/message',
		// 	{},
		// 	JSON.stringify({
		// 		messageType: 'TALK',
		// 		chatRoomId: chatRoomId,
		// 		nickname: '새로운닉네임',
		// 		message: msg,
		// 		email: 'test@test.com',
		// 	})
		// );
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isEnter) {
			sendMessage(message);
			setChatLog([...chatLog, message]);
		}
		setMessage('');
	};

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	};

	useEffect(() => {
		getChatRoomId();
		// connectChat();
		// connect();

		// SockJS 및 STOMP 클라이언트 연결 설정
		// const socket = new SockJS(
		// 	'https://port-0-talktudy-backend-12fhqa2blnizs97s.sel5.cloudtype.app/chat'
		// );
		// const stompClient = webstomp.over(socket);

		// // TOKEN은 로그인 Access 토근이 필요하여 Authorization 필드의 값으로 넣어주었다.
		// stompClient.connect({}, () => {
		// 	setTimeout(function () {
		// 		stompClient.subscribe(`/topic/chat/room/${chatRoomId}`, message => {
		// 			// 새로운 메시지 도착 시 실행되는 콜백 함수
		// 			const newMessage = JSON.parse(message.body);
		// 			setChatLog(prevMessages => [...prevMessages, newMessage]);
		// 		});
		// 	}, 1000);
		// });

		// setTimeout(function () {
		// 	stompClient.send(
		// 		'/app/chat/message',
		// 		{},
		// 		{
		// 			messageType: 'ENTER',
		// 			chatRoomId: 1,
		// 			nickname: '새로운닉네임',
		// 			email: 'test@test.com',
		// 		}
		// 	);
		// }, 2000);
	}, []);

	return (
		<SChatInDetail>
			<div className='writer'>
				<span>채팅창</span>
			</div>
			<div className='chat'>
				<div className='chat_log' ref={chatLogRef as any}>
					{chatLog.map((message, index) => (
						<div key={index} className='message right'>
							{message}
						</div>
					))}
				</div>
				<div className='chat_input'>
					<form onSubmit={onSubmit}>
						<textarea placeholder='메세지를 입력해주세요.' onChange={onChange} value={message} />
						<button type='submit'>전송</button>
					</form>
				</div>
			</div>
		</SChatInDetail>
	);
};

export default ChatInDetail;

const SChatInDetail = styled.div`
	width: 43%;
	margin-top: 30px;

	.writer {
		color: #1f1f1f;
		font-size: 20px;
		font-weight: 500;
		border: 2px solid #fbd85d;
		background-color: #ffeaa7;
		border-radius: 10px;
		padding: 10px 18px;
		text-align: center;
	}

	.chat {
		border: 2px solid #fbd85d;
		border-radius: 10px;
		background-color: #ffeaa763;
		margin-top: 15px;
		height: 80%;

		.chat_log {
			margin: 10px 0 10px 0;
			height: 548px;
			overflow-y: auto;

			.message {
				background-color: #74b9ff;
				color: white;
				padding: 10px 10px;
				border-radius: 10px;
				margin: 10px 10px 0px 10px;
			}
		}

		.chat_input {
			background-color: #fff;
			height: 20%;
			width: 100%;
			border-radius: 10px;

			form {
				position: relative;
				z-index: 101;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;

				textarea {
					height: 90%;
					border: none;
					outline: none;
					box-shadow: none;
					vertical-align: top;
					padding: 10px 10px;
					overflow: hidden;
					resize: none;
				}

				button {
					width: 80px;
					height: 40px;
					border: none;
					border-radius: 10px;
					margin-left: auto;
					cursor: pointer;
				}
			}
		}
	}
`;
