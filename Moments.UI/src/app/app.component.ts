import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWordComponent } from './components/hello-word/hello-word.component';
import { TesteComponent } from './components/teste/teste.component';
import { IfLoginComponent} from './components/if-login/if-login.component'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWordComponent, TesteComponent, IfLoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'Moments.UI';
  @Input() sobrenome: string = 'aaaaaaaaaa';
}