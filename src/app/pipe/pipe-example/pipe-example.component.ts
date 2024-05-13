import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {

  @Input("userData") userData:any;


  constructor(){

  }

  ngOnInit(){
    console.log("pipe : ",this.userData);
  }
}
