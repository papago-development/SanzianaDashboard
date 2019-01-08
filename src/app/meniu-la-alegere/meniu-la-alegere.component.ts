import { Component, OnInit } from '@angular/core';
import {FsService} from '../fs.service';

@Component({
  selector: 'app-meniu-la-alegere',
  templateUrl: './meniu-la-alegere.component.html',
  styleUrls: ['./meniu-la-alegere.component.css']
})
export class MeniuLaAlegereComponent implements OnInit {
  meniu: any;

  constructor(private fs: FsService) {
    this.getMeniuDetails('Meniu Standard');
  }

  ngOnInit() {
  }

  getMeniuDetails(id) {
    this.fs.getMeniuLAlegere()
      .subscribe(data => {
        // console.log(data);
        this.meniu = data;
      });
  }

}
