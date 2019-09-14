import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployesService} from '../services/employes.service';
import {Employee} from '../classes/employee';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ModifierempComponent} from './modifieremp/modifieremp.component';
import {SupprimerempComponent} from './supprimeremp/supprimeremp.component';
import {DetailsempComponent} from './detailsemp/detailsemp.component';
import {AjouterempComponent} from './ajouteremp/ajouteremp.component';
import {Client} from '../classes/client';

@Component({
  selector: 'app-gestion-emp',
  templateUrl: './gestion-emp.component.html',
  styleUrls: ['./gestion-emp.component.scss']
})
export class GestionEmpComponent implements OnInit {



  EMPS : Employee[] ;

  displayedColumns: string[] = ['id', 'nom', 'prenom' , 'dateNais' , 'action'];

  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empService :EmployesService ,  public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.empService.getEmployees().subscribe(
        (response) => {
          this.EMPS = response;
          this.dataSource =  new MatTableDataSource(this.EMPS);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        },
        (error) => console.log('error'+error)
    )


  }



  openDetailsDialog(emp : Employee): void {
    const dialogRef = this.dialog.open(DetailsempComponent, {
      width: '800px',data: emp
    });
  }

  openDeleteDialog(id : number): void {
    const dialogRef = this.dialog.open(SupprimerempComponent, {
      width: '800px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.empService.getEmployees().subscribe(
              (response) => {
                this.EMPS = response;
                this.dataSource =  new MatTableDataSource(this.EMPS);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

              },
              (error) => console.log('error'+error)
          )
        })
    );

  }

  openPatchDialog(emp : Employee): void {
    const dialogRef = this.dialog.open(ModifierempComponent, {
      width: '1000px',height :'700px',data: emp
    });
      dialogRef.afterClosed().subscribe(
          (res => {
              this.empService.getEmployees().subscribe(
                  (response) => {
                      this.EMPS = response;
                      this.dataSource =  new MatTableDataSource(this.EMPS);
                      this.dataSource.paginator = this.paginator;
                      this.dataSource.sort = this.sort;

                  },
                  (error) => console.log('error'+error)
              )
          })
      );
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AjouterempComponent, {
      width: '1000px' ,height :'700px'
  });
    dialogRef.afterClosed().subscribe(
              (res => {
                this.empService.getEmployees().subscribe(
                    (response) => {
                      this.EMPS = response;
                      this.dataSource =  new MatTableDataSource(this.EMPS);
                      this.dataSource.paginator = this.paginator;
                      this.dataSource.sort = this.sort;

                    },
                    (error) => console.log('error'+error)
                )
              })
    );
  }

}
