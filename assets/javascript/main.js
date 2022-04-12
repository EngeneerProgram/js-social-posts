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
         <h4> <img class="foto_like" src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD6+vonJyczMzNfX1+Ojo7i4uKsrKzV1dW6urr4+Pjs7OzR0dHy8vLCwsI+Pj52dnbIyMh/f3+FhYVVVVWwsLBpaWk4ODibm5suLi6hoaFNTU3b29vMzMwRERFtbW0YGBhaWlpEREQLCwseHh6VlZWMjIz089UNAAAKT0lEQVR4nN1daXuqPBAtLlURBcWtai2u/f//8FXvq82ZLERZwuR8uk/B6xwDmX3y8eEC48Wkcwr2q/msvxs7kaBajLNAxOrScy1RyZgGEjp910KViYVM8IavlmvBysJOTfCK0LVo5WCoJRgE3aFr6cpAamAYBB5sOZGRYBBMXQtYGJ85DIPYtYRFkUcwCHauRSyG73yGQeRayEL4smD441rIQjiIVJbpfK+iOHEtZRGcRSa3P0TxQaY4ci3m+xiLPLaPP/5ShiunQhZCT+SRPv8cHQlFvioDbNKNcGGGDDvOJCyKWKSxEK+QJ5XtmxiKLNCVWALDpSMBC8PAsIWLyNVZNDDEa2z3mtjA8GMtXkyVn28+IEKzIBf74sW2E/mKYyCS2JCLYA4ETGOM4P/O6FXQ+0z1BSxTl169iFeZhhdBJST0Krylny7kKw6w2qTNBKzWrH7pygBE8+fSZfHqVvHx5gPtFrqXIkOexjdoPIU+OLNn2BEJHuTrolXDUuVjoE1hebJnOAGGihvEp3Rdu3jFgfvMr+IO7jsN7jOqHIx4XbIHGAC8o6PiBki8KTaipmMES6jKhsJOxDAsjIEY1R3gH1/qlq8wMHEoeU43QFKD+sfNB7hG6lwvaBN+/iEQVJvVYPKwy7FZRNKwhqFuAQtjJUq/V94CW6lKmzQaEILS7JNgEbCLJnaBoTqOBuqEW/UQqopMfRPcw62wBpNnA+U9EKXhttGgV6GxqTfiPdysUhBe94ptxXvkGE6zAQQ1DyBqw+96BSwK1PZfNjfVK2BhgDUWaCosIZSa1SlecWDRs06V27yqTUUCwmssavwZeKXW0LeXEk7/AzwnZkbpHBiqtT15SHnpCgwD61YHF5qXyYZLqCtyBrOOV1kbLqFW9h/xLo3GbCjQbdJpAbS6WT2kuITa6l8wXNURgKYCl1BbfQBWtzLS2FTgEmoXB61uVnFErHDWLiEaNHUKWBSk90B7H+gKVoWXqAv1NUCQleIUzsc+vJP2Pixo4xTsRr9Qv4SQc+LUT4Jeu0Fy6PbiFAqG7hHT6wXakFFxMKbtTTqA6WtIKtMNSwhG6bk+CYsCu2FN9T/wvvLRhugtGN8u2Gj4uPewe5iLY8C0Y2OUgorTR2fugD2XTZQNfHbzy8UzuU1a0YwaAHKLct1wM0F8ClWRnubm3Eqo1hWlyfk+MMqd06UFr6wyCDXsDcLNJV1uj537O3vat9fJsZt+baaOQjqkYTsnCQHqEA2D8WjxmaH9LmG/3Bj3sSpAVGFeiB6GuTx+jdagnya4XZnQXdRq7JEfPe9BgjW8WgbDQX+yCl7Gtr58FRaw5WwzH4ThJM15KE2oaYYP1gZZOLSKmUpvow6bj7gUFtNYekpZ38RP9XNDMPgUZPmfGKtlfRdVx5Pp+BmbsUhnpaRvI6nUtA3Jt1mFJCZKQQugQs1Bp89kVp/SD/9qHEU6A+pkuXuX/Jhe95uKZoZJQ65srSn6bGuw3s4Py2ySzmZp1p1v24Zbq8kiS7u+fT/BXCXlA8nkEk6/x/Lz0IpGi9lW/aEqdlRpAtQLrt5QvR7btD/Kf6UGF5WNV35hXJ9+he1LeMeQ+FtBki5ekDGSZviU3xgmEXz1R/zLcx/T8I29UJoDV7IhHtP//40viD+7h8nlbaurt0YByu3QlE3LXI+iApCRWmX6xbJl6abxbF6ZDNJmryvPqxjo15RYtLKhBJ2FBHE7KC1KJZkyDmOeoHRKKwigs9ZcZo8gqlWWXUPnHjudSQLPU0k/NY1aOG5uFUUpqRucjAV23Z8sqn1TOjnahYu+AYtw9/9GRbYZ50304qagUxetEEfCa3HYRFIEwnn2T3Sm1XbbmOTFzMiwPLsBBVuiNMpmY5shuHq4HwsEBrJiT4gKRNRvcF8KA06cvK2PdJJbogH1WubqqsJBPefbDPHi6CNlM2nbiAaUZ8POTrdSapu8jqYtIX1puhq5reHIJxSB01NIPKR4Es/9OHzyGJKra7XY9tDXONcGzM2S1GzxJWyAqiDZZ3SelkTeWTwaGDCKpfCk+4dUOt9F1IfkCV7apG6I29SEbiwaERMu2fUiE+AyNmGgKlXpgtkGwlpnpsBEcu363kEjKn/PIryG1sXy8GY7933vIOmTvyo5SE/Z/3/ipxoyyBE98j+NIWrDFyYyim92A/ThHajYnzu8mKB8IfEGll4Tqj4/qFJ8bpoeMcQ95RmM8omhumnaJ4aoxB6JWq8YgsZ45Bi8YqisjPeKIajpRwm2XwzF8vCHdveLocimrfgbf4aiVA83wiuG4Ow+Eg1eMYTItpd7KWTPHk6wVwxFoZ6tAj4xRD//EYj3iSEQfPZcecQQK02fYQx/GJIc6DPB5g1DEhT+S7t7w5BUfP8F4n1hSAr3hQinJwxJ56M4vcAPhjQzI+Zs/WBIy+nFtLsfDE0t5D4yxAyaHwyxIAhbgv1g+LEX5cEkoScM1W7FHZ4wNEzM9oUhOBbQmOQLQwh3Q7WrLwzhMYUyb28YQr2JWDPjDUOIs4n1pd4whCYzsYvVG4agEcXRb94w7HvP0P+nFMoJvdxpoMPSR20BLddQh+YLQ9hK4VAsXxhCuBTG93nCEAuBYRKqJwyxLhEu+cEQWyexaNkLhiRciuN6fWBIpo+QmmUPGNLxKqR3gD9D2ohAi7LZM5QmANEBQNwZSg3aUs81c4bS+Bi555o3Q2l8jKJFiTdDmvoNMvke3gxpy5pqNDNvhqQ+Ya2ShDdDbA9tK5sneTOEAFuiloM3Q7BnNO2hvBlClYlmOBRvhsoGCwLmDEXxNe2TzBlaNIgyZyg2yWj6kZkzFMXQDCDhzTBvONQNvBmCxtecjsCbIVjemmkCrBmie6iZN8aaIYwI1E0T4MwQo2y6cVycGZ6Aoe5gOsYM0cHXTkfmy5DM8NaepMOVYYuejKAVQpwI+cKQku17HysNA3qol37EL/wU9rPzxE/VP59mKJ9Po78Z7rU+FQqOFql9dqli1KphOhKGxS0XsQX79HJc0dkuSkTSNLXAPN0ax9bYjcJq0UM3gvOqO9vEg+onRIbKU1vMc/TJvRbj5WLD0X37+XK2WcSDqAKyUaibYWmegEvGywXt2acJvxPLowl/2slh8nvZhNPRd1RYn3wvUv0BQTnH7BYez2qJczLv3g40upLe3MaCXxFPdzdM4zAe9ZSrPox608VXJr0VrxDMOY+oXpzO69Vx3r3hsD2u7Z6W/FNtSj2ir3a0baZQS0k4RrCcaEiPqeCD/EMk/2G4dy3pe3hhNKycDmeAw0sHZ40LDp2vH9nLp6u9cZrkYWLWUxXi8505/rsXjxpu39/yYW931chz04GEpWNpPWaVItYcKKhCQmurolG8mXU7+8p4/cMpCws5Mr2+zXz287KvH458tbOuqzrLusfyyZq+9xWMe0a88AYMe4NR3P+6zLL5cdVp258mLqHT/QybMHI6D63heBx9D0Z3azsOn7j+u//1m06W2yRJOu393b/et5P5cjK7XF0xxTGdlvgP5Ut9RHwIAVQAAAAASUVORK5CYII=">  Mi Piace</h4>
            ${"Piace a " + arrayCard[i].like + " " + "persone"}
        </div>
    </div>
    
    `

    
}

