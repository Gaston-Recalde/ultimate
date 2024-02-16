import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hats',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hats.component.html',
  styleUrl: './hats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HatsComponent { }
