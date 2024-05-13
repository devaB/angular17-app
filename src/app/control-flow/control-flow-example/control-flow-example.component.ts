import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransformExampleComponent } from '../../transform/transform-example/transform-example.component';
import { CommonModule } from '@angular/common';
import { PipeExampleComponent } from '../../pipe/pipe-example/pipe-example.component';

@Component({
  selector: 'app-control-flow-example',
  standalone: true,
  imports: [FormsModule,TransformExampleComponent,PipeExampleComponent,CommonModule],
  templateUrl: './control-flow-example.component.html',
  styleUrl: './control-flow-example.component.css'
})
export class ControlFlowExampleComponent {

  userList:any = [];
  constructor(){

  }

  ngOnInit():void{
    this.userList.push(
      {name:"Devendra Barai", age:"32", department:"Software", user_id:1}
    );
    this.userList.push(
      {name:"Amit Tiwari", age:"31", department:"Cemichal", user_id:2}
    );
    this.userList.push(
      {name:"Deepak Chauhan", age:"30", department:"Dot Net", user_id:3}
    );
    this.userList.push(
      {name:"Rajan Gupta", age:"32", department:"US Process", user_id:4}
    );
    this.userList.push(
      {name:"Abhijeet", age:"31", department:"Call Center", user_id:5}
    );

    console.log(this.userList);
  }
}
