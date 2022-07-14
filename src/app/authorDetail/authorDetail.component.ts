import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './authorDetail.component.html',
  styleUrls: ['./authorDetail.component.css'],
})
export class Author2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
  @Input() authorsAll?: object;
  @Input() author?: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() select1 = new EventEmitter<Author>()
  @Output() delete = new EventEmitter<number>()
  @Output() deleteNew = new EventEmitter<number>()
  @Output() authorEdit = new EventEmitter<Author>()
}
