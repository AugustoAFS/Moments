import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent implements OnInit  {
@Input() sob: string = '';

constructor(){}

ngOnInit(): void {}
}
