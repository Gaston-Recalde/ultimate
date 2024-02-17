import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-piedra-alta',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './piedraAlta.component.html',
  styleUrl: './piedraAlta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PiedraAltaComponent { }
