import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FsService} from '../fs.service';
import {Fel} from '../app.model';
import {AngularFirestore, AngularFirestoreCollection,} from '@angular/fire/firestore';
import FieldValue = firestore.FieldValue;
import {firestore} from 'firebase';
import {Observable} from 'rxjs';

import { map } from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe, Location} from '@angular/common';
import {MatInput} from '@angular/material';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  nume: string;
  categoria: string;
  item: any;
  id: string;
  public dataForm: FormGroup;
  date: any;
  startDate: FormControl;;
  docId:string

  constructor( private route: ActivatedRoute, private fs: FsService, private afs: AngularFirestore, private _location: Location) {

    this.nume = this.route.snapshot.queryParams['nume'] || '/';
    this.categoria = this.route.snapshot.queryParams['categoria'] || '/';
    this.fs.getItem(this.nume, this.categoria).subscribe(res => {this.item = res[0];});

    const docref: AngularFirestoreCollection<any> = this.afs.collection(this.categoria, (ref) => ref.where('nume', '==', this.nume));
    const docId: Observable<any> = docref.snapshotChanges().pipe(map( changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));

    docId.subscribe(res => { this.docId = res[0].id});

  }

  @ViewChild('dataInput', {
    read: MatInput
  }) dataInput: MatInput;

  ngOnInit() {

    this.startDate = new  FormControl();
    // this.dataForm = new FormGroup({
    //   data: new FormControl(new Date())
    // });
    // this.date = new Date();
  }

  delData(timestamp) {
    console.log('deleting...');
    // const docref: AngularFirestoreCollection<any> = this.afs.collection(this.categoria, (ref) => ref.where('nume', '==', this.nume));
    // const docId: Observable<any> = docref.snapshotChanges().pipe(map( changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   });
    // }));

    // docId.subscribe(res => {
      this.afs.collection(this.categoria)
        .doc(this.docId)
        .update({'available' : firestore.FieldValue.arrayRemove(timestamp) });
  // });


    //   .get().then( (querySnapshot) => {
    //   const items = [];
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     console.log(data);
    //     items.push({
    //       nume: data.nume,
    //       pret: data.pret
    //     });
    //   });
    // });

    // update({'available' : firestore.FieldValue.arrayRemove('a')});
    // this.afs.collection(this.categoria)
    //   .doc(this.nume)
    //   .update({'available' : firestore.FieldValue.arrayRemove('a')});
  }

  addData() {
    // alert(this.startDate.value);
    // console.log('putting...');
    const dataIn = this.startDate.value;

    // const docref: AngularFirestoreCollection<any> = this.afs.collection(this.categoria, (ref) => ref.where('nume', '==', this.nume));
    //
    // const docId: Observable<any> = docref.snapshotChanges().pipe(map( changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   });
    // }));

    // docId.subscribe(res => {
      this.afs.collection(this.categoria)
        .doc(this.docId)
        .update({'available' : firestore.FieldValue.arrayUnion(dataIn) });
          this.dataInput.value = '';
        // });



  }

  onCancel() {
    this._location.back();
  }


}
