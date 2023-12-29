import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fuel-change',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fuel-change.component.html',
  styleUrl: './fuel-change.component.scss'
})
export class FuelChangeComponent {

  @Input() isVisibleFuel: boolean = false;

  @Output() toggle = new EventEmitter<void>();

  isVisibleMessage: boolean = false;

  toggleVisibilityFuel(): void {
    this.isVisibleFuel = !this.isVisibleFuel;
    this.toggle.emit();
  }

  toggleIsVisibleMessage(): void {
    this.isVisibleMessage = !this.isVisibleMessage;
  }
}
