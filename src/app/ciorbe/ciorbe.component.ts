import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Fel} from '../app.model';
import {FsService} from '../fs.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ciorbe',
  templateUrl: './ciorbe.component.html',
  styleUrls: ['./ciorbe.component.css']
})
export class CiorbeComponent implements OnInit {

  public displayedColumns = ['nume', 'pret', 'details' , 'update', 'delete'];
  public dataSource = new MatTableDataSource<Fel>();
  public categorie: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private fs: FsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.categorie = 'Ciorbe';
  }

  ngOnInit() {
    this.getAll('Ciorbe');
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public getAll(categorie: string)  {
    this.fs.getItems(this.categorie)
      .subscribe(res => {
        console.log(res);
        this.dataSource.data = res as Fel[];
      });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDelete = (id: string) => {

  }

  public redirectToDetails = (nume: string) => {
      // console.log(nume, this.categorie);
      // this.fs.getItem(nume, this.categorie).subscribe(res => console.log('ooo', res));

      this.router.navigate(['item-details/:nume'], { queryParams: { categoria: this.categorie , nume: nume}});
  }


}
