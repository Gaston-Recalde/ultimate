import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-luff-2023',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './luff-2023.component.html',
  styleUrl: './luff-2023.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Luff2023Component { }
