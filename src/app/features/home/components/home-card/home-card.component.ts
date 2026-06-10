import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { HomeCardModel } from '../../models/home-card.model';

@Component({
    selector: 'app-home-card',
    imports: [],
    templateUrl: './home-card.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
    public card = input.required<HomeCardModel>();
}
