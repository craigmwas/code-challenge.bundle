let URL = ("http://localhost:3000/films");
const listHolder = document.getElementById("films");
document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName('film item')[0].remove()
    })
//create fetch function to get the data from the db.json
function fetchMovies(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie);
        });
    });
}
//function to display the titles of the movies as a list
function displayMovie(movie) {
    const list = document.createElement("li");
    list.style.cursor = "cell";
    li.textContent = (movie.title);
    listHolder.appendChild(list);
    addClickEvent();
}
function addClickEvent() {
    let children= listHolder.children
    console.log(children);
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        console.log(child);
        child.addEventListener("click",() => {
            fetch('${URL}/${i+1}')
            .then(response => response.json())
            .then(movie => {
                document.getElementById('buy ticket').textContent = "Buy Ticket";
                setUpMovieDetails(movie);
            }
            );
        });
    }
}

function setUpMovieDetails(movie) {
    const preview = document.getElementById("poster");
    preview.src = "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg";
    const movieTitle = document.getElementById("title");
    movieTitle.textContent = movie.title;
    const runtime = document.getElementById("runtime");
    runtime.textContent = movie.runtime;
    const filmInfo = document.getElementById("film-info");
    filmInfo.textContent = movie.description;
    const showtime = document.getElementById("showtime");
    showtime.textContent = movie.showtime;
    const ticketNum = document.getElementById("ticket-num");
    ticketNum.textContent = movie.capacity - movie.tickets_sold;

}
const btn = document.getElementById("buy-ticket");
btn.addEventListener("click", function(e) {
    let remTickets = document.querySelector('#ticket-num').textContent;
    if (remTickets > 0) {
        document.querySelector('#ticket-num').textContent = remTickets - 1;
    }
    else if(parseInt(remTickets, 10) === 0) {
       btn.textContent = "SOLD OUT";
    }
});



