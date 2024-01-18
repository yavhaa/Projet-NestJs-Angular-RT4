export class Book {
  id = 0;
  title = '';
  author = '';
  genre = '';
  keywords = '';
  cover = '';
  waitingList : number[];
  constructor(id: number, title: string, author: string, genre: string, keywords: string, cover: string, waitingList: number[]) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.keywords = keywords;
    this.cover = cover;
    this.waitingList = waitingList;
  }
}
