import React from 'react';
import styled from 'styled-components';

const DetailPage_ap = () => {
	return (
		<SDetailPage_ap>
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
					<div className='container-chat'>
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
					</div>
				</div>
			</div>
		</SDetailPage_ap>
	);
};

export default DetailPage_ap;

const SDetailPage_ap = styled.div`
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
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #1f1f1f;
				font-size: 18.5px;
				font-weight: 500;
				border: 2px solid #fbd85d;
				background-color: #ffeaa7;
				border-radius: 10px;
				padding: 10px 18px;
			}

			.info {
				border: 2px solid #fbd85d;
				border-radius: 10px;
				margin-top: 15px;
				background-color: #ffeaa763;

				h5 {
					margin: 22px 3% 10px;
					font-weight: 600;
					font-size: 20px;
				}

				.info-detail {
					border: 1px solid #57606f;
					border-radius: 10px;
					margin: 10px 10px 20px;
					height: 100px;
					display: flex;
					justify-content: flex-start;
					gap: 5%;
					background-color: #fff;

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
					height: 250px;
					background-color: #fff;
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

				.apply_form {
					margin: 10px 10px 20px;
					border: 1px solid #57606f;
					border-radius: 10px;
					height: 200px;
					background-color: #fff;

					.writing_space {
						display: flex;
					}

					.applicant {
						display: flex;
						margin: 10px 10px;
						border: 1px solid #57606f;
						border-radius: 10px;
						padding: 10px 10px;
						width: 66%;

						.profile-img {
							background-color: #00ddff;
							width: 35px;
							height: 35px;
							border-radius: 50px;
						}
						.name {
							display: flex;
							justify-content: space-between;
							align-items: center;
							gap: 100px;
							margin-left: 10%;

							span:nth-child(2) {
								color: grey;
								font-size: 14px;
							}
						}
					}

					.accept {
						display: flex;
						justify-content: center;
						margin: 10px 5px;
						width: 30%;

						div:nth-child(1) {
							border-radius: 10px;
							width: 45%;
							text-align: center;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: #00b894;
							color: #fff;
						}

						div:nth-child(2) {
							border-radius: 10px;
							width: 45%;
							text-align: center;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: #ff7675;
							color: #fff;
						}
					}
				}

				.container-btn {
					display: flex;
					justify-content: flex-end;
					gap: 2%;
					margin-right: 2%;
					margin-bottom: 2%;

					button:nth-child(1) {
						font-size: 18px;
						background-color: #ffeaa7;
						border: none;
						padding: 10px 25px;
						border-radius: 50px;
						cursor: pointer;
						/* &:hover {
							background-color: #fff200;
						} */
					}

					button:nth-child(2) {
						font-size: 18px;
						background-color: #18dcff;
						border: none;
						padding: 10px 25px;
						border-radius: 50px;
						color: #fff;
						cursor: pointer;
						/* &:hover {
							background-color: #fff200;
						} */
					}

					/* button:hover {
						transition: 0.2s ease-in-out;
						color: #1f1f1f;
					} */
				}
			}
		}

		.container-chat {
			width: 45%;
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
					height: 80%;
					width: 100%;
				}

				.chat_input {
					background-color: #fff;
					height: 20%;
					width: 100%;
					border-radius: 10px;

					form {
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
		}
	}
`;
