import { Component } from '@angular/core';
import {DnsClientService} from './_services/dns-client.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor  (private dnsClientService : DnsClientService,
                )
  {

  } 

 ngOnInit () {

    var value = this.dnsClientService.getAsync("gmail.com")
    .subscribe((res) =>{
                          console.log(res.json().value);
                      },
    (err)=>
    {
      console.log(err)
      return err;
    }
    );    
  }  
}
