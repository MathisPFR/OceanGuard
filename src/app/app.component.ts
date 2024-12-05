import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZmpComponent } from "./components/zmp/zmp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OceanGuard';
}
