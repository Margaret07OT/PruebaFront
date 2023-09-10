import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { EventoComponent } from './component/evento/evento.component';
import { VisitanteComponent } from './component/visitante/visitante.component';
import { AsignaturaComponent } from './component/asignatura/asignatura.component';
import { GraduadoComponent } from './component/graduado/graduado.component';
import { DocenteComponent } from './component/docente/docente.component';
import { DirectorioComponent } from './component/directorio/directorio.component';
import { PlacaComponent } from './component/placa/placa.component';
import { HorarioComponent } from './component/horario/horario.component';
import { AgregarplacaComponent } from './component/agregarplaca/agregarplaca.component';
import { AgregarambienteComponent } from './component/agregarambiente/agregarambiente.component';
import { EditambienteComponent } from './component/editambiente/editambiente.component';
import { AgregarasignaturaComponent } from './component/agregarasignatura/agregarasignatura.component';
import { AgregardocenteComponent } from './component/agregardocente/agregardocente.component';
import { AgregareventoComponent } from './component/agregarevento/agregarevento.component';
import { AgregarhorarioComponent } from './component/agregarhorario/agregarhorario.component';
import { AgregargraduadoComponent } from './component/agregargraduado/agregargraduado.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';


const routes: Routes = [

  {path:'autocomplete',component:AutocompleteComponent},
  {path:'evento',component:EventoComponent},
  {path:'docente',component:DocenteComponent},
  {path:'graduado',component:GraduadoComponent},
  {path:'directorio',component:DirectorioComponent},
  {path:'agregarasignatura',component:AgregarasignaturaComponent},
  {path:'agregardocente',component:AgregardocenteComponent},
  {path:'placa',component:PlacaComponent},
  {path:'horario',component:HorarioComponent},
  {path: 'agregarambiente/:id', component: AgregarambienteComponent },
  {path: 'editambiente/:id', component: EditambienteComponent },
  {path:'editambiente',component:EditambienteComponent},
  {path:'agregarambiente',component:AgregarambienteComponent},
  {path:'agregarevento',component:AgregareventoComponent},
  {path:'agregargraduado',component:AgregargraduadoComponent},
  {path:'agregarhorario',component:AgregarhorarioComponent},
  {path: 'agregarplaca',component:AgregarplacaComponent},
  {path: '',component:IniciosesionComponent},
  {path: 'iniciosesion',component:IniciosesionComponent},
  {path:'visitante',component:VisitanteComponent},
  {path:'asignatura',component:AsignaturaComponent},
  {path:'graduado',component:GraduadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
