import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-address',
  imports: [],
  templateUrl: './address.html',
  styleUrl: './address.sass',
})
export class Address {
  result:any='';
  userid:any='';
private route = inject(ActivatedRoute);
chkParams(){
 this.result= this.route.snapshot.params['name'];
}
chkQueryParams(){
 this.route.queryParamMap.subscribe(params => {
      this.userid = params.get('id');
    });
    
}
}
