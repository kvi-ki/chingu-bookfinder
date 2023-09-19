import { useState } from 'react';
import './Search.css';

export default function Search() {
	const [search, setSearch] = useState('');

	function handleSearch(e: any) {
		setSearch(e.target.value);
	}

	const getBooks = async () => {
		const books = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=` +
				search +
				`&key=AIzaSyDDWe8e7HlvckQteJSFzSXx0qVNG6t7xqQ`
		);
		const booksList = await books.json();

		console.log(booksList);
	};

	return (
		<div className='search'>
			<input
				className='searchBar'
				type='search'
				placeholder='Start to type...'
				onKeyDown={handleSearch}
			/>
			<button className='searchButton' onClick={getBooks}>
				Search
			</button>
		</div>
	);
}
