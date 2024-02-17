import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-luff',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './luff.component.html',
  styleUrl: './luff.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuffComponent { }
