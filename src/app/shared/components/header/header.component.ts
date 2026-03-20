import { Component } from '@angular/core';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-header',
  imports: [Breadcrumbs],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
