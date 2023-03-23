import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  userData: any;
  actionNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    //ความกว้างของ slide menu
    //document.getElementById("mySidenav").style.width = "300px";
  }

  closeNav() {
    //document.getElementById("mySidenav").style.width = "0";
  }
}
