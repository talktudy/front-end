import { useMemo, useState } from 'react';
import { updateImage } from '@/api/api';
import { useRef } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

interface Editor {
	html: ReactQuill.Value;
	setHtml: React.Dispatch<React.SetStateAction<ReactQuill.Value>>;
}

const Editor = ({ html, setHtml }: Editor) => {
	const [isImageLoading, setIsImageLoading] = useState(false);
	const quillRef = useRef<ReactQuill | null>(null);

	const handleImage = () => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();

		input.addEventListener('change', async () => {
			const file = input.files ? input.files[0] : null;
			if (!file) return;

			setIsImageLoading(true);
			try {
				const res = await updateImage({ file: file });
				const imgUrl = res.message;
				const editor = quillRef.current?.getEditor();
				const range = editor?.getSelection();
				if (range) {
					editor?.insertEmbed(range.index, 'image', imgUrl);
					setIsImageLoading(false);
				}
			} catch (error) {
				console.log(error);
				setIsImageLoading(false);
			}
		});
	};

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, 5, 6, false] }],
					[{ font: [] }],
					[{ align: [] }],
					['bold', 'italic', 'underline', 'strike', 'blockquote'],
					[{ list: 'ordered' }, { list: 'bullet' }, 'link'],
					[
						{
							color: [
								'#000000',
								'#e60000',
								'#ff9900',
								'#ffff00',
								'#008a00',
								'#0066cc',
								'#9933ff',
								'#ffffff',
								'#facccc',
								'#ffebcc',
								'#ffffcc',
								'#cce8cc',
								'#cce0f5',
								'#ebd6ff',
								'#bbbbbb',
								'#f06666',
								'#ffc266',
								'#ffff66',
								'#66b966',
								'#66a3e0',
								'#c285ff',
								'#888888',
								'#a10000',
								'#b26b00',
								'#b2b200',
								'#006100',
								'#0047b2',
								'#6b24b2',
								'#444444',
								'#5c0000',
								'#663d00',
								'#666600',
								'#003700',
								'#002966',
								'#3d1466',
								'custom-color',
							],
						},
						{ background: [] },
					],
					['image'],
					['clean'],
				],
				handlers: { image: handleImage },
			},
		}),
		[]
	);

	return (
		<>
			{isImageLoading && (
				<LoadingDimmed>
					<Loadingbar />
					<ImageLoadingText>이미지를 업로드 중입니다, 잠시만 기다려 주세요.</ImageLoadingText>
				</LoadingDimmed>
			)}
			<ReactQuill
				theme='snow'
				ref={quillRef}
				onChange={setHtml}
				value={html}
				className='editor'
				modules={modules}
			/>
		</>
	);
};

export default Editor;

const LoadingDimmed = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #000;
	z-index: 8888;
	opacity: 0.8;
`;

const Loadingbar = styled.span`
	display: inline-block;
	width: 48px;
	height: 48px;
	margin-bottom: 20px;
	border: 5px solid #fff;
	border-bottom-color: transparent;
	border-radius: 50%;
	animation: rotation 1s linear infinite;
	box-sizing: border-box;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const ImageLoadingText = styled.p`
	color: #fff;
	z-index: 9999;
`;
