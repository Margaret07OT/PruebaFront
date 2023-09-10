import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventoComponent } from './component/evento/evento.component';
import { VisitanteComponent } from './component/visitante/visitante.component';
import { AsignaturaComponent } from './component/asignatura/asignatura.component';
import { DocenteComponent } from './component/docente/docente.component';
import { GraduadoComponent } from './component/graduado/graduado.component';
import { HorarioComponent } from './component/horario/horario.component';
import { PlacaComponent } from './component/placa/placa.component';
import { DirectorioComponent } from './component/directorio/directorio.component';
import { AgregarplacaComponent } from './component/agregarplaca/agregarplaca.component';
import { AgregarambienteComponent } from './component/agregarambiente/agregarambiente.component';
import { EditambienteComponent } from './component/editambiente/editambiente.component';
import { AgregarasignaturaComponent } from './component/agregarasignatura/agregarasignatura.component';
import { AgregardocenteComponent } from './component/agregardocente/agregardocente.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { AgregareventoComponent } from './component/agregarevento/agregarevento.component';
import { AgregarhorarioComponent } from './component/agregarhorario/agregarhorario.component';
import { AgregargraduadoComponent } from './component/agregargraduado/agregargraduado.component';



@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    EventoComponent,
    VisitanteComponent,
    AsignaturaComponent,
    DocenteComponent,
    GraduadoComponent,
    PlacaComponent,
    HorarioComponent,
    DirectorioComponent,
    IniciosesionComponent,
    AgregarplacaComponent,
    AgregargraduadoComponent,
    AgregarambienteComponent,
    AgregarhorarioComponent,
    EditambienteComponent,
    AgregareventoComponent,
    AgregarasignaturaComponent,
    AgregardocenteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
