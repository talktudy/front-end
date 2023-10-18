import styled from 'styled-components';

export const SDetailPage_owner = styled.div`
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
					height: 300px;
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
					.editor {
						width: 100%;
						height: 300px;
						.ql-toolbar.ql-snow {
							border-top: none !important;
							border-radius: 10px;
						}
						.ql-container.ql-snow {
							border: none;
						}
					}
				}
				.edit-button {
					display: flex;
					justify-content: flex-end;
					margin-right: 2%;

					button {
						font-size: 18px;
						background-color: #fde184;
						border: none;
						padding: 10px 25px;
						border-radius: 50px;
						color: #1f1f1f;
					}
					button:hover {
						background-color: #18dcff;
						transition: 0.2s ease-in-out;
						color: #fff;
					}
				}

				.info-applicant {
					margin: 10px 10px 20px;
					border: 1px solid #57606f;
					border-radius: 10px;
					height: 200px;
					background-color: #fff;

					.applicant-form {
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
			}
		}
	}
`;
