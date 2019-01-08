import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import 'hammerjs';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,

  MatProgressSpinnerModule,
  MatLabel,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule, MatRadioModule, MatCheckboxModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { MeniuStandardComponent } from './meniu-standard/meniu-standard.component';
import { MeniuLaAlegereComponent } from './meniu-la-alegere/meniu-la-alegere.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FsService} from './fs.service';
import { MeniuStandardEditComponent } from './meniu-standard-edit/meniu-standard-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CiorbeComponent } from './ciorbe/ciorbe.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import 'rxjs';
import { FelCreateComponent } from './fel-create/fel-create.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ListFelComponent } from './list-fel/list-fel.component';


const appRoutes: Routes = [
  { path: '', component: MeniuStandardComponent, data: { title: 'Meniu Standard Component' } },
  { path: 'meniustandard', component: MeniuStandardComponent, data: { title: 'Meniu Standard Component' } },
  { path: 'meniulaalegere', component: MeniuLaAlegereComponent, data: { title: 'Meniu Standard Component' } },
  { path: 'meniuextra', component: MeniuStandardComponent, data: { title: 'Meniu Standard Component' } },
  { path: 'meniustandard-edit', component: MeniuStandardEditComponent, data: { title: 'Edit Meniu Standard Component' } },
  { path: 'ciorbe', component: CiorbeComponent, data: { title: 'Second Component' } },
  {
    path: 'item-details/:nume',
    component: ItemDetailComponent,
    data: { title: 'Item Details' }
  },
  {
    path: 'item-create',
    component: ItemCreateComponent,
    data: { title: 'Adauga un fel de mancare' }
  },
  {
    path: 'listfel/:categoria',
    component: ListFelComponent,
    data: { title: 'Adauga un fel de mancare' }
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MeniuStandardComponent,
    MeniuLaAlegereComponent,
    MeniuStandardEditComponent,
    CiorbeComponent,
    ItemDetailComponent,
    FelCreateComponent,
    ItemCreateComponent,
    ListFelComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),

    AngularFireModule.initializeApp(environment.firebase, 'sanziana'),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [FsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
