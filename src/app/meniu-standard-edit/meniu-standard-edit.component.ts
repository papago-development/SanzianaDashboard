import { Component, OnInit } from '@angular/core';
import {FsService} from '../fs.service';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-meniu-standard-edit',
  templateUrl: './meniu-standard-edit.component.html',
  styleUrls: ['./meniu-standard-edit.component.css']
})
export class MeniuStandardEditComponent implements OnInit {

  meniuForm: FormGroup;
  nume: string = '';
  descriere: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getMeniu();
    this.meniuForm = this.formBuilder.group({
      'nume' : [null, Validators.required],
      'descriere': [null, Validators.required],
      'ciorba.nume': [null, Validators.required],
      'ciorba.pret': [null, Validators.required],
      'felPrincipal.nume': [null, Validators.required],
      'felPrincipal.pret': [null, Validators.required],
    });
  }

  getMeniu() {
    this.fs.getStandardMeniu().subscribe(data => {
      console.log('in edit', data);
      this.meniuForm.setValue({
        nume: data.nume,
        descriere: data.descriere,
        'ciorba.nume': data.ciorba.nume,
        'ciorba.pret': data.ciorba.pret,
        'felPrincipal.nume': data.felPrincipal.nume,
        'felPrincipal.pret': data.felPrincipal.pret,

      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.fs.updateMeniu('Meniu Standard', form)
      .subscribe(res => {
          this.router.navigate(['/meniustandard']);
        }, (err) => {
          console.log(err);
        }
      );
  }





}
