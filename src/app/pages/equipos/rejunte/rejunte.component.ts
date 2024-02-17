import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rejunte',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './rejunte.component.html',
  styleUrl: './rejunte.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RejunteComponent { }
