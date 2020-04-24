const api_url = "/movies";

const submit = document.getElementById('submit');
submit.addEventListener('click', async event => {
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value;
    const director = document.getElementById('director').value;
    const stars = document.getElementById('stars').value;
    const rating = document.getElementById('rating').value;
    const price = document.getElementById('price').value;

    const data = { title: title, year: year, duration: duration, genre: genre, director: director, stars: stars, rating: rating, price: price };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(api_url, options);
    const json = await response.json();
    console.log(json);
});

const deleteMovie = document.getElementById('delete');
deleteMovie.addEventListener('click', async event => {
    const id = document.getElementById('movieid').value;
    console.log(id);
    const options = {
        method: 'DELETE',
    };

    
    const response = await fetch('/movies/'+id, {method: "delete"});
    const json = await response.json();
    console.log(json);
})

async function buildTable() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    if (data.length > 0) {
        var temp = "";

        //------star for loop
        data.forEach((movie) => {
            temp += '<tr>';
            temp += '<td><input name="item0" type="checkbox" /></td>';
            temp += '<td>' + movie._id + '</td>';
            temp += '<td>' + movie.title + '</td>';
            temp += '<td>' + movie.year + '</td>';
            temp += '<td>' + movie.duration + '</td>';
            temp += '<td>' + movie.genre + '</td>';
            temp += '<td>' + movie.director + '</td>';
            temp += '<td>' + movie.stars + '</td>';
            temp += '<td>' + movie.rating + '</td>';
            temp += '<td>' + movie.price + '</td></tr>';
        });

        document.getElementById("data").innerHTML = temp;
    }
}

buildTable();
