import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/device';
import { Gateway } from '../models/gateway';

@Injectable({
  providedIn: 'root'
})
export class GatewayWebService {
  readonly URL = ""
  constructor(private httpClient: HttpClient) { }

  getAllGateways(){
    return this.httpClient.get<any>(this.URL);
  }

  getAllDevicesByGetwayID(getwayID: number){
    return this.httpClient.get<any>("");
  }

  saveGateWay(gateWay: Gateway){
    return this.httpClient.post("", gateWay);
  }

  addDeviceToGateway(getwayID: number, device: Device){
    return this.httpClient.put("", {id: getwayID, device: device});
  }

  removeGatewayById(gateWayID: number){
    return this.httpClient.delete("");
  }
}
