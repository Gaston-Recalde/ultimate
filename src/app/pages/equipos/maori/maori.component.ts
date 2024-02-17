import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-maori',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './maori.component.html',
  styleUrl: './maori.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaoriComponent { }
