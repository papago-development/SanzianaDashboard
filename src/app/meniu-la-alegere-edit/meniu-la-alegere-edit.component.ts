import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {FsService} from '../fs.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-meniu-la-alegere-edit',
  templateUrl: './meniu-la-alegere-edit.component.html',
  styleUrls: ['./meniu-la-alegere-edit.component.css']
})
export class MeniuLaAlegereEditComponent implements OnInit {
  meniuForm: FormGroup;
  nume: string = '';
  descriere: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder, private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Editeaza Meniul La Alegere!');
    this.getMeniu();
    this.meniuForm = this.formBuilder.group({
      'nume': [null, Validators.required],
      'descriere': [null, Validators.required],
      'ciorba.nume': [null, Validators.required],
      'ciorba.pret': [null, Validators.required],
      'felPrincipal.nume': [null, Validators.required],
      'felPrincipal.pret': [null, Validators.required],
      'garnitura.nume': [null, Validators.required],
      'garnitura.pret': [null, Validators.required],
      'salata.nume': [null, Validators.required],
      'salata.pret': [null, Validators.required]
    });

  }

  getMeniu() {
    this.fs.getMeniuLAlegere().subscribe(data => {
      console.log('in edit', data);
      this.meniuForm.setValue({
        nume: data.nume,
        descriere: data.descriere,
        'ciorba.nume': data.ciorba.nume,
        'ciorba.pret': data.ciorba.pret,
        'felPrincipal.nume': data.felPrincipal.nume,
        'felPrincipal.pret': data.felPrincipal.pret,
        'garnitura.nume': data.garnitura.nume,
        'garnitura.pret': data.garnitura.pret,
        'salata.nume': data.salata.nume,
        'salata.pret': data.salata.pret,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.fs.updateMeniu('Meniu la alegere', form)
      .subscribe(res => {
          this.router.navigate(['/meniulaalegere']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
