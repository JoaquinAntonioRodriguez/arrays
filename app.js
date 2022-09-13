class manga{ constructor(anime, precio, stock){
    this.anime = anime;
    this.precio= precio;
    this.stock= stock;
    
}}

class poster{ constructor(anime, precio, stock){
    this.anime = anime;
    this.precio= precio;
    this.stock= stock;
    
}}
class llavero{ constructor(anime, precio, stock){
    this.anime = anime;
    this.precio= parseFloat(precio);
    this.stock= stock;
    
}}
const mangas= [ ];
const posters=[ ];
const llaveros =[ ];
mangas.push(new manga("One Piece", 600, true))
mangas.push(new manga("Naruto", 700, true))
mangas.push(new manga("HunterxHunter", 650, false))
mangas.push(new manga("Death Note",700, true))

console.log(mangas)
for (const manga of mangas) {
    console.log(manga.anime);
    console.log(manga.precio);
    console.log(manga.stock)
}
posters.push(new poster("One Piece", 175, true))
posters.push(new poster("HunterxHunter", 150, true))
posters.push(new poster("Death Note", 200, true))
console.log(posters)
for (const poster of posters) {
    console.log(poster.anime)
    console.log(poster.precio)
    console.log(poster.stock)
}
llaveros.push(new llavero("One piece",50 ,true ))
llaveros.push(new llavero("HunterxHunter",50 ,true ))
llaveros.push(new llavero("League of Legends",50 ,true ))
console.log(llaveros)
for (const llavero of llaveros) {
    console.log(llavero.anime)
    console.log(llavero.precio)
    console.log(llavero.stock)
}