/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10+20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).

*/

let random = Math.floor(Math.random()*21)
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: 'Vincenzo',
  surname:'Melillo',
  age:'29',
}
console.log(me)





/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log(me)



/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

 me.skills = []
console.log(me)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('motivated','creativity')
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  let numb = Math.floor(Math.random() * 7)
  
  return numb
}

console.log(dice())


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

const result = whoIsBigger(1500, 200000);
console.log(result);



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (str) {
    let split = str.split(" ");
    return split;
    
   
  }
  
  console.log(splitMe("Trasformami in Array"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (str, boolean) {
  if (boolean === true) {
    return str.slice(1)
  } else {
    return str.slice(0, -1)
  }
}

console.log(deleteOne('EPICODE', true))
console.log(deleteOne('EPICODE', false))


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str) {
  let letters = str.replace(/\d+/g, '')
  return letters
}
console.log(onlyLetters('Ho 1 cane e 2 gatti'))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (str) {
  
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(str);
  }

  console.log(isThisAnEmail('tizio@gmail.com'))
  console.log(isThisAnEmail('semproniogmail.com'))




/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/


const whatDayIsIt = function (dayofweek) {
  const dayNames = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  const newDate = new Date();
  const  dayweek = newDate.getDay();
  const dayname = dayNames[dayweek-1]//metto -1 per farlo coincidere con i giorni della settimana italiani
  console.log(dayname)
  

 
}

whatDayIsIt()

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/



const rollTheDices = function (numRolls) {
  let values = [];
  let sum = 0;

  for (let i = 0; i < numRolls; i++) {
    const roll = dice(); 
    values.push(roll); 
    sum += roll; 
  }

  const result = {
    sum: sum,
    values: values
  };

  return result;
}


const rolls = rollTheDices(5); 
console.log("Sum:", rolls.sum); 
console.log("Values:", rolls.values); 
console.log(rolls)






/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (startDate) {
  const currentDate = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const daysDifference = Math.floor((currentDate - startDate) / oneDay);

  return daysDifference;
}


const startDate = new Date("2023-09-10"); 
const dayspassed= howManyDays(startDate);
console.log(`sono trascorsi ${dayspassed} giorni `);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(birthday) {
  const today = new Date();
  const birthdayDate = new Date(birthday);


  if (today.getMonth() === birthdayDate.getMonth() && today.getDate() === birthdayDate.getDate()) {
console.log('true, AUGURII!!')
  }
    else {
      console.log('false, Mi dispiace non è il tuo compleanno')
    }
  
  }

 
isTodayMyBirthday('2023-09-15')
isTodayMyBirthday('2023-08-08')

//fose non dovevo mettere gli anni??? ma solo mese e giorno?? ma non saprei come fare, in caso ci torno dopo


 




// Arrays & Oggetti

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]





/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const myobjectjs = {
  name: "Vincenzo",
  age: 29,
  city: "Palermo"
};


const deleteProp = function (obj, propName) {
  const newObj = { ...myobjectjs }; 
   delete newObj[propName]; 
   return newObj;
  };

const newobjmod = deleteProp(myobjectjs, 'city')

console.log(newobjmod)


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {

  let newest = movies[0]; 

  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
      newest = movies[i]; 
    }
  }

  console.log(newest.Title)
}
newestMovie(movies) //dovrebbe uscire End Game



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/


function countMovies(moviesArray) {
  let count = 0;

  moviesArray.forEach(function (movie) {
    if (movie.Type === 'movie') {
      count++;
    }
  });

  return count;
}

const numberOfMovies = countMovies(movies);
console.log("Numero di film:", numberOfMovies);







/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function (moviesArray) {
  const years = [];

  moviesArray.forEach(function (movie) {
    const year = movie.Year;
    years.push(year);
  });

  return years;
}

const movieYears = onlyTheYears(movies);
console.log("Anni dei film:", movieYears);






/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


const  onlyBeforeYear2000 = function (moviesArray) {
  // Filtra gli elementi in base all'anno di produzione
  const moviesBefore2000 = moviesArray.filter(function (movie) {
    const year = parseInt(movie.Year, 10); // Converte l'anno in un numero intero
    return year < 2000;
  });

  return moviesBefore2000;
}

const moviesBefore2000 = onlyBeforeYear2000(movies);
console.log("Film prodotti prima del 2000:", moviesBefore2000);







/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function (moviesArray) {
  let totalYears = 0;

  moviesArray.forEach(function (movie) {
    const year = parseInt(movie.Year, 10); 
    totalYears += year;
  });

  return totalYears;
}

const totalYears = sumAllTheYears(movies);
console.log("Somma di tutti gli anni:", totalYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (searchString, InsertArray) {
 
  const FindMoviesinArray = InsertArray.filter(function (movie) {
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });

  return FindMoviesinArray;
}

const searchResult = searchByTitle("Rings", movies);
console.log("Film con titolo contenente 'Rings':", searchResult);




/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/


const searchAndDivide = function (searchString, moviesArray) {
  const result = {
    match: [],
    unmatch: []
  };

  moviesArray.forEach(function (movie) {
    if (movie.Title.toLowerCase().includes(searchString.toLowerCase())) {
      result.match.push(movie);
    } else {
      result.unmatch.push(movie);
    }
  });

  return result;
}


const ResultofSearch = searchAndDivide("Lord of the Rings", movies);
console.log("Film corrispondenti:", ResultofSearch.match);
console.log("Film non corrispondenti:", ResultofSearch.unmatch);







/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (index, moviesArray) {
  if (index < 0 || index >= moviesArray.length) {
    return moviesArray;
  }

  const newArray = [...moviesArray];
  newArray.splice(index, 1);
  return newArray;
};


console.log(movies)
const newIndex = 1; // Dovrebbe rimuovere il ritorno del Re??
const cancMovies = removeIndex(newIndex, movies);
console.log(cancMovies);



// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


const selectContainer = function () {
  const container = document.getElementById("container");
  return container;
};





/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectAllTableCells = function () {
  const tdElements = document.querySelectorAll("td");
  return tdElements;
};


selectAllTableCells()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/


const printTableCellText = function () {
  const tdElements = document.getElementsByTagName("td");

  for (let i = 0; i < tdElements.length; i++) {
    const td = tdElements[i];
    console.log(td.textContent);
  }
}

printTableCellText()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addRedBackgroundToLinks = function () {
  const links = document.querySelectorAll("a");

  links.forEach(function (link) {
    link.style.backgroundColor = "red";
  })
};

addRedBackgroundToLinks();




/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addListItemToMyList = function (text) {
  const myList = document.getElementById("myList");

  if (myList) {
    const listItem = document.createElement("li");
    listItem.textContent = text;

    myList.appendChild(listItem);
  }
};

// Esempio di utilizzo:
addListItemToMyList("Nuovo elemento");






/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const SvuotaMyList = function () {
  const myList = document.getElementById("myList")

  if (myList) {
    myList.innerHTML = ""
  }
};


SvuotaMyList();





/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/


const AddClassAtr= function () {
  const tableRows = document.querySelectorAll("tr");

  tableRows.forEach(function (row) {
    row.classList.add("righe-tabella");
  });
};

// Esempio di utilizzo:
AddClassAtr();




// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function (height) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
};


halfTree(15);






/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = function (height) {
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
};


tree(10);





/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

