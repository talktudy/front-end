import { BsPencil } from 'react-icons/bs';
import ContentWrapper from '@components/ContentWrapper';

const RegisterPage = () => {
	return (
		<ContentWrapper>
			<div>
				<BsPencil />
				<h2>팀원 모집 폼</h2>
				<span>팀원을 모집하기 위해 필요한 정보이니 꼼꼼하게 입력해주세요.</span>
			</div>
			<form>
				<div>
					<label htmlFor='type'>모집 구분</label>
					<button type='button'>선택해 주세요</button>
					<ul>
						<li>스터디</li>
						<li>채팅</li>
					</ul>
					<input type='hidden' name='type' value='' />
				</div>
				<div>
					<label htmlFor='position'>모집 포지션</label>
					<button type='button'>선택해 주세요</button>
					<ul>
						<li>선택안함</li>
						<li>프론트엔드</li>
						<li>백엔드</li>
						<li>풀스택</li>
						<li>안드로이드</li>
						<li>IOS</li>
						<li>PM</li>
						<li>디자이너</li>
					</ul>
					<input type='hidden' name='position' value='' />
				</div>
				<div>
					<label htmlFor='endData'>모집 마감일</label>
					<button type='button'>모집 마감일</button>
					{/* 달력UI */}
					<input type='hidden' name='endData' value='' />
				</div>
				<div>
					<label htmlFor='team'>모집 인원</label>
					<button type='button'>모집 마감일</button>
					<ul>
						<li>1명</li>
						<li>2명</li>
						<li>3명</li>
						<li>4명</li>
						<li>5명</li>
						<li>6명</li>
						<li>7명</li>
						<li>8명</li>
						<li>9명</li>
					</ul>
					<input type='hidden' name='team' value='' />
				</div>
				<div>
					<label htmlFor='title'>제목</label>
					<input type='text' name='title' value='' placeholder='제목을 입력해 주세요.' />
				</div>
				<div>
					{/* 에디터 */}
					<label htmlFor='tags'></label>
					<input type='text' name='tags' value='' placeholder='#태그입력' />
				</div>
			</form>
		</ContentWrapper>
	);
};

export default RegisterPage;
