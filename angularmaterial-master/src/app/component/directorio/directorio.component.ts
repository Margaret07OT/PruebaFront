import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ambiente } from 'src/app/Model/Ambiente';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})

export class DirectorioComponent {
  customerlist: Ambiente[] = [];
  dataSource!: MatTableDataSource<Ambiente>;
  displayedColumns: string[] = ["Ambi_Codigo", "Ambi_Descripcion", "areas", "edificio", "Ambi_Piso","action"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog, private router: Router) {
    this.loadcustomer();
  }

  loadcustomer() {
    this.service.GetAmbiente().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Ambiente>(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addAmbiente(){
    this.router.navigate(['/agregarambiente'])
  }

  editAmbiente(id:string){
    this.router.navigate(['/editambiente', id]);
  }

  //Contenido del menú lateral -->
visitante(){
  this.router.navigate(['/visitante']);
}
asignatura(){
  this.router.navigate(['/asignatura']);
}

docente(){
  this.router.navigate(['/docente']);
}

graduado(){
  this.router.navigate(['/graduado']);
}

evento(){
  this.router.navigate(['/evento']);
}

placa(){
  this.router.navigate(['/placa']);
}

horario(){
  this.router.navigate(['/horario']);
}

directorio(){
  this.router.navigate(['/directorio']);
}
}
