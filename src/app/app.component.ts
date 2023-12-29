import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HiddenDivsComponent } from './hidden-divs/hidden-divs.component';
import { FuelChangeComponent } from './fuel-change/fuel-change.component';
import { ChangeCardComponent } from './change-card/change-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HiddenDivsComponent, FuelChangeComponent, ChangeCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'socar-card';

  isVisibleCard: boolean = false;
  isVisibleFuel: boolean = false;
  isVisibleCardChange: boolean = false;

  // unblockCard: boolean = false;

  toggleVisibilityCard():void{
    this.isVisibleCard = !this.isVisibleCard;
  }

  toggleVisibilityFuel():void{
    this.isVisibleFuel = !this.isVisibleFuel;
  }

  toggleVisibilityCardChange():void{
    this.isVisibleCardChange = !this.isVisibleCardChange;
  }

  // onBlockCardChange(blockCard: boolean): void {
  //   this.unblockCard = blockCard;
  // }
}
