export default async function BookFinder(search: string) {
	const books = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=` +
			search +
			`&key=AIzaSyDDWe8e7HlvckQteJSFzSXx0qVNG6t7xqQ`
	);
	const booksList = await books.json();

	console.log(booksList);
}
