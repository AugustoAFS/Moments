import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-if-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-login.component.html',
  styleUrl: './if-login.component.scss'
})
export class IfLoginComponent {
  login: boolean = true;
  
}