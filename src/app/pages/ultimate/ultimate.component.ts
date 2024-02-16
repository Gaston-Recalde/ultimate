import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ultimate',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ultimate.component.html',
  styleUrl: './ultimate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UltimateComponent { }
