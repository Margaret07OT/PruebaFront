import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambiente } from 'src/app/Model/Ambiente';
import { Area } from 'src/app/Model/Area';
import { Pabellon } from 'src/app/Model/Pabellon';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-editambiente',
  templateUrl: './editambiente.component.html',
  styleUrls: ['./editambiente.component.css']
})
export class EditambienteComponent {
  ambiente: Ambiente = new Ambiente;
  areas: Area[] = [];
  pabellones: Pabellon[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.service.buscarAmbiente(id).subscribe(ambiente => {
          this.ambiente = ambiente;

          this.service.GetArea().subscribe(res => {
            this.areas = res;
          });

          this.service.GetPabellon().subscribe(res => {
            this.pabellones = res;
          });

        });
      }
    });
}

loadArea() {
  this.service.GetArea().subscribe(res => {
    this.areas = res;
  });
}

loadPabellon() {
  this.service.GetPabellon().subscribe(res => {
    this.pabellones = res;
  });
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
