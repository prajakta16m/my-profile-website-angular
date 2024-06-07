import { Component } from '@angular/core';
import { SafeHtmlPipe } from '../utils/safe-html.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  htmlCode = "<p>This is inner html code</p>";

}
