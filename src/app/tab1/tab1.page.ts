import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // DECLARAMOS LA PROPIEDAD ITEMREF
  itemRef: any;
  // INSTANCIAMOS EL ANGULARFIREDATABASE
  constructor( private db: AngularFireDatabase ) {}

  ngOnInit() {
    this.itemRef = this.db.object('usuarios');
    this.itemRef.snapshotChanges().subscribe(action => {
    console.log(action.type);
    console.log(action.key)
    console.log(action.payload.val())
    return this.itemRef
    });
  }
}
