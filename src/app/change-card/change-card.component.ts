import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './change-card.component.html',
  styleUrl: './change-card.component.scss'
})
export class ChangeCardComponent {
  @Input() isVisibleCardChange: boolean = false;

  @Output() toggle = new EventEmitter<void>();

  cardTypeValue: string = '';
  typeStandart: boolean = false;
  typeFleet: boolean = false;
  chooseTypeDiv: boolean = true;
  

  toggleVisibilityCardChange(): void {
    this.isVisibleCardChange = !this.isVisibleCardChange;
    this.toggle.emit();
  }

  selectCardType(value: string): void{
     this.cardTypeValue = value;
  }

  chooseTypeafter(): void {
    this.chooseTypeDiv = true;
    this.typeFleet = false;
    this.typeStandart = false;
  }
  

  changeType(): void{
    if(this.cardTypeValue === 'standart'){
      this.chooseTypeDiv = !this.chooseTypeDiv
      this.typeStandart = true;
    } else if (this.cardTypeValue === 'fleet'){
      this.chooseTypeDiv = !this.chooseTypeDiv
      this.typeFleet = true;
    }
  }

}
