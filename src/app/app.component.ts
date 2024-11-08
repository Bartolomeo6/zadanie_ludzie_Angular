import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FormularzComponent } from "./formularz/formularz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularzComponent, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zainteresowania';
  domek_emoji: string = '🏠';
  czlowiek_emoji: string = '🙎';
}
