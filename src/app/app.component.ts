import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowExampleComponent } from './control-flow/control-flow-example/control-flow-example.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Training';
}
