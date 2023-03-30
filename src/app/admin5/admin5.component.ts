import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-admin5',
  templateUrl: './admin5.component.html',
  styleUrls: ['./admin5.component.scss']
})
export class Admin5Component {
  userList: Array<any> = []
  myForm = new FormGroup({
    userSelected: new FormControl(''),
  });
  ngOnInit(): void {
    this.sendToUser()
  }

  sendToUser() {
    axios.get("http://10.104.6.212:1337/api/rtarf-user-register-g2s").then(res => {
      console.log(res.data);
      res.data.data.forEach((user: any) => {
        let userData = user.attributes;
        this.userList.push({
          firstname: userData.Username,
          lastname: userData.Lastname,
          email: userData.rtarfmail,
          status: "รอรับ"
        })
      });
      console.log(this.userList);
    })
    let files = localStorage.getItem("files") || ""
    let owner = localStorage.getItem("user") || ""
    let data = {
      files: JSON.parse(files),
      owner: JSON.parse(owner),
      users_action: this.myForm.value.userSelected,
      send_date: new Date().getTime()
    }
    console.log(data);

    axios.post("http://10.104.6.212:1337/api/rtarf-doc-g1s", { data: data }).then(res => {
      console.log(res.data.data);
    })

  }

  submit() {
    console.log(this.myForm.value);
    let files = localStorage.getItem("files") || ""
    let owner = localStorage.getItem("user") || ""
    let data = {
      files: JSON.parse(files),
      owner: JSON.parse(owner),
      users_action: this.myForm.value.userSelected,
      send_date: new Date().getTime()
    }
    console.log(data);

    axios.post("http://10.104.6.212:1337/api/rtarf-doc-g2s", { data: data }).then(res => {
      console.log(res.data.data);
    })

  }

}
