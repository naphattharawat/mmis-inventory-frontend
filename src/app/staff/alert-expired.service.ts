import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertExpiredService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  getAllGenerics(genericType, query: any) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/staff/alert-expired/generics`, {
        query: query,
        genericType: genericType
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getSelectGenerics(id: any) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/staff/alert-expired/genericSelec?id=${id}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getAllProducts() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/staff/alert-expired/products`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }


  getUnsetProducts(genericType, query) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/staff/alert-expired/products/unset`, {
        genericType: genericType,
        query: query
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  saveExpiredCount(ids: any[], numDays: number) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/staff/alert-expired`, {
        ids: ids,
        numDays: +numDays
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  saveExpiredCountAll(genericType: any, numDays: number) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/staff/alert-expired/all`, {
        genericType: genericType,
        numDays: +numDays
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  saveStatus(status: string) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/staff/alert-expired/save-status`, {
        status: status
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getStatus() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/staff/alert-expired/get-status`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  validate(productId: string, lotId: string) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/staff/alert-expired/validate`, {
        productId: productId,
        lotId: lotId
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }


  getProductExpired(genericType, warehouseId, query) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(`${this.url}/staff/alert-expired/products/expired`, {
        genericType: genericType,
        warehouseId: warehouseId,
        query: query
      })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
