import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss'
})
export class PositionComponent {
  @Input() position!: { title: string; salary: number };  // Declare the @Input property
}
