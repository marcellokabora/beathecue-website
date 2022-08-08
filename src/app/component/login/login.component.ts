import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  formGroup: UntypedFormGroup
  errorEmail = false
  errorPassword = false
  loading = false
  hide = true

  constructor(
    private formBuilder: UntypedFormBuilder,
    public auth: AngularFireAuth,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
    this.formGroup.valueChanges.subscribe(value => {
      this.errorEmail = false
      this.errorPassword = false
    })
  }

  onSubmit() {
    // if (this.formGroup.valid) {
    //   this.loading = true
    //   this.auth.signInWithEmailAndPassword(this.formGroup.controls.email.value, this.formGroup.controls.password.value).then(() => {
    //     this.dialogRef.close()
    //   }).catch(error => {
    //     this.loading = false
    //     this.errorEmail = error.code === 'auth/user-not-found'
    //     this.errorPassword = error.code === 'auth/wrong-password'
    //   })
    // }
  }

}
