import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Fel} from '../app.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FsService} from '../fs.service';
import { filter } from 'rxjs/operators'


@Component({
  selector: 'app-list-fel',
  templateUrl: './list-fel.component.html',
  styleUrls: ['./list-fel.component.css']
})
export class ListFelComponent implements OnInit {
  public displayedColumns = ['nume', 'pret', 'details' , 'update', 'delete'];
  public dataSource = new MatTableDataSource<Fel>();
  public categoria: string;
  public sub: any;

  @ViewChild(MatSort) sort: MatSort;
  constructor(private fs: FsService,
              private route: ActivatedRoute,
              private router: Router) {


    this.route.queryParams.pipe(
      filter(params => params.categoria))
      .subscribe(params => {
        // console.log(params); // {order: "popular"}

        this.categoria = params.categoria;
        console.log('this categoria', this.categoria);
        // popular
        this.getAll(this.categoria);
      });
    // this.sub = this.route.paramMap.subscribe(params => {
    //   this.categorie = params.get('categoria');
    // });

    // this.categorie = this.route.snapshot.params['categoria'] || '/';
    // console.log(this.categoria);
    console.log('aaa');


  }

  ngOnInit() {

  }

  public getAll(categorie: string)  {
    this.fs.getItems(categorie)
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

    this.router.navigate(['item-details/:nume'], { queryParams: { categoria: this.categoria , nume: nume}});
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


}
