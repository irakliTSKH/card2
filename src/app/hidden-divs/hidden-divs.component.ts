import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hidden-divs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hidden-divs.component.html',
  styleUrl: './hidden-divs.component.scss',
})
export class HiddenDivsComponent {
  @Input() isVisibleCard: boolean = false;

  @Output() toggle = new EventEmitter<void>();
  // @Output() blockCardChange = new EventEmitter<boolean>();

  beforeBlock: boolean = true;
  blockMessage: boolean = false;
  unblockCard: boolean = false;

  toggleVisibilityCard(): void {
    this.isVisibleCard = !this.isVisibleCard;
    this.toggle.emit();
  }

  showUnBlockMessage(): void {
    this.blockMessage = false;
    this.unblockCard = true;
  }

  block(): void {
    this.beforeBlock = false;
    this.blockMessage = true;
  }

  unBlock(): void {
    this.unblockCard = false;
    this.beforeBlock = true;
    this.toggleVisibilityCard();

    // this.blockCardChange.emit(this.unblockCard);
  }
}
