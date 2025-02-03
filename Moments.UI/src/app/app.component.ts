import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWordComponent } from './components/hello-word/hello-word.component';  // Importando a classe corretamente

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWordComponent],  // Agora o componente HelloWord está importado corretamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrigido para 'styleUrls'
})
export class AppComponent {
  title = 'Moments.UI';
}
