
async function getMovie() {
    const movieName = document.querySelector('[data-pesquisa]').value;


    let data = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movieName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4ad4189706msh19536088b89763ap1e5f3fjsn721663fd8e3b",
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })

    data = await data.json()

    createMovieList(data.d[0].l, data.d[0].i.imageUrl)

    /*.then(function (response) {
        return response.json();
    })
    
    .then(function (data) {
        createMovieList(data.d[0].l, data.d[0].i.imageUrl)
    })*/


}

function createMovieList(movieName, url) {
    const ul = document.querySelector('.filmes-list')
    const li = document.createElement('li')
    ul.appendChild(li)

    const img = document.createElement('img')
    li.appendChild(img);

    const p = document.createElement('p');
    p.innerHTML = movieName;
    p.classList.add('filme')
    li.appendChild(p);

    img.setAttribute('src', `${url}`);
    clearInput();

}

function clearInput() {
    document.querySelector('[data-pesquisa]').value = '';;
}
