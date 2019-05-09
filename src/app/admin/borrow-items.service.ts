import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BorrowItemsService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  async getSummaryInfo(borrowId: string) {
    const rs: any = await this.authHttp.get(`${this.url}/borrow/info-summary/${borrowId}`).toPromise();
    return rs.json();
  }

  async getDetailInfo(borrowId: string) {
    const rs: any = await this.authHttp.get(`${this.url}/borrow/info-detail/${borrowId}`).toPromise();
    return rs.json();
  }

  async getReturnedDetail(returnedId: any) {
    const res = await this.authHttp.get(`${this.url}/borrow/returned/detail/${returnedId}`).toPromise();
    return res.json();
  }

  async saveBorrow(summary: Object, generics: any[]) {
    const rs: any = await this.authHttp.post(`${this.url}/borrow`, {
      summary: summary,
      generics: generics
    }).toPromise();

    return rs.json();
  }

  async saveBorrowFromNote(summary: Object, generics: any[]) {
    const rs: any = await this.authHttp.post(`${this.url}/borrow/save/from-note`, {
      summary: summary,
      generics: generics
    }).toPromise();

    return rs.json();
  }

  async approveAll(borrowIds: any[]) {
    const rs: any = await this.authHttp.post(`${this.url}/borrow/approve-all`, {
      borrowIds: borrowIds
    }).toPromise();

    return rs.json();
  }

  async approveAllOther(borrowOtherIds: any[]) {
    const rs: any = await this.authHttp.post(`${this.url}/borrow-other/approve-all`, {
      borrowOtherIds: borrowOtherIds
    }).toPromise();

    return rs.json();
  }

  async approveAllReturned(returnedIds: any[]) {
    const rs: any = await this.authHttp.post(`${this.url}/borrow/returned/approved`, {
      returnedIds: returnedIds
    }).toPromise();

    return rs.json();
  }

  async updateBorrow(borrowId: any, summary: Object, generics: any[]) {
    const rs: any = await this.authHttp.put(`${this.url}/borrow/${borrowId}`, {
      borrowId: borrowId,
      summary: summary,
      generics: generics
    }).toPromise();

    return rs.json();
  }

  async list(type: any, limit: number, offset: number) {
    const rs: any = await this.authHttp.get(`${this.url}/borrow/list?t=${type}&limit=${limit}&offset=${offset}`).toPromise();
    return rs.json();
  }

  async listOther(type: any, limit: number, offset: number) {
    const rs: any = await this.authHttp.get(`${this.url}/borrow/list/other?t=${type}&limit=${limit}&offset=${offset}`).toPromise();
    return rs.json();
  }

  async listBorrow(type: any, limit: number, offset: number) {
    const rs: any = await this.authHttp.get(`${this.url}/borrow/list-borrow?t=${type}&limit=${limit}&offset=${offset}`).toPromise();
    return rs.json();
  }

  async listOtherBorrow(type: any, limit: number, offset: number) {
    const rs: any = await this.authHttp.get(`${this.url}/borrow/list-borrow/other?t=${type}&limit=${limit}&offset=${offset}`).toPromise();
    return rs.json();
  }

  async returnedList(type: any, limit: number, offset: number) {
    const rs: any = await this.authHttp.get(`${this.url}/borrow/returned/list?t=${type}&limit=${limit}&offset=${offset}`).toPromise();
    return rs.json();
  }

  async detail(borrowId: string) {
    const rs: any = await this.authHttp.get(`${this.url}/basic/dst-borrow/detail/${borrowId}`).toPromise();
    return rs.json();
  }

  async remove(borrowId: string) {
    const rs = await this.authHttp.delete(`${this.url}/borrow/${borrowId}`).toPromise();
    return rs.json();
  }

  async removeOther(borrowId: string) {
    const rs = await this.authHttp.delete(`${this.url}/borrow/other/${borrowId}`).toPromise();
    return rs.json();
  }

  async active(borrowId: string) {
    const rs = await this.authHttp.post(`${this.url}/borrow/active`, {
      borrowId: borrowId
    }).toPromise();
    return rs.json();
  }

  async getLots(productId: any, warehouseId: any) {
    const rs = await this.authHttp.get(`${this.url}/borrow/product-warehouse-lots/${productId}/${warehouseId}`).toPromise();
    return rs.json();
  }

  async allocate(data: any, srcWarehouseId: any) {
    const rs = await this.authHttp.post(`${this.url}/generics/allocate`, {
      data: data,
      srcWarehouseId: srcWarehouseId
    }).toPromise();
    return rs.json();
  }

  async allocateBorrow(data: any, srcWarehouseId: any) {
    const rs = await this.authHttp.post(`${this.url}/generics/allocate-borrow`, {
      data: data,
      srcWarehouseId: srcWarehouseId
    }).toPromise();
    return rs.json();
  }

  async saveReceive(summary: any, products: Array<any>) {
    const res = await this.authHttp.post(`${this.url}/borrow/returned-product`, {
      summary: summary,
      products: products
    }).toPromise();

    return res.json();
  }

  async getReturnedProducts(returnedId) {
    const res = await this.authHttp.get(`${this.url}/basic/returned/product-list/${returnedId}`)
      .toPromise();
    return res.json();
  }
}
