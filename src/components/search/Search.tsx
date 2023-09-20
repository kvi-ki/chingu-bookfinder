import { useState } from 'react';
import './Search.css';
import BookFinder from '../../api/BookFinder';

export default function Search() {
	const [search, setSearch] = useState('');

	function handleSearch(event: any) {
		setSearch(event.target.value);
		BookFinder(event);
	}

	return (
		<div className='search'>
			<input
				className='searchBar'
				type='search'
				placeholder='Start to type...'
				onKeyDown={handleSearch}
			/>
			<button className='searchButton' onClick={() => BookFinder(search)}>
				Search
			</button>
		</div>
	);
}
