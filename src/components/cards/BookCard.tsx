import './BookCard.css';

type Props = {
	image: string;
	title: string;
	author: string[];
	publisher?: string;
	link: string;
};

export default function BookCard({
	image,
	title,
	author,
	publisher,
	link,
}: Props) {
	return (
		<div className='bookCard'>
			<img
				className='image'
				src={
					image
						? image
						: 'https://books.google.es/googlebooks/images/no_cover_thumb.gif'
				}
				alt='book image'
			/>
			<div className='bookDetails'>
				<h2 className='title'>{title}</h2>
				<p className='info'>By: {author}</p>
				<p className='info'>Published By: {publisher}</p>
				<button className='bookButton'>
					<a className='link' href={link}>
						See this Book
					</a>
				</button>
			</div>
		</div>
	);
}
