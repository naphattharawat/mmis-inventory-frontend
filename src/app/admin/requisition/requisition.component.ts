import { State } from '@clr/angular';
import { UploadingService } from './../../uploading.service';
import {
  Component,
  OnInit,
  ViewChild,
  NgZone,
  Inject,
  ChangeDetectorRef,
  EventEmitter
} from '@angular/core';

import { RequisitionTypeService } from "../requisition-type.service";
import { RequisitionService } from "../requisition.service";
import { AlertService } from "../../alert.service";

import { IMyOptions } from 'mydatepicker-th';

import * as moment from 'moment';

import * as _ from 'lodash';
import { IRequisitionOrderItem, IRequisitionOrder } from 'app/shared';
import { AccessCheck } from '../../access-check';
import { Router } from '@angular/router';

@Component({
  selector: 'wm-requisition',
  templateUrl: './requisition.component.html'
})
export class RequisitionComponent implements OnInit {
  @ViewChild('viewer') private viewer: any;
  @ViewChild('htmlPreview') public htmlPreview: any;
  @ViewChild('modalLoading') public modalLoading: any;

  selectedTab: any = 'waiting';

  filesToUpload: Array<File> = [];
  token: any;
  orders: any = [];
  approveds: any = [];
  unpaids: any = [];
  waitingApproves: any = [];
  requisitionSelected: Array<any> = [];
  title: any;
  isConfirm: any;
  openModalConfirm: boolean = false;
  confirmApprove: boolean = false;
  tmpOderApprove: any;
  username: any;
  password: any;
  action: any;
  page: any;
  selectedCancel: any[] = [];
  tabSelect: any = 0;

  perPage = 20;
  currentPage = 1;
  offset = 0;
  totalWaiting = 0;
  totalUnPaid = 0;
  totalWaitingApprove = 0;

  constructor(
    private alertService: AlertService,
    private requisitionService: RequisitionService,
    private accessCheck: AccessCheck,
    private router: Router,
    @Inject('API_URL') private url: string,
  ) {
    this.token = sessionStorage.getItem('token');
    this.currentPage = +sessionStorage.getItem('currentPageRequisition') ? +sessionStorage.getItem('currentPageRequisition') : 1;
  }

  async ngOnInit() {
    this.loadData();
    this.selectedTab = sessionStorage.getItem('tabRequisition');
  }

  setTapActive(tab: any) {
    this.selectedTab = tab;
    sessionStorage.setItem('tabRequisition', tab);
  }

  async loadData() {
    await this.getWaiting();
    await this.getWaitingApprove();
    await this.getApproved();
    await this.getUnPaid();
  }

  async getWaiting() {
    this.tabSelect = 1
    this.modalLoading.show();
    try {
      let rs: any = await this.requisitionService.getWating(this.perPage, this.offset);
      this.modalLoading.hide();
      if (rs.ok) {
        this.orders = rs.rows;
        this.totalWaiting = rs.total[0].total;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.modalLoading.hide();
      this.alertService.error(error.message);
    }
  }

  refreshWaiting(state: State) {
    this.offset = +state.page.from;
    sessionStorage.setItem('currentPageRequisition', this.currentPage.toString());
    this.getWaiting();
  }

  async getUnPaid() {
    this.tabSelect = 4
    this.modalLoading.show();
    try {
      let rs: any = await this.requisitionService.getUnPaid(this.perPage, this.offset);
      this.modalLoading.hide();
      if (rs.ok) {
        this.unpaids = rs.rows;
        this.totalUnPaid = rs.total[0].total;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.modalLoading.hide();
      this.alertService.error(error.message);
    }
  }

  refreshUnPaid(state: State) {
    this.offset = +state.page.from;
    sessionStorage.setItem('currentPageRequisition', this.currentPage.toString());
    this.getUnPaid();
  }

  async getWaitingApprove() {
    this.requisitionSelected = []
    this.tabSelect = 2
    this.modalLoading.show();
    try {
      let rs: any = await this.requisitionService.getWaitingApprove(this.perPage, this.offset);
      this.modalLoading.hide();
      if (rs.ok) {
        this.waitingApproves = rs.rows;
        this.totalWaitingApprove = rs.total[0].total;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.modalLoading.hide();
      this.alertService.error(error.message);
    }
  }

  refreshWaitingApprove(state: State) {
    this.offset = +state.page.from;
    sessionStorage.setItem('currentPageRequisition', this.currentPage.toString());
    this.getWaitingApprove();
  }

  async getApproved() {
    this.requisitionSelected = []
    this.tabSelect = 2
    this.modalLoading.show();
    try {
      let rs: any = await this.requisitionService.getApproved();
      this.modalLoading.hide();
      if (rs.ok) {
        this.approveds = rs.rows;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.modalLoading.hide();
      this.alertService.error(error.message);
    }
  }

  async removeOrder(order: IRequisitionOrder) {
    this.alertService.confirm('ต้องการลบรายการนี้ [' + order.requisition_code + ']')
      .then(async () => {
        this.modalLoading.show();
        try {
          let rs: any = await this.requisitionService.removeRequisitionOrder(order.requisition_order_id);
          this.modalLoading.hide();
          if (rs.ok) {
            this.alertService.success();
            this.loadData();
          } else {
            this.alertService.error(rs.error);
          }
        } catch (error) {
          this.alertService.error(error.message);
        }
      }).catch(() => {
        this.modalLoading.hide();
      });
  }

  async removeOrderConfirm(order: any) {
    this.alertService.confirm('ต้องการลบรายการนี้ [' + order.requisition_code + ']')
      .then(async () => {
        this.modalLoading.show();
        try {
          let rs: any = await this.requisitionService.removeOrderConfirm(order.confirm_id);
          this.modalLoading.hide();
          if (rs.ok) {
            this.alertService.success();
            this.loadData();
          } else {
            this.alertService.error(rs.error);
          }
        } catch (error) {
          this.alertService.error(error.message);
        }
      }).catch(() => {
        this.modalLoading.hide();
      });
  }

  async approveRequisitionCheck(order: any) {
    const accessName = 'WM_REQUISITION_APPROVE'
    this.page = 1
    this.action = 'WM_REQUISITION'
    this.title = 'รายการเบิกสินค้า'
    console.log(accessName);
    this.tmpOderApprove = order
    if (this.accessCheck.can(accessName)) {
      this.doApprove(this.tmpOderApprove)
    } else {
      this.openModalConfirm = true
    }
  }

  async checkApprove(username: any, password: any) {
    let rs: any = await this.requisitionService.checkApprove(username, password, this.action);
    console.log(rs);

    if (rs.ok) {
      if (this.page === 1) {
        this.doApprove(this.tmpOderApprove)
        this.openModalConfirm = false
      }
    } else {
      this.alertService.error('ไม่มีสิทธิ์อนุมัติ' + this.title);
    }
  }

  close() {
    this.openModalConfirm = false
    this.username = ''
    this.password = ''
  }

  doApprove(order: any) {
    this.alertService.confirm('ต้องการอนุมัติรายการนี้ ใช่หรือไม่?')
      .then(async () => {
        this.modalLoading.show();
        try {
          let rs: any = await this.requisitionService.saveApproveOrderConfirm(order.confirm_id);
          this.modalLoading.hide();
          if (rs.ok) {
            this.alertService.success();
            this.loadData();
          } else {
            this.alertService.error(rs.error);
          }
        } catch (error) {
          this.modalLoading.hide();
          this.alertService.error(error.message);
        }
      })
      .catch(() => {
        this.modalLoading.hide();
      });
  }
  printApprove() {
    let requisition_id: any = []
    let count: any = 0
    this.requisitionSelected.forEach(e => {
      if (e.is_cancel !== 'Y') {
        requisition_id.push('requisId=' + e.requisition_order_id);
        count++;
      }
    });
    if (count > 0) {
      const url = this.url + `/report/approve/requis?token=${this.token}&` + requisition_id.join('&');
      this.htmlPreview.showReport(url);
    } else {
      this.alertService.error('กรุณาเลือกรายการที่จะพิมพ์');
    }
  }
  printSetProduct() {
    let requisition_id: any = []
    let count: any = 0
    this.requisitionSelected.forEach(e => {
      if (e.is_cancel !== 'Y') {
        requisition_id.push('requisId=' + e.requisition_order_id);
        count++;
      }
    });
    if (count > 0) {
      const url = this.url + `/report/list/requis?token=${this.token}&` + requisition_id.join('&');
      this.htmlPreview.showReport(url, 'landscape');
    } else {
      this.alertService.error('กรุณาเลือกรายการที่จะพิมพ์');
    }
  }

  cancelUnpaid(order: any) {
    this.alertService.confirm('ต้องการเปลี่ยนสถานะเป็น ไม่ค้างจ่าย ใช่หรือไม่?')
      .then(async () => {
        this.modalLoading.show();
        let ids: any = [];
        ids.push(order.requisition_order_id);

        try {
          let rs: any = await this.requisitionService.cancelUnpaid(ids);
          this.modalLoading.hide();
          if (rs.ok) {
            this.alertService.success();
            this.getUnPaid();
          } else {
            this.alertService.error(rs.error);
          }
        } catch (error) {
          this.modalLoading.hide();
          this.alertService.error(JSON.stringify(error));
        }
      })
      .catch(() => {
        this.modalLoading.hide();
      });
  }

  // cancel unpaids 
  doCancelUnpaids() {
    let ids: any = [];

    this.selectedCancel.forEach(v => {
      ids.push(v.requisition_order_id);
    });

    if (ids) {
      this.alertService.confirm('ต้องการเปลี่ยนสถานะเป็น ไม่ค้างจ่าย ใช่หรือไม่?')
        .then(async () => {
          this.modalLoading.show();
          try {
            let rs: any = await this.requisitionService.cancelUnpaid(ids);
            this.modalLoading.hide();
            if (rs.ok) {
              this.alertService.success();
              this.selectedCancel = [];
              this.getUnPaid();
            } else {
              this.alertService.error(rs.error);
            }
          } catch (error) {
            this.modalLoading.hide();
            this.alertService.error(JSON.stringify(error));
          }
        })
        .catch(() => {
          this.modalLoading.hide();
        });
    } else {
      this.alertService.error('กรุณาระบุรายการที่ต้องการยกเลิก');
    }

  }
}

