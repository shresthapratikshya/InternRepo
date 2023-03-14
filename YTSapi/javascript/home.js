const resDiv = document.querySelector("#results");
const movieDiv = document.querySelector("#movieDetails");
function getMovies() {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
        .then(response => {
            return response.json();
        }).then(movieData => {
            const movieObj = movieData.data;
            //console.log(movieObj);
            let output = '';

            movieObj.movies.forEach(movieInfo => {
                output += `
                <div class="movie">
                    <h2 class="movie-title" title="${movieInfo.title}">${movieInfo.title_english}</h2>
                    <img src="${movieInfo.medium_cover_image}" alt="${movieInfo.title}">
                    <input type="hidden" value="${movieInfo.id}">
                    <button id="open" class="open" onclick="sendId(${movieInfo.id})">Details</button>
                    </div>
                    <div class="movie">
                    </div>
            `;
            });
            resDiv.innerHTML = output;

        })
        .catch(error => {
            console.log("There is an error" + error);
        });
}

function sendId(movieId) {
    console.log(movieId);
    // fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
    //     .then(response => {
    //         return response.json;
    //     }).then(movieDetails => {
    //         const data = movieDetails.data;
    //         let output = '';
    //         data.movies.forEach(detailInfo => {
    //             if (movieId == detailInfo.id) {
    //                 output += `
    //                 <div class="movieData">
    //                 <img src="${detailInfo.large_cover_image}" alt="${detailInfo.title}">
    //                 <h2 class="movie-title" title="${detailInfo.title}">${detailInfo.title_english}</h2>
    //                 <input type="hidden" value="${detailInfo.id}">
    //                 </div>
    //                 <div class="movie">
    //                 </div>
    //                 `
    //                 navigateToDetails();
    //             } else {
    //                 console.log("Couldnot match the id");
    //             }
    //         });
    //         movieDiv.innerHTML = output;
    //     })
    //     .catch(error => {
    //         console.log("There is an error in identifying id" + error);
    //     });

}

function navigateToDetails() {
    window.location.href = "../details.html";
}

window.onload = () => {
    getMovies();
}