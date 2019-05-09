import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PickService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }


  async getList(limit: number, offset: number) {
    const rs: any = await this.authHttp.get(`${this.url}/pick/getList/${limit}/${offset}`).toPromise();
    return rs.json();
  }

  async removePick(pickId: any) {
    const rs: any = await this.authHttp.delete(`${this.url}/pick/removePick/${pickId}`).toPromise();
    return rs.json();
  }

  async approvePick(pickId: any) {
    const rs: any = await this.authHttp.post(`${this.url}/pick/approve`, {
      pickId: pickId
    }).toPromise();
    return rs.json();
  }

  async checkEdit(username: any, password: any, action: any) {
    const rs: any = await this.authHttp.post(`${this.url}/basic/checkApprove`, {
      username: username,
      password: password,
      action: action
    }).toPromise();
    return rs.json();
  }

  async savePick(pickId: any, pickDate: any, wmPick: any, products: any, peopleId: any, remark: any) {
    const rs: any = await this.authHttp.put(`${this.url}/pick/savePick`, {
      pickDate: pickDate,
      wmPick: wmPick,
      products: products,
      people_id: peopleId,
      remark: remark,
      pickId: pickId
    }).toPromise();
    return rs.json();
  }

  async getPickEdit(pickId: any) {
    const rs: any = await this.authHttp.get(`${this.url}/pick/getPickEdit/${pickId}`).toPromise();
    return rs.json();
  }

  async getPick(pickId: any) {
    const rs: any = await this.authHttp.get(`${this.url}/pick/getPick/${pickId}`).toPromise();
    return rs.json();
  }

  async gerProductReceiveNotPO(query: any) {
    const rs: any = await this.authHttp.get(`${this.url}/pick/gerProductReceiveNotPO?query=${query}`).toPromise();
    return rs.json();
  }

  async getDetail(pickId: any) {
    const rs: any = await this.authHttp.get(`${this.url}/pick/getDetail/${pickId}`).toPromise();
    return rs.json();
  }

}
