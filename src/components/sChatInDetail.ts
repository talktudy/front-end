import styled from 'styled-components';

export const SChatInDetail = styled.div`
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
`;
