import { Component, OnInit } from '@angular/core';
import {FsService} from '../fs.service';

@Component({
  selector: 'app-meniu-extra',
  templateUrl: './meniu-extra.component.html',
  styleUrls: ['./meniu-extra.component.css']
})
export class MeniuExtraComponent implements OnInit {
  meniu: any;
  constructor(private fs: FsService) { }

  ngOnInit() {
    this.getMeniuDetails();
  }

  getMeniuDetails() {
    this.fs.getMeniuExtra()
      .subscribe(data => {
        console.log(data);
        this.meniu = data;
      });
  }

}
