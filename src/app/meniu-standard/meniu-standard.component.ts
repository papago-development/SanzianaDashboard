import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FsService} from '../fs.service';

@Component({
  selector: 'app-meniu-standard',
  templateUrl: './meniu-standard.component.html',
  styleUrls: ['./meniu-standard.component.css']
})
export class MeniuStandardComponent implements OnInit {

  meniuDoc: any;
  meniu: any;


  constructor(private afs: AngularFirestore, private fs: FsService) {
    // const self = this;
    // afs.collection('Meniuri').doc('Meniu Standard').ref.get().then(
    //   function (doc) {
    //     self.meniu = doc.data();
    //     console.log(doc.data());
    //   }
    // );


    // this.meniuDoc = afs.collection('Meniuri').doc('Meniu Standard');
    // this.meniu = this.meniuDoc.valueChanges();


    this.getMeniuDetails('Meniu Standard');


  }

  ngOnInit() {

  }

  getMeniuDetails(id) {
    this.fs.getStandardMeniu()
      .subscribe(data => {
        console.log(data);
        this.meniu = data;
      });
  }

}
