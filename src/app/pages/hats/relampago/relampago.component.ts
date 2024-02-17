import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-relampago',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './relampago.component.html',
  styleUrl: './relampago.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelampagoComponent { }
