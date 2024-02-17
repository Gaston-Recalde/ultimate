import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-espiritu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './espiritu.component.html',
  styleUrl: './espiritu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EspirituComponent { }
