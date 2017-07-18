import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Switchboard';
  switches: Array<any> = [];
  switchstate: Array<any> = [];

  fillswitches() {
    for(let i = 0; i < 10; i++){
      this.switches.push('Off')
      this.switchstate.push({'idx': i, 'status': 'Off','buttoncolor': 'red'})
    }
  }

  ngOnInit() {
    this.fillswitches();
  }

  toggleswitch(switchvalue, idx){
    for(var s = 0; s < this.switches.length; s++ ){
      console.log(this.switches[s]);
      console.log(this.switchstate);
      if(s === idx){
        if(this.switches[s] === 'Off'){
          this.switches[s] = 'On';
          this.switchstate[s].buttoncolor = 'green';
          this.switchstate[s].status = 'On';          
        } else {
          this.switches[s] = 'Off';
          this.switchstate[s].buttoncolor = 'red';
          this.switchstate[s].status = 'Off'; 
        }
        console.log(this.switches[s].status, this.switches[s].buttoncolor )
      }
    }
  }
}