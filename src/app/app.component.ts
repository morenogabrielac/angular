import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  Titulo = "Pymes Demo - 2020";
  name = "Angular " + VERSION.major;
}
