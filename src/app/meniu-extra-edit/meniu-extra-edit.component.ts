import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FsService} from '../fs.service';

@Component({
  selector: 'app-meniu-extra-edit',
  templateUrl: './meniu-extra-edit.component.html',
  styleUrls: ['./meniu-extra-edit.component.css']
})
export class MeniuExtraEditComponent implements OnInit {
  meniuForm: FormGroup;
  nume: string = '';
  descriere: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Editeaza Meniul La Alegere!');
    this.getMeniu();
    this.meniuForm = this.formBuilder.group({
      'nume': [null, Validators.required],
      'descriere': [null, Validators.required],
      'minut.nume': [null, Validators.required],
      'minut.pret': [null, Validators.required],
      'garnitura.nume': [null, Validators.required],
      'garnitura.pret': [null, Validators.required],
      'salata.nume': [null, Validators.required],
      'salata.pret': [null, Validators.required],
      'desert.nume': [null, Validators.required],
      'desert.pret': [null, Validators.required]
    });
  }


  getMeniu() {
    this.fs.getMeniuExtra().subscribe(data => {
      console.log('in edit', data);
      this.meniuForm.setValue({
        nume: data.nume,
        descriere: data.descriere,
        'minut.nume': data.minut.nume,
        'minut.pret': data.minut.pret,
        'garnitura.nume': data.garnitura.nume,
        'garnitura.pret': data.garnitura.pret,
        'salata.nume': data.salata.nume,
        'salata.pret': data.salata.pret,
        'desert.nume': data.desert.nume,
        'desert.pret': data.desert.pret,
      });
    });
  }

}
