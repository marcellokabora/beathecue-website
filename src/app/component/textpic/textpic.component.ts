import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Bigpic } from '../bigpic/bigpic.component';

export interface Textpic {
  color: string
  reverse?: boolean
  title?: string
  items: TextpicItem[]
}

export interface TextpicItem {
  photo: string
  title: string
  infos: string
}

@Component({
  selector: 'app-textpic',
  templateUrl: './textpic.component.html',
  styleUrls: ['./textpic.component.scss']
})
export class TextpicComponent implements OnInit {

  @Input('setting') setting: Bigpic = {
    id: '1',
    event: 'Tresor',
    color: 'blue',
    photo: 'assets/back1.jpeg',
    title: 'Lorem ipsum dolor sit amet',
    infos: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    more: {
      color: 'green',
      items: [
        {
          photo: 'assets/back1.jpeg',
          title: 'Deserunt mollit anim',
          infos: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          photo: 'assets/back2.jpeg',
          title: 'Deserunt mollit anim',
          infos: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          photo: 'assets/back3.jpeg',
          title: 'Deserunt mollit anim',
          infos: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ]
    }
  }
  radio = 0
  @Input('reverse') reverse = false

  constructor() {
    // interval(5000).subscribe(() => this.radio === this.setting.items.length - 1 ? this.radio = 1 : this.radio++);
  }

  ngOnInit(): void {
  }

}
