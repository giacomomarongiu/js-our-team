console.log("Hello World");

//Importo il mio array di oggetti
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


// Creo un collegamento su DOM (Vari modi)
// Utilizzo una struttura Bootstrap
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');


//Creo struttura nella mia DOM
document.body.append(main);
main.append(container);
container.append(row);

//Assegno struttuta Bootstrap aggiungendo classi ai miei elementi sul DOM
container.classList.add('container');
row.classList.add('row', 'g-3', 'mb-3');


//Sfoglio il mio array nella sua lunghezza
for (let i = 0; i < team.length; i++) {

    //Dichiaro una variabile member a cui assegno a ogni iterazione il valore dell'indice
    const member = team[i];
    //Essendo il mio array pieno di oggetti member sarà un oggetto
    // Verifico la giusta assegnazione
    //console.log(member); OK

    //A ogni iterazione visualizzo nel log nome, ruolo, stringa della foto
    console.log("NOME", member.name, "RUOLO", member.role, "IMG", member.image);



    //CREO IL RESTO DEGLI ELEMENTI SUL DOM
    const col = document.createElement('div');
    const card = document.createElement('div');
    const cardBody = document.createElement('div');

    //Aggiungo a ogni iterazione una colonna
    row.append(col);
    col.classList.add('col-4');

    //Aggiungo a ogni iterazione una card
    col.append(card);
    card.classList.add('card', 'h-100', 'hovereffect');

    //Faccio sì che al posto della stringa ci sia un immagine
    //Inizio a dare struttura alla card Bootstrap
    card.innerHTML = `<img class="w-100 img-responsive" src="./assets/img/${member.image}" alt=""> `

    //Continuo a dare struttura alla card per visualizzare i miei elementi sul DOM
    card.append(cardBody);
    cardBody.classList.add('card-body', 'd-flex', 'flex-column')

    //Aggiungo elementi alla mia card (Prelevandone i valori dai miei oggetti)
    cardBody.innerHTML = `
    <h5 class="card-title">${member.name}</h5>
    <p class="card-text">${member.role}</p>
    <a href="#" class="btn btn-primary mt-auto">View Profile</a>
    `
}