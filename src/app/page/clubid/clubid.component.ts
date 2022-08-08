import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bigpic } from '../component/bigpic/bigpic.component';
import { ApirequestService } from '../service/apirequest.service';

@Component({
  selector: 'app-clubid',
  templateUrl: '../welcome/welcome.component.scss',
  styleUrls: ['./clubid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClubidComponent {

  iBigpic: Bigpic[] = []

  constructor(
    private apirequest: ApirequestService,
    private route: ActivatedRoute,
  ) {

    this.route.params.subscribe(params => {
      this.apirequest.getDocument(params['id']).valueChanges().subscribe((club: any) => {
        this.iBigpic = [{
          id: club.id,
          event: club.name,
          color: club.color ?? 'blue',
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
        }]
      })
    })

  }


}
