import React from 'react';
import styled from 'styled-components';

const DetailPage = () => {
	return (
		<SDetailPage>
			<div className='container'>
				<div className='container-title'>
					<div className='status'>모집중</div>
					<span className='title'>타입스크립트 스터디 인원 모집</span>
				</div>
				<div className='container-info'>
					<div className='writer'>
						<span>작성자: 염승준</span>
					</div>
				</div>
				<div className='container-chat'></div>
			</div>
		</SDetailPage>
	);
};

export default DetailPage;

const SDetailPage = styled.div`
    border: 1px solid green;
    
    .container-title {
        margin-top: 30px;
        display: flex;
        .status {
            margin-left: 30px;
            font-size: 20px;
            font-weight: 500;
            padding: 5px 12px;
            box-sizing: border-box;
            border-radius: 15px;
            background-color: #65e565;
            display: flex;
            align-items: center;
            text-align: center;
        }
    
        .title {
            margin-left: 20px;
            font-size: 30px;
            font-weight: 700;
        }
    }

    .container-info {
        border: 1px solid black;
        width: 50%;
    }
`;
