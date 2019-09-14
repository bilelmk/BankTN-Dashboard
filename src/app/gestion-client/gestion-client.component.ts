import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ClientsService} from '../services/clients.service';
import {Client} from '../classes/client';
import {MatDialog, MatTableDataSource ,MatPaginator, MatSort} from '@angular/material';
import {DetailsclientComponent} from './detailsclient/detailsclient.component';
import {SupprimerclientComponent} from './supprimerclient/supprimerclient.component';
import {ModifierClientComponent} from './modifier-client/modifier-client.component';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit, AfterViewInit  {
  CLIENTS: Client[] = null ;
  displayedColumns: string[] = ['id', 'nom', 'prenom' , 'dateNais' , 'nature' , 'action'];

  dataSource: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private clientsService: ClientsService, public dialog: MatDialog) {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
    }

  ngOnInit() {



    this.clientsService.getClients().subscribe(
        (response) => {
          this.CLIENTS = response ;
          this.dataSource =  new MatTableDataSource(this.CLIENTS);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          },
        (error) => console.log('error')
    )
  }


  openDetailsDialog(cl : Client): void {
    const dialogRef = this.dialog.open(DetailsclientComponent, {
      width: '800px',height:'80%' ,data: cl
    });
  }

  openDeleteDialog(id : number): void {
    const dialogRef = this.dialog.open(SupprimerclientComponent, {
      width: '800px',data: id
    });
    dialogRef.afterClosed().subscribe(
        (res => {
          this.clientsService.getClients().subscribe(
              (response) =>{
                this.CLIENTS = response ;
                this.dataSource =  new MatTableDataSource(this.CLIENTS);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort
              }
          )
        })
    );

  }

  openPatchDialog(cl : Client): void {
    const dialogRef = this.dialog.open(ModifierClientComponent, {
      width: '1000px',height:'700px',data: cl
    });
      dialogRef.afterClosed().subscribe(
          (res => {
              this.clientsService.getClients().subscribe(
                  (response) =>{
                      this.CLIENTS = response ;
                      this.dataSource =  new MatTableDataSource(this.CLIENTS);
                      this.dataSource.paginator = this.paginator;
                      this.dataSource.sort = this.sort
                  }
              )
          })
      );
  }

}
