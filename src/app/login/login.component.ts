import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

    this.form = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });

  }

  ngOnInit() {


  }

  onSubmit() {
    console.log( this.form.get('username').value );
    console.log( this.form.get('password').value );
    const uname = this.form.get('username').value;
    const pword = this.form.get('password').value;
    this.authService.login(uname, pword).subscribe( (success) => {
      console.log('Logged in!');
      this.router.navigate(['/site-edit']);
    }, (error) => {
      console.warn('Login failed.');
    });
  }

}
