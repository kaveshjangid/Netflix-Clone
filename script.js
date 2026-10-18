const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const movies = [

    {
        title: "Inception",
        year: "2010",
        rating: "8.8",
        genre: "Sci-Fi",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        description:
            "A skilled thief who steals secrets through dream-sharing technology is given a chance to erase his past by planting an idea into the mind of a target."
    },

    {
        title: "The Dark Knight",
        year: "2008",
        rating: "9.0",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description:
            "Batman faces a criminal mastermind who plunges Gotham into chaos and forces the city to confront its darkest fears."
    },

    {
        title: "Interstellar",
        year: "2014",
        rating: "8.7",
        genre: "Sci-Fi",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description:
            "A group of explorers travel through a mysterious wormhole in search of a new home for humanity."
    },

    {
        title: "Avengers: Endgame",
        year: "2019",
        rating: "8.4",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description:
            "The Avengers assemble once more to reverse the devastating events that changed the universe."
    },

    {
        title: "Spider-Man: No Way Home",
        year: "2021",
        rating: "8.2",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description:
            "Spider-Man's secret identity is revealed, causing his world to turn upside down as unexpected visitors arrive."
    },

    {
        title: "Dune: Part Two",
        year: "2024",
        rating: "8.6",
        genre: "Adventure",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        description:
            "Paul Atreides joins Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
    },

    {
        title: "Oppenheimer",
        year: "2023",
        rating: "8.6",
        genre: "Drama",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        description:
            "The story of J. Robert Oppenheimer and the creation of the atomic bomb."
    },

    {
        title: "Barbie",
        year: "2023",
        rating: "7.0",
        genre: "Comedy",
        poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        description:
            "Barbie leaves her perfect world and discovers the complicated reality of the human world."
    },

    {
        title: "The Matrix",
        year: "1999",
        rating: "8.7",
        genre: "Sci-Fi",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description:
            "A computer hacker discovers that reality is not what it seems and joins a rebellion against powerful machines."
    },

    {
        title: "John Wick",
        year: "2014",
        rating: "7.4",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        description:
            "An infamous assassin returns to the criminal underworld after a devastating personal loss."
    },

    {
        title: "Top Gun: Maverick",
        year: "2022",
        rating: "8.2",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        description:
            "A legendary fighter pilot trains a new generation of elite aviators for a dangerous mission."
    },

    {
        title: "Black Panther",
        year: "2018",
        rating: "7.3",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description:
            "T'Challa returns home to the isolated African nation of Wakanda and discovers a challenge to his throne."
    },

    {
        title: "The Batman",
        year: "2022",
        rating: "7.7",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        description:
            "Batman investigates a series of brutal crimes while uncovering corruption within Gotham City."
    },

    {
        title: "Guardians of the Galaxy",
        year: "2014",
        rating: "8.0",
        genre: "Adventure",
        poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
        description:
            "A group of unlikely heroes joins forces to protect the galaxy from a powerful enemy."
    },

    {
        title: "Deadpool",
        year: "2016",
        rating: "7.6",
        genre: "Comedy",
        poster: "https://image.tmdb.org/t/p/w500/zq8Cl3PNIDGU3iWNRoc5nEZ6pCe.jpg",
        description:
            "A wisecracking antihero hunts down the man responsible for transforming his life."
    },

    {
        title: "The Conjuring",
        year: "2013",
        rating: "7.5",
        genre: "Horror",
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        description:
            "Paranormal investigators help a family terrorized by a dark presence in their farmhouse."
    },

    {
        title: "It",
        year: "2017",
        rating: "7.3",
        genre: "Horror",
        poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5gI6U9fH0b3C.jpg",
        description:
            "A group of children confronts a terrifying entity that takes the form of their worst fears."
    },

    {
        title: "The Hangover",
        year: "2009",
        rating: "7.7",
        genre: "Comedy",
        poster: "https://image.tmdb.org/t/p/w500/A0tNfL5d4x6m7lK9jP5F8d7n4eH.jpg",
        description:
            "Three friends wake up after a wild bachelor party with no memory of what happened."
    },

    {
        title: "Mad Max: Fury Road",
        year: "2015",
        rating: "8.1",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
        description:
            "In a ruined world, a group of rebels attempts to escape a tyrannical ruler."
    },

    {
        title: "Mission: Impossible",
        year: "2023",
        rating: "7.7",
        genre: "Action",
        poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        description:
            "An elite agent faces an enemy unlike anything he has encountered before."
    }

];


/* ==========================================
   ROW CONFIGURATION
========================================== */

const rows = {

    trendingRow: [
        "Spider-Man: No Way Home",
        "Inception",
        "Dune: Part Two",
        "John Wick",
        "Oppenheimer",
        "The Batman",
        "Interstellar"
    ],

    popularRow: [
        "The Dark Knight",
        "Avengers: Endgame",
        "Top Gun: Maverick",
        "Black Panther",
        "The Matrix",
        "Guardians of the Galaxy",
        "Mission: Impossible"
    ],

    topRow: [
        "Inception",
        "Dune: Part Two",
        "Spider-Man: No Way Home",
        "Oppenheimer",
        "The Batman",
        "John Wick"
    ],

    actionRow: [
        "The Dark Knight",
        "John Wick",
        "Mad Max: Fury Road",
        "The Batman",
        "Mission: Impossible",
        "Avengers: Endgame",
        "Top Gun: Maverick"
    ],

    comedyRow: [
        "Barbie",
        "Deadpool",
        "The Hangover",
        "Guardians of the Galaxy",
        "Barbie",
        "Deadpool"
    ],

    horrorRow: [
        "The Conjuring",
        "It",
        "The Conjuring",
        "It",
        "The Conjuring"
    ]

};


/* ==========================================
   GET MOVIE
========================================== */

function getMovie(title) {

    return movies.find(movie => movie.title === title);

}


/* ==========================================
   CREATE MOVIE CARD
========================================== */

function createMovieCard(movie, number = null) {

    const card = document.createElement("div");

    card.className = "movie-card";

    card.innerHTML = `

        <img
            src="${movie.poster}"
            alt="${movie.title}"
            loading="lazy"
            onerror="this.src='https://placehold.co/300x450/141414/ffffff?text=Movie'"
        >

        ${
            number !== null
            ?
            `<div class="top-number">${number}</div>`
            :
            ""
        }

        <div class="movie-overlay">

            <h3>${movie.title}</h3>

            <div class="movie-meta">
                <span>${movie.year}</span>
                <span>${movie.genre}</span>
                <span>⭐ ${movie.rating}</span>
            </div>

            <div class="card-buttons">

                <button
                    class="card-btn"
                    onclick="openMovie(event, '${movie.title.replace(/'/g, "\\'")}')"
                >
                    <i class="fa-solid fa-play"></i>
                </button>

                <button
                    class="card-btn dark"
                    onclick="addToList(event, '${movie.title.replace(/'/g, "\\'")}')"
                >
                    <i class="fa-solid fa-plus"></i>
                </button>

            </div>

        </div>
    `;

    card.addEventListener("click", function(event) {

        if (
            event.target.closest(".card-btn")
        ) {
            return;
        }

        openMovie(event, movie.title);

    });

    return card;

}


/* ==========================================
   RENDER ROW
========================================== */

function renderRow(rowId, movieTitles, isTop = false) {

    const row = document.getElementById(rowId);

    if (!row) return;

    row.innerHTML = "";

    movieTitles.forEach((title, index) => {

        const movie = getMovie(title);

        if (!movie) return;

        const card = createMovieCard(
            movie,
            isTop ? index + 1 : null
        );

        row.appendChild(card);

    });

}


/* ==========================================
   RENDER ALL ROWS
========================================== */

function renderAllRows() {

    renderRow(
        "trendingRow",
        rows.trendingRow
    );

    renderRow(
        "popularRow",
        rows.popularRow
    );

    renderRow(
        "topRow",
        rows.topRow,
        true
    );

    renderRow(
        "actionRow",
        rows.actionRow
    );

    renderRow(
        "comedyRow",
        rows.comedyRow
    );

    renderRow(
        "horrorRow",
        rows.horrorRow
    );

}

renderAllRows();


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ==========================================
   SEARCH BUTTON
========================================== */

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchGrid = document.getElementById("searchGrid");
const resultCount = document.getElementById("resultCount");

searchBtn.addEventListener("click", () => {

    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {

        searchInput.focus();

    } else {

        searchInput.value = "";

        searchResults.classList.remove("active");

    }

});


/* ==========================================
   SEARCH FUNCTION
========================================== */

searchInput.addEventListener("input", function() {

    const query = this.value
        .toLowerCase()
        .trim();

    if (!query) {

        searchResults.classList.remove("active");

        return;

    }

    const results = movies.filter(movie =>

        movie.title
            .toLowerCase()
            .includes(query)

        ||

        movie.genre
            .toLowerCase()
            .includes(query)

    );

    searchResults.classList.add("active");

    searchGrid.innerHTML = "";

    resultCount.textContent =
        `${results.length} result${results.length !== 1 ? "s" : ""}`;

    results.forEach(movie => {

        const card = createMovieCard(movie);

        searchGrid.appendChild(card);

    });

    searchResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* ==========================================
   MOVIE MODAL
========================================== */

const modal = document.getElementById("movieModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalYear =
    document.getElementById("modalYear");

const modalRating =
    document.getElementById("modalRating");

const modalDescription =
    document.getElementById("modalDescription");

const closeModal =
    document.getElementById("closeModal");


function openMovie(event, title) {

    if (event) {
        event.stopPropagation();
    }

    const movie = getMovie(title);

    if (!movie) return;

    modalImage.src = movie.poster;

    modalTitle.textContent = movie.title;

    modalYear.textContent = movie.year;

    modalRating.textContent =
        `⭐ ${movie.rating}`;

    modalDescription.textContent =
        movie.description;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function openHeroModal() {

    openMovie(null, "Stranger Things");

}


/* ==========================================
   CLOSE MODAL
========================================== */

closeModal.addEventListener("click", closeMovieModal);

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeMovieModal();

    }

});


function closeMovieModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMovieModal();

    }

});


/* ==========================================
   MY LIST
========================================== */

function addToList(event, title) {

    event.stopPropagation();

    let myList =
        JSON.parse(
            localStorage.getItem("myNetflixList")
        ) || [];

    if (!myList.includes(title)) {

        myList.push(title);

        localStorage.setItem(
            "myNetflixList",
            JSON.stringify(myList)
        );

        alert(`${title} added to My List`);

    } else {

        alert(`${title} is already in My List`);

    }

}


/* ==========================================
   HERO DOTS
========================================== */

const dots =
    document.querySelectorAll(".dot");

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        dots.forEach(d =>
            d.classList.remove("active")
        );

        dot.classList.add("active");

    });

});


/* ==========================================
   HORIZONTAL DRAG SCROLL
========================================== */

document.querySelectorAll(".movie-row").forEach(row => {

    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener("mousedown", e => {

        isDown = true;

        row.style.cursor = "grabbing";

        startX = e.pageX - row.offsetLeft;

        scrollLeft = row.scrollLeft;

    });

    row.addEventListener("mouseleave", () => {

        isDown = false;

        row.style.cursor = "grab";

    });

    row.addEventListener("mouseup", () => {

        isDown = false;

        row.style.cursor = "grab";

    });

    row.addEventListener("mousemove", e => {

        if (!isDown) return;

        e.preventDefault();

        const x =
            e.pageX - row.offsetLeft;

        const walk =
            (x - startX) * 2;

        row.scrollLeft =
            scrollLeft - walk;

    });

});


/* ==========================================
   PROFILE CLICK
========================================== */

document.querySelector(".profile")
    .addEventListener("click", () => {

        alert(
            "Profile menu coming soon!"
        );

    });


/* ==========================================
   HERO ARROWS
========================================== */

document.querySelector(".hero-arrow.right")
    .addEventListener("click", () => {

        const active =
            document.querySelector(".dot.active");

        let index =
            Array.from(dots).indexOf(active);

        index =
            (index + 1) % dots.length;

        dots.forEach(d =>
            d.classList.remove("active")
        );

        dots[index].classList.add("active");

    });


document.querySelector(".hero-arrow.left")
    .addEventListener("click", () => {

        const active =
            document.querySelector(".dot.active");

        let index =
            Array.from(dots).indexOf(active);

        index =
            (index - 1 + dots.length)
            % dots.length;

        dots.forEach(d =>
            d.classList.remove("active")
        );

        dots[index].classList.add("active");

    });