import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  public nameForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  signin() {
    console.log(this.nameForm);

    let data = {
      "rtarfmail": this.nameForm.get('email')?.value,
      "Password": this.nameForm.get('password')?.value
    }
    console.log(data);


    axios.get("http://10.104.6.212:1337/api/rtarf-user-register-g2s?filters[rtarfmail][$eq]=" + this.nameForm.get('email')?.value).then(res => {
      console.log(res.data);
      if (res.data.data.length > 0) {
        window.location.href = "/home"
      } else {
        alert("email หรือรหัสผ่านผิด")
      }
    })
  }
}
