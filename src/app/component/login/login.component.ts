import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  orm!: FormGroup;
  private formSubmitAttempt: boolean | undefined;
  form: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form?.get(field)?.valid && this.form?.get(field)?.touched) ||
      (this.form?.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form && this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
  
}
