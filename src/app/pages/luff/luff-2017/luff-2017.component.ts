import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-luff-2017',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './luff-2017.component.html',
  styleUrl: './luff-2017.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Luff2017Component { }
