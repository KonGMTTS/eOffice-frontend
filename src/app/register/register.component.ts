import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public nameForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      rtarfId: '',
      email: '',
      password: '',
    });
  }

  signin() {
    let data = {
      "Username": this.nameForm.get('firstname')?.value,
      "Lastname": this.nameForm.get('lastname')?.value,
      "RTARF_ID": this.nameForm.get('rtarfId')?.value,
      "rtarfmail": this.nameForm.get('email')?.value,
      "Password": this.nameForm.get('password')?.value
    }
    console.log(data);

    axios.post("http://10.104.6.212:1337/api/rtarf-user-register-g2s", { data: data }).then(res => {
      console.log(res.data);
      this.nameForm.reset();
    })
  }
}
