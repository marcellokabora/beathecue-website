import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfloat',
  templateUrl: './textfloat.component.html',
  styleUrls: ['./textfloat.component.scss']
})
export class TextfloatComponent implements OnInit {


  @Input('lastone') lastone: boolean = false
  @Input('reverse') reverse: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
