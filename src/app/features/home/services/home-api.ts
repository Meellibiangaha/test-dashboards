import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HomeCardModel } from '../models/home-card.model';
import { MOCK_HOME_CARD } from '../mock/home-card.mock';

@Injectable({
    providedIn: 'any',
})
export class HomeApiService {
    private http = inject(HttpClient);

    public testList(): Observable<unknown> {
        return this.http.get('https://www.freepublicapis.com/api/apis?limit=10&sort=best').pipe(delay(5000)); // Искусственно замедляем ответ на 5 секунд
    }

    public cardList(): Observable<HomeCardModel[]> {
        return of(MOCK_HOME_CARD).pipe(delay(5000));
    }
}
