import { Component, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApirequestService } from 'src/app/service/apirequest.service';
import { LoginComponent } from '../login/login.component';

interface selectClub {
  name: string
  id: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  searchControl: FormControl = new FormControl('')
  isearch: boolean = true

  options: selectClub[] = []
  filteredOptions: Observable<selectClub[]> = of()

  constructor(
    public auth: AngularFireAuth,
    private dialog: MatDialog,
    private apiclubs: ApirequestService,
    private router: Router
  ) {
    // this.searchControl.valueChanges.subscribe(value => this.apiclubs.searchclub = value)

    this.apiclubs.getCollection().valueChanges().subscribe(values => this.options = values.map(item => { return { name: item.name, id: item.id } }))

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      // startWith(''),
      map(value => this._filter(value || '')),
    );


  }

  private _filter(value: string): selectClub[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  iLogout() {
    this.auth.signOut()
  }

  iLogin() {
    this.dialog.open(LoginComponent, {
      panelClass: 'dialoglogin'
    })
  }

  iLink(url: string) {
    window.open(url, '_blank')
  }

  iSelect(id: string) {
    this.router.navigate(['club', id]);
  }

}
