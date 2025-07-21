import { Component } from '@angular/core';
import {RedirectComponent} from "../../shared/components/redirect/redirect.component";

@Component({
  selector: 'app-web-scraper',
  imports: [RedirectComponent],
  templateUrl: './web-scraper.component.html',
  styleUrl: './web-scraper.component.scss'
})
export class WebScraperComponent {}
