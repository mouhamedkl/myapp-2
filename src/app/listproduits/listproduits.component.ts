import { Component, OnInit } from '@angular/core';
import { ServiceSService } from '../service/service-s.service';
import { Product } from './../model/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {
  liste: Product[] = [];

  person = new Product();


  constructor(private share: ServiceSService,private router:Router) { }
  msg = ""
  ngOnInit(): void {

    //
    //this.liste = this.share.finall();
    this.share.getProduct().subscribe((rep) => this.liste = rep);


  }

 public getid(id:number){
  for (let index = 0; index < this.liste.length; index++) {
    const element = this.liste[index];

    if (element.id==id) {
     this.person.id=element.id
     this.person.like=element.like
     this.person.price=element.price
     this.person.quantity=element.quantity
     this.person.title=element.title
     console.log(element.id,id);


    }


  }
  return id
 }
 addlike(id: number) {
    for (let index = 0; index < this.liste.length; index++) {
      const element = this.liste[index];
      if (element.id == id ) {
        console.log(element.id)
        element.like++;
        this.person.title=element.title;
        this.person.quantity=element.quantity;
        this.person.price=element.price;
        this.person.like=element.like;
        this.share.update(id,this.person).subscribe(data=>data.id=this.person.id)
      }
      }
    }

  buy(id: number) {
    for (let index = 0; index < this.liste.length; index++) {
      const element = this.liste[index];
      if (element.id == id ) {
        console.log(element.id)
        element.quantity--;
        this.person.title=element.title;
        this.person.quantity=element.quantity;
        this.person.price=element.price;
        this.person.like=element.like;
        this.share.update(id,this.person).subscribe(data=>data.id=this.person.id)
      }
      }

  }
  per:any
  save() {
    this.per=this.addUserForm.value
    this.share.addPerson(this.per).subscribe((data)=>{

      this.msg=("ajouter avec success")
     console.log(this.msg);

    })




  }
  addUserFrom:any
  addUserForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]*')]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    like: new FormControl('', [Validators.required])
  });
  all:any
  delete(id:number){

  this.share.delete(id).subscribe()


  }
  user:any;
  update(id:number,p:Product){

          this.share.update(id,p).subscribe(data =>{data.id=p.id
            this.msg=("Modification termineee")
          })
          console.log(id,p);



}

}
