import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  btnText = 'Submit';
  url = "http://localhost:8081/email";

  @ViewChild('userInput') userInput: ElementRef;

  constructor(private http: HttpClient) {

  }
  ngOnInit() {

  }

  // Email validation
  ValidateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }

    return (false)
  }

  
  register() {


    var id = this.userInput.nativeElement.value;
    let emaildata = {
      email: id
    };

    if (id === "" || !id) {
      alert("Email ID is Empty");
      return;
    }

    if (!this.ValidateEmail(id)) {
      alert("You have entered an invalid email address!");
      return;
    }

    this.http.post<any>(this.url, emaildata).subscribe(data => {
      console.log(data);
      alert("Email has been sent");
    });

  }
}
