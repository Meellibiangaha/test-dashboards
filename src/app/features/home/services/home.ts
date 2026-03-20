import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HomeApiService } from './home-api';
import { HomeCardModel } from '../models/home-card.model';

@Injectable({
    providedIn: 'any',
})
export class HomeService {
    private api = inject(HomeApiService);

    public cardList(): Observable<HomeCardModel[]> {
        return this.api.cardList().pipe(
            catchError((err) => {
                console.error(err);
                return of([]);
            }),
        );
    }
}
