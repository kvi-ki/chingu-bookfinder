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
			<img className='image' src={image} alt='book image' />
			<div className='info'>
				<h2 className='title'>{title}</h2>
				<p className='author'>{author}</p>
				<p className='publisher'>{publisher}</p>
				<a className='link' href={link} />
			</div>
		</div>
	);
}
