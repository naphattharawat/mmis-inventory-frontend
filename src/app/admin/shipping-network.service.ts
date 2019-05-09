import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShippingNetworkService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  async saveNetwork(srcWarehouseId: string, dstWarehouseId: string, transferType: string, isActive: string) {
    const res = await this.authHttp.post(`${this.url}/shipping-networks`, {
      srcWarehouseId: srcWarehouseId,
      dstWarehouseId: dstWarehouseId,
      transferType: transferType,
      isActive: isActive
    }).toPromise();
    return res.json();
  }

  async isActive(id: any, isActive: any) {
    const res = await this.authHttp.put(`${this.url}/shipping-networks/isactive`, {
      id: id,
      isActive: isActive
    }).toPromise();
    return res.json();
  }

  async updateNetwork(shipNetworkId: any, srcWarehouseId: string, dstWarehouseId: string, transferType: string) {
    const res = await this.authHttp.put(`${this.url}/shipping-networks`, {
      id: shipNetworkId,
      srcWarehouseId: srcWarehouseId,
      dstWarehouseId: dstWarehouseId,
      transferType: transferType,
    }).toPromise();
    return res.json();
  }

  async getSearchList(query: any) {
    const res = await this.authHttp.post(`${this.url}/shipping-networks/search`, {
      query: query
    }).toPromise();
    return res.json();
  }
  async getList() {
    const res = await this.authHttp.get(`${this.url}/shipping-networks`).toPromise();
    return res.json();
  }

  async getListEdit(networkId: any) {
    const res = await this.authHttp.get(`${this.url}/shipping-networks/getlist/${networkId}`).toPromise();
    return res.json();
  }

  async removeNetwork(networkId: any) {
    const res = await this.authHttp.delete(`${this.url}/shipping-networks/${networkId}`).toPromise();
    return res.json();
  }
}
