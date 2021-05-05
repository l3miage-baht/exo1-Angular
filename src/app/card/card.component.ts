import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() titre: string;
  @Input() sousTitre: string;
  @Input() description: string;
  @Input() lien: string;

  constructor() { }

  ngOnInit(): void {
  }

}
