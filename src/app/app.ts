import { Component, DestroyRef, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserActivity } from './core/services/user-activity';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.scss',
})
export class App implements OnInit {
    private userActivityService = inject(UserActivity);
    private destroyRef = inject(DestroyRef);
    ngOnInit(): void {
        this.userActivityService.setupActivityTracking$().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
        this.userActivityService.idleLogout$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
}
