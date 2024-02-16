import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UltimateComponent } from './pages/ultimate/ultimate.component';
import { LuffComponent } from './pages/luff/luff.component';
import { HatsComponent } from './pages/hats/hats.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { EquiposComponent } from './pages/equipos/equipos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ultimate', component: UltimateComponent },
    { path: 'luff', component: LuffComponent },
    { path: 'hats', component: HatsComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'equipos', component: EquiposComponent }
];
