import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/gateway';
import { GatewayWebService } from 'src/app/services/gateway-web.service';

@Component({
  selector: 'app-gateway-board',
  templateUrl: './gateway-board.component.html',
  styleUrls: ['./gateway-board.component.css']
})
export class GatewayBoardComponent implements OnInit {
  gateWays: Gateway[] = [
    {id: 1, humanName: 'gate way 1', serialNumber: 'qww', IPv4:'111.1111.111'},
    {id: 2, humanName: 'gate way 2', serialNumber: 'sdrg', IPv4:'111.9097.111'},
  ];
  constructor(private gatewayWebService: GatewayWebService) { }

  ngOnInit(): void {
   this.getData();
  }

  onAdd(gateWay: Gateway){
    console.log(gateWay);
    this.gatewayWebService.saveGateWay(gateWay)
    .subscribe(g => {},err =>{}, ()=>{this.getData()});
  }

  getData(){
    this.gatewayWebService.getAllGateways().subscribe(data =>{
      this.gateWays = data;
    })
  }

  onRemove(gateWay: Gateway){
    console.log(gateWay);
    this.gatewayWebService.removeGatewayById(gateWay.id).subscribe(d=>{}, err=>{}, ()=>{
      this.getData();
    })
  }
}
