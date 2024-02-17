import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquiposComponent { }
