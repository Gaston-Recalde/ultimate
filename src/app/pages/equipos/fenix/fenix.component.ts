import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-fenix',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fenix.component.html',
  styleUrl: './fenix.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FenixComponent { }
