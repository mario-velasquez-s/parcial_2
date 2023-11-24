import { Component, OnInit } from '@angular/core';
import { cursoService } from '../curso';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class CursosListComponent implements OnInit {

  selected: boolean = false;
  p: number = 1;
  searchedBook: any;

  constructor(private cursoService: cursoService) { }

  getBooks(): void {
    this.cursoService.getCursos().subscribe({next: apiData => this.books = apiData , error: e => console.error(e)});
  }

  onSelected(book: BookDetail): void {
    this.selected = true;
    this.selectedBook = book;
  }

  ngOnInit() {
    this.getBooks();
  }

}
