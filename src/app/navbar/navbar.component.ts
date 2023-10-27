import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navs: string[] = ['Home', 'Invoice', 'About', 'ContactUs'];
  msg: any = 'Hello Guide';

  constructor() {}

  // call function inside our project component
  ngOnInit(): void {
    this.display();
  }

  // use for display inside console
  display() {
    console.log('==>', this.navs, this.msg);
  }

  showData() {
    return 100 - 32;
  }

  changeMsg() {
    this.msg = 'Hii Bro!';
  }
}
