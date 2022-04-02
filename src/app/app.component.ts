import { Component } from '@angular/core';
import { SelectionService } from './selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SelectionService]
})
export class AppComponent {
  selection = 'SelectAll';
  sortSelected = '';
  title = 'Mock-Shopping';

}
