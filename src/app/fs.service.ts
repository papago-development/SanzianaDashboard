import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Fel} from './app.model';

@Injectable({
  providedIn: 'root'
})
export class FsService {
  // ref = firebase.firestore().collection('Meniuri');
  constructor(private afs: AngularFirestore) {
  }

  getStandardMeniu(): Observable<any> {
    return new Observable((observer) => {
      this.afs.collection('Meniuri').ref.doc('Meniu Standard').get().then((doc) => {
        const data = doc.data();
        // console.log(data);
        observer.next({
          nume: data.nume,
          descriere: data.descriere,
          ciorba: data.ciorba,
          felPrincipal: data.felPrincipal
        });
      });
    });
  }

  getMeniuLAlegere(): Observable<any> {
    return new Observable((observer) => {
      this.afs.collection('Meniuri').ref.doc('Meniu la alegere').get().then((doc) => {
        const data = doc.data();
        // console.log(data);
        observer.next({
          nume: data.nume,
          descriere: data.descriere,
          ciorba: data.ciorba,
          felPrincipal: data.felPrincipal,
          garnitura: data.garnitura,
          salata: data.salata,
          tcp: data.tcp,
          pret: data.pret
        });
      });
    });
  }

  getMeniuExtra(): Observable<any> {
    return new Observable((observer) => {
      this.afs.collection('Meniuri').ref.doc('Meniu Extra').get().then((doc) => {
        const data = doc.data();
        // console.log(data);
        observer.next({
          nume: data.nume,
          descriere: data.descriere,
          minut: data.minut,
          garnitura: data.garnitura,
          salata: data.salata,
          desert: data.desert,
          tcp: data.tcp,
          pret: data.pret
        });
      });
    });
  }



  getItems(categorie: string): Observable<any> {
    return new Observable((observer) => {
      this.afs.collection(categorie).ref.get().then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
            nume: data.nume,
            pret: data.pret
          });
        });
        observer.next(items);
      });
    });
  }

  getItem(nume: string, categorie: string): Observable<any> {
    return this.afs.collection(categorie, (ref) => ref.where('nume', '==', nume).limit(1)).valueChanges();
  }

  updateMeniu(numeMeniu: string, data): Observable<any> {
    return new Observable((observer) => {
      this.afs.collection('Meniuri').doc(numeMeniu).update(data).then(() => {
        observer.next();
      });
    });
  }

  putItemInCategorie(categorie, item) {
    return this.afs.collection(categorie).add(item).then(res => console.log('ok'));
  }
}
