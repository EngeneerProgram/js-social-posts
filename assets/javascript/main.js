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
        foto_autore : "https://picsum.photos/200/300",
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
    console.log(post.nome, post.foto_autore, post.data, post.testo, post.like,post.foto);
});


//selezioniamo il container in cui mostrare le nostre card
//milestone 2 stampa a schermo
const container = document.querySelector(".container");
console.log(container);

for(let i = 0; i<arrayCard.length; i++){
    container.innerHTML += `
    <div class="card">
        <div class="Profilo">
            <img class="rounded" src = "${arrayCard[i].foto_autore}">
            <div class="info_utente">
                <h1 class="nome_utente">${arrayCard[i].nome}</h1>
                <h6>${arrayCard[i].data}</h6>
            </div>

        </div>

        <p class="testo">${arrayCard[i].testo}</p>
        <img class="post_img" src = "https://unsplash.it/300/300?image="><img>

        <div class="like">
         <h4 class="color_text no-like"><i class="fa-solid fa-thumbs-up change_background"></i>  Mi Piace</h4>
            ${"Piace a " + arrayCard[i].like + " " + "persone"}
        </div>
    </div>
    
    `

    
}



const color_like = document.querySelectorAll(".color_text");
for(let i = 0; i<color_like.length; i++){
    color_like[i].addEventListener("click",function(){
        color_like[i].style.color = "rgb(44, 44, 230)";
        
       
        
    })
    

   
        
    
}

 const delete_like = document.querySelectorAll(".no-like");
 for(let i = 0; i<delete_like.length; i++){
     delete_like[i].removeEventListener("click", function(){
        delete_like[i].remove();
     })
 }



