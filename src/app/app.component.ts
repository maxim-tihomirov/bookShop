import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false })
  appTitle: ElementRef;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Books shop';
  }
}
