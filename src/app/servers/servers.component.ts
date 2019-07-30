import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false ;
  serverCreationStatus = "No server created";
  serverName ='';
  serverCreated = false;
  servers = ['Testserver', 'demoserver'];
   
  userName = '';
  empty = (this.userName.length > 0)? false: true;

  btnCLicks = [];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
   // this.serverCreationStatus = "Server with name "+this.serverName+ " is Created Successfully";
   this.serverCreated = true;
    this.serverCreationStatus = `Server with name ${this.serverName} is Created Successfully`;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onReset(event:Event){
    this.userName = '';
  }

  onBtnClick(){
    this.btnCLicks.push(this.btnCLicks.length+1);

  }
  
}
