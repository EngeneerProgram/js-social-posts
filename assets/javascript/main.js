// ***** MILESTONE 1 *****
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.

const arrayCard = [
    {
        nome : "Phil Mangione",
        foto_autore : "https://unsplash.it/300/300?image=", 
        data : "Tuesday, June 4, 2021",
        testo : "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
        foto : "https://unsplash.it/300/300?image=",
        like : 1920
    },

    {
        nome : "Maria Rimmaudo",
        foto_autore : "https://unsplash.it/300/300?image=", 
        data : "Monday, October 18, 2021",
        testo : "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
        foto : "https://unsplash.it/300/300?image=",
        like : 400
    },

    {
        nome : "Phil Mangione",
        foto_autore : "https://unsplash.it/300/300?image=", 
        data : "Wendsday, January 7, 2021",
        testo : "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo",
        foto : "https://unsplash.it/300/300?image=",
        like : 700
    },


];

arrayCard.forEach(post => {
    console.log(post.nome, post.foto_autore, post.data, post.testo, post.like);
});


//selezioniamo il container in cui mostrare le nostre card

const container = document.querySelector(".container");
console.log(container);

for(let i = 0; i<arrayCard.length; i++){
    container.innerHTML += `
    <div class="card">
        <div class="Profilo">
            <img src"${arrayCard[i].foto_autore}"><img>
            <h1>${arrayCard[i].nome}</h1>
            <h6>${arrayCard[i].data}</h6>
        </div>

        <p>${arrayCard[i].testo}</p>
        <img src"https://unsplash.it/300/300?image=""><img>

        <div class="like">${arrayCard[i].like}</div>
    </div>
    
    `

    
}

