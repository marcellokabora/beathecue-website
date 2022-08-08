import { Component, EventEmitter, Input, Output, Pipe, PipeTransform } from '@angular/core'
import { interval } from 'rxjs'
import { Club } from 'src/app/main'
import { ApirequestService } from 'src/app/service/apirequest.service'
import { Textpic } from '../textpic/textpic.component'

export interface Bigpic {
  id: string
  event: string
  color: string
  photo: string
  title: string
  infos: string
  more?: Textpic
}

@Component({
  selector: 'app-bigpic',
  templateUrl: './bigpic.component.html',
  styleUrls: ['./bigpic.component.scss']
})
export class BigpicComponent {

  @Input('setting') setting: Bigpic[] = [
    {
      id: '1',
      event: 'Tresor',
      color: 'green',
      photo: 'assets/back6.jpeg',
      title: 'Lorem ipsum dolor sit amet',
      infos: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    }
  ]
  radio = 0
  iradio: any
  @Output() changeClub = new EventEmitter<Bigpic>;

  constructor(
    private apiclub: ApirequestService
  ) { }


  ngOnChanges(): void {
    if (this.setting.length > 1)
      this.iradio = interval(8000).subscribe(() => {
        this.radio === this.setting.length - 1 ? this.radio = 0 : this.radio++
        this.changeClub.emit(this.setting[this.radio])
      })
  }

  iRadio() {
    if (this.setting.length > 1)
      this.iradio.unsubscribe()
    this.changeClub.emit(this.setting[this.radio])
  }

}


@Pipe({ name: 'filterby' })
export class pipeFilterBy implements PipeTransform {
  transform(items: Bigpic[]): Bigpic[] {
    return items.filter((item: Bigpic, index: number) => index < 3)
  }
}