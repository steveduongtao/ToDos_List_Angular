import { Component, OnInit, Input } from '@angular/core';
import { authors,Author } from '../authors.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  authors = authors;
  idAuthor=1;
  currentAuthor=authors[0];
  currentAuthor1=authors[0]
  currentAuthorFirstNameEdit = authors[0].firstName
  currentAuthorLastNameEdit = authors[0].lastName

  onSelected(selectedAuthor: Author) {
    console.log(selectedAuthor.id)
    this.currentAuthor= selectedAuthor
  }
  onSelected1(selectedAuthor: Author){
    console.log(selectedAuthor.id)
    this.currentAuthor1= this.authors[selectedAuthor.id+1]
    console.log(selectedAuthor.id+1)
  }
  onDelete(idAuthor: number){
    console.log("idAuthor" ,idAuthor)
    this.authors= this.authors.filter((val)=>{
      return val.id != idAuthor
    })
    this.currentAuthor =this.authors[0]
  }
  onDelete2(idProduct: number){
    this.authors=this.authors.filter((val)=>{
       return val.id != idProduct
    })
    this.currentAuthor = this.authors[0]
  }
  onDeleteNew(idProduct: number){
    this.authors= this.authors.filter((val)=>{
      return val.id != idProduct
    })
    this.currentAuthor = this.authors[0]
  }
  onEdit(author:Author){
    this.idAuthor = author.id;
    this.currentAuthorFirstNameEdit = author.firstName;
    this.currentAuthorLastNameEdit = author.lastName;
    console.log(46, this.currentAuthorFirstNameEdit,this.currentAuthorLastNameEdit)
  }
  onModify(){
    this.authors = this.authors.map((author)=>{
      author.id === this.idAuthor? this.authors[this.idAuthor].firstName=this.currentAuthorFirstNameEdit:this.authors[this.idAuthor]
      author.id === this.idAuthor? this.authors[this.idAuthor].lastName=this.currentAuthorLastNameEdit:this.authors[this.idAuthor]
      return author
    })
  }
  addAuthor(){
    this.authors.push({ id: this.authors.length,
      firstName: this.currentAuthorFirstNameEdit,
      lastName: this.currentAuthorLastNameEdit,
      email: this.currentAuthorFirstNameEdit+this.currentAuthorLastNameEdit+'net',
      phone: '1-463-123-4447',
      gender: 'nu',
      ipAdress: 'ramiro.info',})


  }

}
