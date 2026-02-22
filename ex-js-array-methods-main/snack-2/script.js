const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

people.forEach(person => {
  console.log(person.name);
});

/*
people.forEach():Questo metodo ci dice di "passare in rassegna" 
ogni elemento contenuto nell'array "people",uno alla volta 
*/
/*
person:È il nome che diamo alla variabile temporanea che rappresenta l'elemento 
corrente durante il ciclo
*/
/*
person.name:Poiché ogni elemento è un oggetto, usiamo la "dot notation" (il punto) 
per accedere solo alla proprietà - name -
*/ 