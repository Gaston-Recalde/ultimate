import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UltimateComponent } from './pages/ultimate/ultimate.component';
import { LuffComponent } from './pages/luff/luff.component';
import { HatsComponent } from './pages/hats/hats.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { Luff2017Component } from './pages/luff/luff-2017/luff-2017.component';
import { Luff2023Component } from './pages/luff/luff-2023/luff-2023.component';
import { PiedraAltaComponent } from './pages/hats/piedraAlta/piedraAlta.component';
import { RelampagoComponent } from './pages/hats/relampago/relampago.component';
import { EspirituComponent } from './pages/hats/espiritu/espiritu.component';
import { RejunteComponent } from './pages/equipos/rejunte/rejunte.component';
import { FenixComponent } from './pages/equipos/fenix/fenix.component';
import { MaoriComponent } from './pages/equipos/maori/maori.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ultimate', component: UltimateComponent },
    { path: 'luff', component: LuffComponent,
        children: [
            { path: 'luff-2017', component: Luff2017Component },
            { path: 'luff-2023', component: Luff2023Component }
        ]    
    },
    { path: 'hats', component: HatsComponent,
        children: [
            { path: 'piedraAlta', component: PiedraAltaComponent },
            { path: 'relampago', component: RelampagoComponent },
            { path: 'espiritu', component: EspirituComponent },
        ]
    },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'equipos', component: EquiposComponent,
        children: [
            { path: 'rejunte', component: RejunteComponent },
            { path: 'fenix', component: FenixComponent },
            { path: 'maori', component: MaoriComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

