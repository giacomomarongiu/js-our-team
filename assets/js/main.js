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
row.classList.add('row');


// Milestone 2 - Nello stesso ciclo di Milestone 1 pubblico anche su DOM

for (let i = 0; i < team.length; i++) {
    //Assegno a ogni iterazione a member il valore dell'indice
    //Che sarà un oggetto
    const member = team[i];

    // Verifico la giusta assegnazione
    //console.log(member); OK

    // Milestone 1 - A ogni iterazione visualizzo nel log nome, ruolo, striga della foto
    console.log("NOME", member.name, "RUOLO", member.role, "IMG", member.image);



    //Milestone 1
    const col = document.createElement('div');
    const card = document.createElement('div');

    //Aggiungo la mia row
    row.append(col);
    col.classList.add('col');

    //Aggiungo la mia card (Dopo strutturo meglio)
    col.append(card);
    card.classList.add('card');

    //Verifico che la struttuta sia giusta
    card.innerHTML = ` ${"NOME  " + member.name + " RUOLO " + member.role+ " PHOTO " + member.image}`


}