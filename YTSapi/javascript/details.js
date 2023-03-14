const resDiv = document.querySelector("#results");
function getMovies() {
    fetch(`https://yts.mx/api/v2/movie_details.json`)
        .then(response => {
            return response.json(); //returns promise
        }).then(movieData => {
            const movieObj = movieData.data;
            console.log(movieObj);
            let output = '';

            // movieObj.movies.forEach(movieInfo => {
            //     output += `
            //     <div class="movie">
            //         <h2 class="movie-title" title="${movieInfo.title}">${movieInfo.title_english}</h2>
            //         <img src="${movieInfo.medium_cover_image}" alt="${movieInfo.title}">
            //         <input type="hidden" value="${movieInfo.id}">
            //         </div>
            //         <button id="open" class="open">Details</button>
            //         <div class="movie">
            //         </div>
            // `;
            // });
            // resDiv.innerHTML = output;

        })
        .catch(error => {
            console.log("There is an error" + error);
        });
}

window.onload = () => {
    getMovies();
}