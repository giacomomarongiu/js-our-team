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


  // Milestone 1 - Sfoglio il mio array in un ciclo 
  for (let i = 0; i < team.length; i++) {
    //Assegno a ogni iterazione a member il valore dell'indice
    //Che sarà un oggetto
    const member = team[i];

    // Verifico la giusta assegnazione
    //console.log(member); OK

    // Milestone 1 - A ogni iterazione visualizzo nel log nome, ruolo, striga della foto
    console.log("NOME",member.name,"RUOLO", member.role,"IMG", member.image);
  }
