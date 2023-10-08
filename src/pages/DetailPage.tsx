import React from 'react';
import styled from 'styled-components';

const DetailPage = () => {
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
							<h5>신청자 현황</h5>
							<div className='info-applicant'></div>
						</div>
					</div>
					<div className='container-chat'>
						<div className='writer'>
							<span>채팅창</span>
						</div>
						<div className='chat'></div>
					</div>
				</div>
			</div>
		</SDetailPage>
	);
};

export default DetailPage;

const SDetailPage = styled.div`
    
    .container-title {
        margin-top: 30px;
        display: flex;
        .status {
            margin-left: 3%;
            font-size: 20px;
            font-weight: 500;
            padding: 7px 12px;
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
            display: flex;
            align-items: center;
            text-align: center;
        }
    }

    .container-below {
        display: flex;
        justify-content: center;
        gap: 3%;


        .container-info {
            /* border: 1px solid #00b894; */
            width: 45%;
            margin-top: 30px;
    
            .writer {
                margin: 0 5px;
                display:flex;
                justify-content: space-between;
                align-items: center;
                color: #1f1f1f;
                font-size: 20px;
                font-weight: 500;
            }

            .info {
                border: 2px solid #FBD85D;
                border-radius: 10px;
                margin-top: 15px;

                h5 {
                    margin: 22px 3% 10px;
                    font-weight: 600;
                    font-size: 20px;
                }

                .info-detail {
                    border: 1px solid #57606f;
                    border-radius: 10px;
                    margin: 10px 10px 20px;
                    height:100px;
                    display: flex;
                    justify-content: flex-start;
                    gap:5%;

                    .details_top {
                        margin: 10px 5%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: start;
                    }

                    .details_down {
                        margin: 10px 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                    }
                }

                .info-intro {
                    margin: 10px 10px 20px;
                    border: 1px solid #57606f;
                    border-radius: 10px;
                    height: 300px;
                    /* textarea {
                        border:none;
                        border-radius: 10px;
                        resize: none;
                        width: 100%;
                        padding: 10px 10px;
                        box-sizing: border-box;
                    }
                    textarea:focus {
                        outline:0;
                    } */
                }

                .info-applicant {
                    margin: 10px 10px 20px;
                    border: 1px solid #57606f;
                    border-radius: 10px;
                    height: 200px;
                }
            }
        }
    
        .container-chat {
            width: 45%;
            margin-top: 30px;

            .writer {
                margin: 0 5px;
                display:flex;
                justify-content: space-between;
                align-items: center;
                color: #1f1f1f;
                font-size: 20px;
                font-weight: 500;
            }

            .chat {
                border: 2px solid #FBD85D;
                border-radius: 10px;
                margin-top: 15px;
                height:100vh;
                
            }
        }
    }
`;
