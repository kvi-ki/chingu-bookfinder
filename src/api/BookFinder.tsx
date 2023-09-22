import axios from 'axios';

export async function findBooks(search: string) {
	console.log(`I am looking for: ${search}`);
	const books = await axios.get(
		`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDDWe8e7HlvckQteJSFzSXx0qVNG6t7xqQ`
	);

	return books;
}
