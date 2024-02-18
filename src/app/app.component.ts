import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ultimate';

  public sidenarItems = [
    { label: 'Ultimate', icon: 'label', url: './ultimate' },
    { label: 'LUFF', icon: 'add', url: './luff' },
    { label: 'Hats', icon: 'add', url: './hats' },
    { label: 'Noticias', icon: 'search', url: './noticias' },
    { label: 'Equipos', icon: 'search', url: './equipos' },
  ]
}
