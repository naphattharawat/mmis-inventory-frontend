import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BorrowOtherService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  async saveIssue(summary: any, products: any) {
    const rs = await this.authHttp.post(`${this.url}/borrow-other`, {
      summary: summary,
      products: products
    }).toPromise();
    return rs.json();
  }

  async getWarehouses(borrowId: any) {
    const rs = await this.authHttp.get(`${this.url}/borrow-other/warehouses?borrowId=${borrowId}`).toPromise();
    return rs.json();
  }

  async _getIssues(warehouseId: any) {
    const rs = await this.authHttp.get(`${this.url}/_getissues/${warehouseId}`).toPromise();
    return rs.json();
  }
  async getProductIssues(id: any) {
    const rs = await this.authHttp.get(`${this.url}/borrow-other/getproduct/${id}`).toPromise();
    return rs.json();
  }

  async updateIssue(borrowId: any, summary: any, products: any) {
    const rs = await this.authHttp.put(`${this.url}/borrow-other/${borrowId}`, {
      summary: summary,
      products: products
    }).toPromise();
    return rs.json();
  }

  async getGenericList(borrowId: any) {
    const rs = await this.authHttp.get(`${this.url}/borrow-other/generic-list/${borrowId}`).toPromise();
    return rs.json();
  }

  async getEditProductList(borrowId: any) {
    const rs = await this.authHttp.get(`${this.url}/borrow-other/info/products?borrowId=${borrowId}`).toPromise();
    return rs.json();
  }
  async getEditGenericList(borrowId: any) {
    const rs = await this.authHttp.get(`${this.url}/borrow-other/info/generics?borrowId=${borrowId}`).toPromise();
    return rs.json();
  }

  async getIssuesProduct(data: any) {
    const rs = await this.authHttp.post(`${this.url}/generics/allocate/baseunit`, { data: data }).toPromise();
    return rs.json();
  }
}
