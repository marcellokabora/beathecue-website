import { Component, ViewEncapsulation } from '@angular/core'
import { Bigpic } from '../component/bigpic/bigpic.component'
import { Club } from '../main'
import { ApirequestService } from '../service/apirequest.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent {

  iBigpic: Bigpic[] = []
  clubDisplayed: Bigpic | undefined

  constructor(
    private apirequest: ApirequestService
  ) {


    this.apirequest.getCollection().valueChanges().subscribe((clubs: Club[]) => {
      this.iBigpic = clubs.map(club => {
        return {
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
        }
      }).reverse()
      this.clubDisplayed = this.iBigpic[0]
      console.log(this.iBigpic);
    })

  }



}
