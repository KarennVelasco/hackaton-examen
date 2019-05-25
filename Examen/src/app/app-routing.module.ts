import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'olvido-c', loadChildren: './olvido-c/olvido-c.module#OlvidoCPageModule' },
  { path: 'add-map', loadChildren: './add-map/add-map.module#AddMapPageModule' },
  { path: 'formularioexamen', loadChildren: './formularioexamen/formularioexamen.module#FormularioexamenPageModule' },
  { path: 'examen-alumnos', loadChildren: './examen-alumnos/examen-alumnos.module#ExamenAlumnosPageModule' },
  { path: 'materias', loadChildren: './materias/materias.module#MateriasPageModule' },
  { path: 'escuelas', loadChildren: './escuelas/escuelas.module#EscuelasPageModule' },
  { path: 'temas', loadChildren: './temas/temas.module#TemasPageModule' },
  { path: 'grupos', loadChildren: './grupos/grupos.module#GruposPageModule' },
  { path: 'periodos', loadChildren: './periodos/periodos.module#PeriodosPageModule' }
  { path: 'examen-alumnos', loadChildren: './examen-alumnos/examen-alumnos.module#ExamenAlumnosPageModule' },
  { path: 'indexmateria', loadChildren: './indexmateria/indexmateria.module#IndexmateriaPageModule' }
];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
