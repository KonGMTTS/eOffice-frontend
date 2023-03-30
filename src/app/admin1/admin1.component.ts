import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.scss']
})
export class Admin1Component {
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  files: Array<any> = [];
  fileId: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('files', this.myForm.get('fileSource')?.value || '{}');

    axios.post("http://10.104.6.212:1337/api/upload", formData).then((res: any) => {
      console.log(res.data);
      let file = res.data[0]
      this.files.push(file.name)
      this.fileId.push(file.id)
      localStorage.setItem('files', JSON.stringify(this.fileId))
    }).catch(error => {
      console.log(error.message);
    });
  }

}
