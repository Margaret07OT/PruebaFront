import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambiente } from 'src/app/Model/Ambiente';
import { Area } from 'src/app/Model/Area';
import { Pabellon } from 'src/app/Model/Pabellon';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-agregarambiente',
  templateUrl: './agregarambiente.component.html',
  styleUrls: ['./agregarambiente.component.css']
})
export class AgregarambienteComponent {
  ambiente: Ambiente = new Ambiente;
  areas: Area[] = [];
  pabellones: Pabellon[] = [];
  id: string = '';
  urlFoto: string = '';
  invalidUrl: boolean = false;

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

onCodigoChange(value: string) {
  this.id = value; // Actualizamos el valor de codigo con el nuevo valor ingresado
}

validateUrl() {
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  this.invalidUrl = !urlPattern.test(this.urlFoto);
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
