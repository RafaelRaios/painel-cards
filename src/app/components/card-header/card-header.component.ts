import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  @Input({ required: true }) image: string = "";
  @Input({ required: true }) title: string = "";
}
