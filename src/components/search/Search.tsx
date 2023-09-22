import './Search.css';
import { useState } from 'react';
import BookCard from '../cards/BookCard';
import { getBooks } from '../../api/books';

interface Book {
	id: string;
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
		if (event.key === 'Enter') {
			handleBooks(search);
		}
	}

	async function handleBooks(search: any) {
		const books = await getBooks(search);
		setBooks(books.data.items);
	}

	return (
		<div className='container'>
			<div className='search'>
				<input
					className='searchBar'
					type='search'
					placeholder='What are you looking for?'
					onKeyUp={handleSearch}
				/>
				<button className='searchButton' onClick={() => handleBooks(search)}>
					Search
				</button>
			</div>
			<ul className='list'>
				{books.map((book) => {
					return (
						<li key={book.id}>
							<BookCard
								image={book.volumeInfo.imageLinks?.smallThumbnail}
								title={book.volumeInfo.title}
								author={book.volumeInfo.authors}
								publisher={
									book.volumeInfo.publisher
										? book.volumeInfo.publisher
										: 'Unknown'
								}
								link={book.volumeInfo.infoLink}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
