import { Component } from "@angular/core";

@Component({
  selector: "app-root",
 
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "my-first-app";
  WelcomeMessage="Great! you did it";

student={
  name: "Prekha",
  Age: "20"
};
students= ["Rohan","Raju","Kaju","Rahul"]
}