import React from 'react';
import { SChatInDetail } from './sChatInDetail';

const ChatInDetail: React.FC = () => {
	return (
		<SChatInDetail>
			<div className='writer'>
				<span>채팅창</span>
			</div>
			<div className='chat'>
				<div className='chat_log'></div>
				<div className='chat_input'>
					<form>
						<textarea placeholder='메세지를 입력해주세요.' />
						<button>전송</button>
					</form>
				</div>
			</div>
		</SChatInDetail>
	);
};

export default ChatInDetail;
