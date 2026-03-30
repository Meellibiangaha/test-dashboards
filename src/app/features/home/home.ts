import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HomeCardComponent } from '@app/features/home/components/home-card/home-card.component';
import { HomeCardModel } from './models/home-card.model';
import { HomeService } from '@app/features/home/services/home';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NOCK_MAIN_TEXT } from './mock/home-main-text.mock';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';
import { HomeSidebarComponent } from './components/home-sidebar/home-sidebar.component';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { cardChartOptions1, defaultChartOptions, pie } from '@app/core/configs/charts-options';
import { HeaderComponent } from '@app/shared/components/header/header.component';

@Component({
    selector: 'app-home',
    imports: [HomeSidebarComponent, HeaderComponent, HomeCardComponent, LoaderComponent, NgxEchartsModule],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    providers: [
        {
            provide: NGX_ECHARTS_CONFIG,
            useFactory: () => ({ echarts: () => import('echarts') }),
        },
    ],
})
export class Home implements OnInit {
    private destroyRef = inject(DestroyRef);

    public homeService = inject(HomeService);

    public readonly homeMainText = signal<string | null>(NOCK_MAIN_TEXT);
    public readonly cardList = signal<HomeCardModel[]>([]);
    public readonly cardListFiltered = computed<HomeCardModel[]>(() => this.cardList().filter((card) => card.id < 8));
    public readonly loading = signal(false);
    // Здесь будут опции для графика
    public readonly chartOptions = signal<EChartsOption>(pie);

    public readonly cardChartOptions = signal(cardChartOptions1);


    public ngOnInit(): void {
        this.loading.set(true);
        this.homeService
            .cardList()
            .pipe(
                tap((cardList) => this.cardList.set(cardList)),
                tap(() => this.loading.set(false)),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }
}
