// Task 1

/*

class Book {
    constructor(author, title, yearOfWriting, numberOfPages, shelfNumber, userIdWithBook) {
        this.author = author;
        this.title = title;
        this.yearOfWriting = yearOfWriting;
        this.numberOfPages = numberOfPages;
        this.shelfNumber = shelfNumber;
        this.userIdWithBook = userIdWithBook;
    }

    // Setters

    set author(value) {
        if(typeof value !== 'string') {
            throw new TypeError('Author must be a string');
        }

        this._author = value;
    }

    set title(value) {
        this._title = value;
    }

    set yearOfWriting(value) {
        if(typeof value !== 'number') {
            throw new TypeError('yearOfWriting must be a number');
        }

        this._yearOfWriting = value;
    }

    set numberOfPages(value) {
        if(typeof value !== 'number') {
            throw new TypeError('numberOfPages must be a number');
        }

        this._numberOfPages = value;
    }

    set shelfNumber(value) {
        this._shelfNumber = value;
    }

    set userIdWithBook(value) {
        this._userIdWithBook = value;
    }

    // Getters

    get author() {
        return this._author;
    }

    get title() {
        return this._title;
    }

    get yearOfWriting() {
        return this._yearOfWriting;
    }

    get numberOfPages() {
        return this._numberOfPages;
    }

    get shelfNumber() {
        return this._shelfNumber;
    }

    get userIdWithBook() {
        return this._userIdWithBook;
    }

    // Methods

    isVacant() {
        return this.shelfNumber !== null;
    }

    getRent(id) {
        if(this.userIdWithBook !== null) {
            throw new Error('The book is out of stock');
        }

        this.userIdWithBook = id;
        this.shelfNumber = null;

        return `User with ID ${this.userIdWithBook} took a book "${this.title}"`;
    }
}

class User {
    constructor(userId, name, surname, livingAddress) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.livingAddress = livingAddress;
    }

    // setters

    set userId(value) {
        this._userId = value;
    }
    
    set name(value) {
        this._name = value;
    }

    set surname(value) {
        this._surname = value;
    }

    set livingAddress(value) {
        this._livingAddress = value;
    }

    // getters

    get userId() {
        return this._userId;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get livingAddress() {
        return this._livingAddress;
    }
}



const witcher = new Book('Andrzej Sapkowski', 'The Witcher', 2020, 288, 1, null);

const user1 = new User(21, 'John', 'Doe', 'Street 18');

*/


// Task 2

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    hunting() {
        console.log('зараз дожену здобич');
    }

    growl() {
        console.log('грррррр');
    }
}

class Tigr extends Animal {
    constructor(name, color) {
        super(name, color);
    }

    hunting() {
        return 'тигр з’їсть тебе';
    }

    growl() {
        return 'тигр ричить';
    }
}

class Wolf extends Animal {
    constructor(name, color) {
        super(name, color);
    }

    hunting() {
        return 'вовк з’їсть тебе';
    }

    growl() {
        return 'вовк ричить';
    }
}

const tigr1 = new Tigr('John', 'orange');
console.log(tigr1.hunting());
console.log(tigr1.growl());




const wolf1 = new Wolf('Ivan', 'gray');
console.log(wolf1.hunting());
console.log(wolf1.growl());