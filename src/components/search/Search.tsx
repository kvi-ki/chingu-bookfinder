import { useState } from 'react';
import './Search.css';
import BookCard from '../cards/BookCard';
import { getBooks } from '../../api/books';

interface Book {
	volumeInfo: {
		imageLinks: {
			smallThumbnail: string;
		};
		title: string;
		authors: string[];
		publisher?: string;
		infoLink: string;
	};
}

export default function Search() {
	const [search, setSearch] = useState('');
	const [books, setBooks] = useState<Book[]>([]);

	function handleSearch(event: any) {
		setSearch(event.target.value);
	}

	async function handleCall(search: any) {
		const books = await getBooks(search);
		setBooks(books.data.items);
	}

	console.log(`search ${search}`);

	const booksList = books.map((book) => {
		return (
			<li>
				<BookCard
					image={
						book.volumeInfo.imageLinks
							? book.volumeInfo.imageLinks.smallThumbnail
							: ''
					}
					title={book.volumeInfo.title}
					author={book.volumeInfo.authors}
					publisher={book.volumeInfo.publisher}
					link={book.volumeInfo.infoLink}
				/>
			</li>
		);
	});

	return (
		<div className='container'>
			<div className='search'>
				<input
					className='searchBar'
					type='search'
					placeholder='Start to type...'
					onKeyDown={handleSearch}
				/>
				<button className='searchButton' onClick={() => handleCall(search)}>
					Search
				</button>
			</div>
			<ul className='list'>{booksList}</ul>
		</div>
	);
}
