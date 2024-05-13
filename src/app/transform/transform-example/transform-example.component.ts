import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

function transformUserName(userData:any){ 
  console.log(userData);
  for(let i=0; i<userData.length; i++){
    userData[i].name = userData[i].name.toUpperCase();
  }

  return userData;
}
@Component({
  selector: 'app-transform-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transform-example.component.html',
  styleUrl: './transform-example.component.css'
})
export class TransformExampleComponent {

  @Input({alias:"userData", transform:transformUserName}) userData:any;
  @Input() userName:any;


  constructor(){

  }

  ngOnInit(){
    console.log(this.userData);
    console.log(this.userName);
  }
}
