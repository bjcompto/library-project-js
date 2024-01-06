
//add new forms of media and average their ratings..indicate if they have been checked out or not 
class Media {
    constructor(title) {
      this._title = title; 
      this._isCheckedOut = false; 
      this._ratings = [];
    }
  
    get title() {
      return this._title; 
    }
  
    get isCheckedOut() {
      return this._isCheckedOut; 
    }
  
    get ratings() {
      return this._ratings; 
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = (this._isCheckedOut === false)? true : false; 
    }
  
    getAverageRating() { 
      let sum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      //console.log(sum); 
      let average = sum / this._ratings.length; 
      //console.log(average);
      return average; 
    }
  
    addRating(newRating) {
      this._ratings.push(newRating); 
    }
  }
  //book subclass of media 
  class Book extends Media {
    constructor(author, title, pages) {
      super(title); 
      this._author = author; 
      this._pages = pages; 
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages 
    }
  }
  //movie subclass of media 
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title); 
      this._director = director; 
      this._runTime = runTime; 
    }
  
    get director() {
      return this._director; 
    }
  
    get runtime() {
      return this._runTime; 
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544); 
  
  historyOfEverything.toggleCheckOutStatus(); 
  
  console.log(historyOfEverything.isCheckedOut); 
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  //console.log(historyOfEverything.ratings);  
  console.log(historyOfEverything.getAverageRating()); 
  
  const speed = new Movie('Jan de Bont', 'Speed', 116); 
  speed.toggleCheckOutStatus(); 
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5); 
  
  console.log(speed.getAverageRating());