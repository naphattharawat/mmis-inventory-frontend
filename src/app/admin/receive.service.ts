import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReceiveService {

  constructor(
    @Inject('API_URL') private url: string,
    @Inject('DOC_URL') private docUrl: string,
    private authHttp: AuthHttp
  ) { }

  // get conversion
  async getUnitConversion(genericId: any, orderBy: string = 'ASC') {
    const response = await this.authHttp.get(`${this.url}/units/conversion/${genericId}?orderBy=${orderBy}`)
      .toPromise();
    return response.json();
  }


  getReceiveTypes() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/receives/types`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getStatusStatus() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/receives/status`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }


  getWarehouse() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/receives/warehouse-main`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  async getCommittePO(id: any) {
    const res = await this.authHttp.get(`${this.url}/receives/po/${id}`).toPromise();
    return res.json();
  }

  async saveReceive(summary: any, products: Array<any>, closePurchase: any) {
    const res = await this.authHttp.post(`${this.url}/receives`, {
      summary: summary,
      products: products,
      closePurchase: closePurchase
    }).toPromise();

    return res.json();
  }

  async saveReceiveOther(summary: any, products: Array<any>) {
    const res = await this.authHttp.post(`${this.url}/receives/other`, {
      summary: summary,
      products: products
    }).toPromise();

    return res.json();
  }
  async checkDeleteProductWithPick(products: any, receiveId: any) {
    const res = await this.authHttp.post(`${this.url}/receives/checkDeleteProductWithPick`, {
      products: products,
      receiveId: receiveId
    }).toPromise();
    return res.json();
  }

  async getPurchaseInfo(purchaseOrderId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/purchases/info/${purchaseOrderId}`).toPromise();
    return res.json();
  }

  async updateReceiveOther(receiveOtherId: any, summary: any, products: Array<any>) {
    const res = await this.authHttp.put(`${this.url}/receives/other/${receiveOtherId}`, {
      summary: summary,
      products: products
    }).toPromise();

    return res.json();
  }


  async getExpired(limit = 15, offset = 0, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/expired/list`, {
      limit: limit,
      offset: offset,
      sort: sort
    }).toPromise();

    return res.json();
  }
  async getExpiredSearch(q) {
    const res = await this.authHttp.get(`${this.url}/receives/expired/search?q=${q}`, {
    }).toPromise();

    return res.json();
  }
  async getOtherExpired(limit = 15, offset = 0, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/other/expired/list`, {
      limit: limit,
      offset: offset,
      sort: sort
    }).toPromise();

    return res.json();
  }
  async getOtherExpiredSearch(q) {
    const res = await this.authHttp.get(`${this.url}/receives/other/expired/search?q=${q}`, {
    }).toPromise();

    return res.json();
  }

  async getReceiveOtherDetail(receiveOtherId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/other/detail/${receiveOtherId}`).toPromise();
    return res.json();
  }

  async getReceiveOtherDetailProductList(receiveOtherId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/other/detail/product-list/${receiveOtherId}`).toPromise();
    return res.json();
  }

  async removeReceiveOther(receiveOtherId: any) {
    const rs = await this.authHttp.delete(`${this.url}/receives/other/${receiveOtherId}`).toPromise();
    return rs.json();
  }

  async doApproveOtherAll(receiveOtherIds: any[], approveDate: any, comment: any) {
    const res = await this.authHttp.post(`${this.url}/receives/other/approve/all`, {
      receiveOtherIds: receiveOtherIds,
      approveDate: approveDate,
      comment: comment
    }).toPromise();
    return res.json();
  }

  async updateReceive(receiveId: any, summary: any, products: Array<any>, closePurchase: any) {
    const res = await this.authHttp.put(`${this.url}/receives/${receiveId}`, {
      summary: summary,
      products: products,
      closePurchase: closePurchase
    }).toPromise();

    return res.json();
  }

  async updatePurchaseCompleted(purchaseOrderId: any) {
    const res = await this.authHttp.put(`${this.url}/receives/purchase/completed`, {
      purchaseOrderId: purchaseOrderId
    }).toPromise();

    return res.json();
  }

  async updatePurchaseApproved(receiveId: any) {
    const res = await this.authHttp.put(`${this.url}/receives/purchase/approved`, {
      receiveId: receiveId
    }).toPromise();

    return res.json();
  }

  async getProductReceives() {
    const res = await this.authHttp.get(`${this.url}/receives/product-receives`).toPromise();
    return res.json();
  }

  async updateReceiveCommittee(receiveId: any, committeeId: any) {
    const res = await this.authHttp.put(`${this.url}/receives/committee/${committeeId}`, {
      receiveId: receiveId
    }).toPromise();
    return res.json();
  }

  async getCommittee() {
    const res = await this.authHttp.get(`${this.url}/receives/committee`).toPromise();
    return res.json();
  }

  async getCommitteeList(committeeId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/committee/${committeeId}`).toPromise();
    return res.json();
  }

  async saveApprove(receiveIds: any[], approveDate: any, comment: any) {
    const res = await this.authHttp.post(`${this.url}/receives/approve`, {
      receiveIds: receiveIds,
      approveDate: approveDate,
      comment: comment
    }).toPromise();
    return res.json();
  }

  async saveApproveOther(receiveIds: any[], approveDate: any, comment: any) {
    const res = await this.authHttp.post(`${this.url}/receives/other/approve`, {
      receiveIds: receiveIds,
      approveDate: approveDate,
      comment: comment
    }).toPromise();
    return res.json();
  }

  async getReceiveInfo(receiveId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/info?receiveId=${receiveId}`)
      .toPromise();
    return res.json();
  }

  async getReceiveProducts(receiveId) {
    const res = await this.authHttp.get(`${this.url}/receives/products?receiveId=${receiveId}`)
      .toPromise();
    return res.json();
  }

  async getReceiveOtherProducts(receiveOtherId) {
    const res = await this.authHttp.get(`${this.url}/receives/other/product-list/${receiveOtherId}`)
      .toPromise();
    return res.json();
  }

  async removeReceive(receiveId: any, purchaseOrderId: any = '') {
    purchaseOrderId = purchaseOrderId ? purchaseOrderId : ''
    const res = await this.authHttp.delete(`${this.url}/receives/remove?receiveId=${receiveId}&purchaseOrderId=${purchaseOrderId}`).toPromise();
    return res.json();
  }

  // =================== receive with purchases =================
  async getPurchasesList(limit: number = 100, offset: number = 0, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/purchases/list`, {
      limit: limit,
      offset: offset,
      sort: sort
    })
      .toPromise();

    return res.json();
  }

  async searchPurchasesList(query: string, limit: number = 100, offset: number = 0, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/s-purchases/list`, {
      query: query,
      limit: limit,
      offset: offset,
      sort: sort
    })
      .toPromise();

    return res.json();
  }

  async getPurchasesListSearch(limit: number = 100, offset: number = 0, query: any, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/purchases/list/search`, {
      limit: limit,
      offset: offset,
      query: query,
      sort: sort
    })
      .toPromise();

    return res.json();
  }

  async getPurchaseProductsList(purchaseOrderId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/purchases/product-list?purchaseOrderId=${purchaseOrderId}`)
      .toPromise();
    return res.json();
  }

  async getPurchaseCheckHoliday(date) {
    const res = await this.authHttp.get(`${this.url}/receives/purchases/check-holiday?date=${date}`)
      .toPromise();
    return res.json();
  }
  async getLastLocation(warehouseId, productId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/purchases/get-last-location?productId=${productId}&warehouseId=${warehouseId}`)
      .toPromise();
    return res.json();
  }
  async getLastLocationOther(warehouseId, productId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/purchases/get-last-location-other?productId=${productId}&warehouseId=${warehouseId}`)
      .toPromise();
    return res.json();
  }
  async getPurchaseCheckExpire(genericId: any, expiredDate: any) {
    const res = await this.authHttp.get(`${this.url}/receives/purchases/check-expire?genericId=${genericId}&expiredDate=${expiredDate}`)
      .toPromise();
    return res.json();
  }
  // =============== document service ===============
  getFiles(documentCode) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.docUrl}/uploads/info/${documentCode}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  async removeFile(documentId) {
    const rs = await this.authHttp.delete(`${this.docUrl}/uploads/${documentId}`).toPromise();
    return rs.json();
  }

  async checkApprove(username: any, password: any, action: any) {
    const rs: any = await this.authHttp.post(`${this.url}/basic/checkApprove`, {
      username: username,
      password: password,
      action: action
    }).toPromise();
    return rs.json();
  }
  async saveCost(products: any) {
    const rs: any = await this.authHttp.put(`${this.url}/receives/update/cost`, {
      products: products
    }).toPromise();
    return rs.json();
  }
  async getApprove() {
    const res = await this.authHttp.get(`${this.url}/receives/count/approve`)
      .toPromise();
    return res.json();
  }
  async getApproveOther() {
    const res = await this.authHttp.get(`${this.url}/receives/count/approve/other`)
      .toPromise();
    return res.json();
  }

  async getReceiveOtherStatusSearch(limit: number = 15, offset: number = 0, query, status, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/other/status/search`, {
      limit: limit,
      offset: offset,
      status: status,
      query: query,
      sort: sort
    }).toPromise();
    return res.json();
  }
  async getReceiveOtherStatus(limit: number = 15, offset: number = 0, status, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/other/status`, {
      limit: limit,
      offset: offset,
      status: status,
      sort: sort
    }).toPromise();
    return res.json();
  }
  async getReceiveStatus(limit: number = 15, offset: number = 0, status, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/status`, {
      limit: limit,
      offset: offset,
      status: status,
      sort: sort
    }).toPromise();
    return res.json();
  }
  async getReceiveStatusSearch(limit: number = 15, offset: number = 0, query, status, sort: any = {}) {
    const res = await this.authHttp.post(`${this.url}/receives/status/search`, {
      limit: limit,
      offset: offset,
      status: status,
      query: query,
      sort: sort
    }).toPromise();
    return res.json();
  }
  async getReport(type: any) {
    const res = await this.authHttp.get(`${this.url}/std/report?type=${type}`).toPromise();
    return res.json();
  }

  async getUnitGeneric(unitGenericId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/getUnitGeneric?unitGenericId=${unitGenericId}`).toPromise();
    return res.json();
  }
  async getASN(purchaseOrderId: any) {
    const res = await this.authHttp.get(`${this.url}/receives/asn?purchaseOrderId=${purchaseOrderId}`).toPromise();
    return res.json();
  }

  async getASNDetail(tradeCode: any) {
    const res = await this.authHttp.get(`${this.url}/receives/asn-detail?tradeCode=${tradeCode}`).toPromise();
    return res.json();
  }

}
