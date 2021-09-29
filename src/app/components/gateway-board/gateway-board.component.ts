import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/gateway';

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
  constructor() { }

  ngOnInit(): void {
  }

}
