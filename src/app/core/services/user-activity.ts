import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable, Subject, switchMap, tap, throttleTime, timer } from 'rxjs';
import { USER_EVENTS } from '../configs/user-events';

@Injectable({
    providedIn: 'root',
})
export class UserActivity {
    private readonly INACTIVITY_TIME = 5 * 60 * 1000; // 5 минут
    activity$ = new Subject<void>();
    idleLogout$ = this.activity$.pipe(switchMap(() => timer(this.INACTIVITY_TIME).pipe(tap(() => this.logout()))));

    setupActivityTracking$(): Observable<unknown> {
        return merge(...USER_EVENTS.map((event) => fromEvent(document, event))).pipe(
            throttleTime(500), // чтобы браузер api и eventloop не захлебнулись
            tap(() => this.activity$.next()),
        );
    }

    private logout(): void {
        console.log('Разлогин по бездействию');
    }
}
