console.log("Hello World");

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


/*   // Milestone 1 - Sfoglio il mio array in un ciclo 
  for (let i = 0; i < team.length; i++) {
    //Assegno a ogni iterazione a member il valore dell'indice
    //Che sarà un oggetto
    const member = team[i];

    // Verifico la giusta assegnazione
    //console.log(member); OK

    // Milestone 1 - A ogni iterazione visualizzo nel log nome, ruolo, striga della foto
    console.log("NOME",member.name,"RUOLO", member.role,"IMG", member.image);


  }

 */

// Milestone 2 - Creo un collegamento su DOM (Vari modi)
// Utilizzo direttamente un div con class card (Mi tornerà utile dopo)
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');


//Creo struttura nella mia DOM
document.body.append(main);
main.append(container);
container.append(row);

//Assegno struttuta Bootstrap aggiungendo classi
container.classList.add('container');
row.classList.add('row', 'g-3');


// Milestone 2 - Nello stesso ciclo di Milestone 1 pubblico anche su DOM

for (let i = 0; i < team.length; i++) {
    //Assegno a ogni iterazione a member il valore dell'indice
    //Che sarà un oggetto
    const member = team[i];

    // Verifico la giusta assegnazione
    //console.log(member); OK

    // Milestone 1 - A ogni iterazione visualizzo nel log nome, ruolo, striga della foto
    console.log("NOME", member.name, "RUOLO", member.role, "IMG", member.image);



    //Milestone 2
    const col = document.createElement('div');
    const card = document.createElement('div');
    const cardBody = document.createElement('div');

    //Aggiungo la mia row
    row.append(col);
    col.classList.add('col-4');

    //Aggiungo la mia card
    col.append(card);
    card.classList.add('card', 'h-100', 'position-relative');

    //BONUS 1 Faccio sì che al posto della stringa ci sia un immagine
    card.innerHTML = `<img class="w-100" src="./assets/img/${member.image}" alt=""> `


    //BONUS 2 Organizzo il mio DOM in modo tale da poterlo modificare con Bootstrap
    card.append(cardBody);
    cardBody.classList.add('card-body', 'd-flex', 'flex-column')

    //Aggiungo elementi alla mia card (Prelevandoli dai miei oggetti)
    cardBody.innerHTML = `
    <h5 class="card-title">${member.name}</h5>
    <p class="card-text">${member.role}</p>
    <a href="#" class="btn btn-primary mt-auto">View Profile</a>
    `
}