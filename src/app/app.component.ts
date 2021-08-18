import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';


declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication';
  isSignedIn = false;

  constructor(
    router: Router
    ) {
    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', 'G-E8KL5F6SEC', {'sign_up':e.urlAfterRedirects});
    });

    }

    trackMe() {
      gtag('event', 'TRACK_ME_BUTTON_CLICKED', {
      'event_category': 'BUTTON_CLICK',
      'event_label': 'Track Me Click',
      'value': 'Put a value here that is meaningful with respect to the click event'   })
      }
}
