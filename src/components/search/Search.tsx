import './Search.css';

export default function Search() {
	return (
		<div className='search'>
			<input
				className='searchBar'
				type='search'
				placeholder='Start to type...'
			/>
			<button className='searchButton'>Search</button>
		</div>
	);
}
