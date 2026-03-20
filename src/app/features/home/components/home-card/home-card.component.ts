import { Component, input } from '@angular/core';
import { HomeCardModel } from '../../models/home-card.model';

@Component({
    selector: 'app-home-card',
    imports: [],
    templateUrl: './home-card.component.html',
    styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
    public card = input.required<HomeCardModel>();
}
