import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
}
