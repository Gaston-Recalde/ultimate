import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-luff',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './luff.component.html',
  styleUrl: './luff.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuffComponent { }
