import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  title = 'ultimate';

  public sidenarItems = [
    { label: 'Inicio', icon: 'label', url: './home' },
    { label: 'Ultimate', icon: 'label', url: './ultimate' },
    { label: 'LUFF', icon: 'add', url: './luff' },
    { label: 'Hats', icon: 'add', url: './hats' },
    { label: 'Noticias', icon: 'search', url: './noticias' },
    { label: 'Equipos', icon: 'search', url: './equipos' },
  ]
}
