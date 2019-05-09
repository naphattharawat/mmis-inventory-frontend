import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WarehouseProductsService {

  constructor(
    @Inject('API_URL') private url: string,
    @Inject('DOC_URL') private docUrl: string,
    private authHttp: AuthHttp
  ) { }

  async saveWarehouseProductsTemplate(templateSummary, products: Array<any>) {
    const rs: any = await this.authHttp.post(`${this.url}/warehouses/warehouseproducttemplate`, {
      templateSummary: templateSummary,
      products: products
    }).toPromise();
    return rs.json();
  }

  async updateWarehouseProductsTemplate(templateId: any, templateSubject: any, products: Array<any>) {
    const rs: any = await this.authHttp.post(`${this.url}/warehouses/updatewarehouseproducttemplate`, {
      templateId: templateId,
      templateSubject: templateSubject,
      products: products
    }).toPromise();
    return rs.json();
  }

  // แสดง template ทั้งหมด
  async getallTemplate() {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/warehouseproducttemplate`).toPromise();
    return rs.json();
  }

  async removeRequisitionTemplate(templateId: any) {
    const rs: any = await this.authHttp.delete(`${this.url}/warehouses/requisition/remove-template/${templateId}`)
      .toPromise();
    return rs.json();
  }

  // แสดงรายการ template ทั้งหมดใน warehouse
  async getTemplateInWarehouse(warehouseId: any, SourceWarehouseId: any) {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/templateinwarehouse/${warehouseId}/${SourceWarehouseId}`).toPromise();
    return rs.json();
  }

  async getAllTemplateSearch(query: any) {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/warehouseproducttemplate/search?query=${query}`).toPromise();
    return rs.json();
  }

  // แสดงรายการสินค้าใน template
  async getTemplate(templateId: any) {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/warehousetemplate/${templateId}`).toPromise();
    return rs.json();
  }
  async getTemplateDetail(templateId: any) {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/warehousetemplate/detail?templateId=${templateId}`).toPromise();
    return rs.json();
  }
  async getTemplateIssue(templateId: any) {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/warehousetemplate-issue/${templateId}`).toPromise();
    return rs.json();
  }

  async getAllTemplateSearchIssue(query: any) {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/warehouseproducttemplate-issue/search?query=${query}`).toPromise();
    return rs.json();
  }

  async removeRequisitionTemplateIssue(templateId: any) {
    const rs: any = await this.authHttp.delete(`${this.url}/warehouses/issue/remove-template/${templateId}`)
      .toPromise();
    return rs.json();
  }

  async getallTemplateIssue() {
    const rs: any = await this.authHttp.get(`${this.url}/warehouses/warehouseproducttemplate-issue`).toPromise();
    return rs.json();
  }

  async updateWarehouseProductsTemplateIssue(templateId: any, templateSubject: any, products: Array<any>) {
    const rs: any = await this.authHttp.post(`${this.url}/warehouses/updatewarehouseproducttemplate-issue`, {
      templateId: templateId,
      templateSubject: templateSubject,
      products: products
    }).toPromise();
    return rs.json();
  }

  async saveWarehouseProductsTemplateIssue(templateSummary, products: Array<any>) {
    const rs: any = await this.authHttp.post(`${this.url}/warehouses/warehouseproducttemplate-issue`, {
      templateSummary: templateSummary,
      products: products
    }).toPromise();
    return rs.json();
  }

}
