import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-word',
  imports: [],
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.scss'
})
export class HelloWordComponent implements OnInit {

  Nome: string = 'Augusto';

  constructor(){}

  ngOnInit(): void {}
}