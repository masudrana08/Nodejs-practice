const date = new Date('11-12-2004');
const english = new Intl.DateTimeFormat('en', { month: 'long' });
const spanish = new Intl.DateTimeFormat('es', { month: 'long'});

console.log(english.format(date));
// Prints "January"
console.log(spanish.format(date));
// Prints "M01" on small-icu

console.log(Intl);