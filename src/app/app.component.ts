import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles : [`
  h3{
    color: blue;
  }
  `]
})
export class AppComponent {
  //title = 'my-app';
  name = 'myname';
  serverElements = [{type:'server', content:"just a test", name:'TestServer'}];

  onServerCreated(serverData :{serverName :string, serverContent: string}) {
     this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
     });
   }
 
   onBlueprintCreated(blueprintData :{serverName :string, serverContent: string}) {
     this.serverElements.push({
       type: 'blueprint',
       name: blueprintData.serverName,
       content: blueprintData.serverContent
     });
   }
}
