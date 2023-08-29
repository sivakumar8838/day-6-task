// class movie {
//     constructor(title, studio, rating){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
//     Movierepresents(){
//         console.log(`title: ${this.title}`)
//         console.log(`studio: ${this.studio}`)
//         console.log(`ratihg: ${this.rating}`)
//     }
// }
// let movie1 = new movie ('Casino Royale', 'Eon Productions', 'PG­13');
// movie1.Movierepresents();

class movie{
    constructor(title, studio, rating = "PG"){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    Movierepresents(){
        console.log(`${this.rating}`);
    }
   
}

let move1 = new movie('Casino Royale', 'Eon Productions', 'PG­13');
let move2 = new movie('Casino Royale', 'Eon Productions', 'PG­14');
let move3 = new movie('Casino Royale', 'Eon Productions', 'PG­15');
move1.Movierepresents();
move2.Movierepresents();
move3.Movierepresents();

