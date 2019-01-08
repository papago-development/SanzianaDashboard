import {Component, OnInit, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatCheckbox} from '@angular/material';
import {FsService} from '../fs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  @ViewChildren(MatCheckbox) checkboxes;

  private _lastSelected;
  public itemForm: FormGroup;

  constructor( private fs: FsService, private _location: Location) { }

  ngOnInit() {
    this.itemForm = new FormGroup({
      nume: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      available: new FormControl(new Date()),
      // address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      categoria: new FormControl('', [Validators.required]),
      fix: new FormControl('', [Validators.required]),
      pret:  new FormControl('', [Validators.required]),
      meniu: new FormControl('', [Validators.required]),
    });
  }

  public createItem = (itemFormValue) => {
    if (this.itemForm.valid) {
      this.executeItemCreation(itemFormValue);
    }
  }

  private executeItemCreation = (itemFormValue) => {
    let temp_obj = {};
    const item: any = {
      nume: itemFormValue.nume,
      available: [itemFormValue.available],
      categoria: itemFormValue.categoria,
      fix: itemFormValue.fix,
      pret: itemFormValue.pret,
      meniu: itemFormValue.meniu.map( (value, index) => {
         temp_obj[value] = true;
        return temp_obj;
      })[0]
        // Object.assign({}, ...itemFormValue.meniu.map( (item) => ({[ item : true]})))

      // new Map(itemFormValue.meniu.map((name) => [name, true] ))
    };
    // this.fs.putItemInCategorie(itemFormValue.categoria, item);
    console.log(item);
  }


    onCancel() {
      this._location.back();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.itemForm.controls[controlName].hasError(errorName);
  }


}
