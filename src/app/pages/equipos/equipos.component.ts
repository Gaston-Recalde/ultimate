import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquiposComponent { }
