import { AdditionEditComponent } from './addition-edit/addition-edit.component';
import { AdditionComponent } from './addition/addition.component';
import { CalculateMinMaxComponent } from './calculate-min-max/calculate-min-max.component';
import { TransectionTypeComponent } from './transection-type/transection-type.component';
import { ReceiveotherTypeComponent } from './receiveother-type/receiveother-type.component';
import { PeriodComponent } from './period/period.component';
import { ShippingNetworkComponent } from './shipping-network/shipping-network.component';
import { CountingAdjustComponent } from './counting-adjust/counting-adjust.component';
import { CountingVerifyComponent } from './counting-verify/counting-verify.component';
import { CountingNewComponent } from './counting-new/counting-new.component';
import { CountingComponent } from './counting/counting.component';
import { ProductExpiredComponent } from './reports/product-expired/product-expired.component';
import { ProductsComponent } from './products/products.component';
import { DonatorsComponent } from './donators/donators.component';
import { TransferNewComponent } from './transfer-new/transfer-new.component';
import { TransferComponent } from './transfer/transfer.component';
import { AdminGuard } from './../admin-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { LayoutComponent } from './layout/layout.component';
// pages
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { WarehouseTypeComponent } from './warehouse-type/warehouse-type.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ReceiveComponent } from './receive/receive.component';
import { ReceivePurchaseComponent } from './receive-purchase/receive-purchase.component';
// import { ReceiveCheckComponent } from './receive-check/receive-check.component';
import { WarehouseDetailComponent } from './warehouse-detail/warehouse-detail.component';
import { AbcSettingComponent } from './abc-setting/abc-setting.component';
import { VenSettingComponent } from './ven-setting/ven-setting.component';
import { AbcVenComponent } from './abc-ven/abc-ven.component';
import { WarehouseProductsComponent } from './warehouse-products/warehouse-products.component';
import { WarehouseProductsDetailComponent } from './warehouse-products-detail/warehouse-products-detail.component';

// common page
import { AlertExpiredComponent } from './alert-expired/alert-expired.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { UnitissueComponent } from './unitissue/unitissue.component';
import { ReturningComponent } from './returning/returning.component';

// reports
import { ProductRemainComponent as ReportProductRemain } from './reports/product-remain/product-remain.component';
import { ReceivesComponent as ReportReceives } from './reports/receives/receives.component';
import { StockCardComponent } from './reports/stock-card/stock-card.component';

// receive other
import { ReceiveOtherComponent } from './receive-other/receive-other.component';
import { ReceiveEditComponent } from '../receive-edit/receive-edit.component';

// his mapping
import { HisMappingsComponent } from './his-mappings/his-mappings.component';

import { IssuesComponent } from '../issues/issues.component';
import { IssuesNewComponent } from '../issues-new/issues-new.component';

import { ReceivePlanningComponent } from '../receive-planning/receive-planning.component';
import { ReceivePlanningNewComponent } from '../receive-planning-new/receive-planning-new.component';
import { ReceivePlanningEditComponent } from '../receive-planning-edit/receive-planning-edit.component';
import { ReceiveOtherEditComponent } from '../receive-other-edit/receive-other-edit.component';
import { IssuesEditComponent } from '../issues-edit/issues-edit.component';
import { TransferEditComponent } from '../transfer-edit/transfer-edit.component';
import { HisIssueTransactionComponent } from '../his-issue-transaction/his-issue-transaction.component';
import { WarehouseProductPlanningComponent } from '../warehouse-product-planning/warehouse-product-planning.component';

import { AuthReceive } from '../../auth-receive.service';
import { AuthTransfer } from '../../auth-transfer.service';
import { AuthRequisition } from '../../auth-requisition.service';
import { AuthPeriod } from '../../auth-period.service';
import { AuthShippingNetwork } from '../../auth-shipping-network.service';
import { AuthHISTransaction } from '../../auth-his-transaction.service';
import { AuthHISMapping } from '../../auth-his-mapping.service';
import { AuthWarehouseManagement } from '../../auth-warehouse-management.service';
import { ProductManufactureComponent } from '../reports/product-manufacture/product-manufacture.component';
import { ValueProductsComponent } from '../reports/value-products/value-products.component';
import { PurchasingNotgiveawayComponent } from '../reports/purchasing-notgiveaway/purchasing-notgiveaway.component'
import { InventoryStatusComponent } from '../reports/inventory-status/inventory-status.component';
import { BorrowNoteComponent } from '../borrow-note/borrow-note.component';
import { BorrowNoteNewComponent } from '../borrow-note-new/borrow-note-new.component';
import { ProductSummaryComponent } from '../reports/product-summary/product-summary.component';
import { ProductReceiveComponent } from '../reports/product-receive/product-receive.component';
import { SummaryDisbursementComponent } from './reports/summary-disbursement/summary-disbursement.component';
import { CodeMappingComponent } from './code-mapping/code-mapping.component';
import { AdditionWarehouseComponent } from './addition-warehouse/addition-warehouse.component';
import { AdditionGenericComponent } from './addition-generic/addition-generic.component';
import { RequisitionTypeComponent } from './requisition-type/requisition-type.component';
import { RequisitionNewComponent } from './requisition-new/requisition-new.component';
import { RequisitionConfirmComponent } from './requisition-confirm/requisition-confirm.component';
import { RequisitionConfirmEditComponent } from './requisition-confirm-edit/requisition-confirm-edit.component';
import { RequisitionConfirmUnpaidComponent } from './requisition-confirm-unpaid/requisition-confirm-unpaid.component';
import { RequisitionTemplateComponent } from './requisition-template/requisition-template.component';
import { RequisitionTemplateNewComponent } from './requisition-template-new/requisition-template-new.component';
import { RequisitionTemplateEditComponent } from './requisition-template-edit/requisition-template-edit.component';

const routes: Routes = [
  {
    path: 'requisition',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', canActivate: [AuthRequisition], component: RequisitionComponent },
      { path: 'requisition-type', component: RequisitionTypeComponent },
      { path: 'receiveother-type', component: ReceiveotherTypeComponent },
      { path: 'requisition/new', canActivate: [AuthRequisition], component: RequisitionNewComponent },
      { path: 'requisition/edit/:requisitionId', canActivate: [AuthRequisition], component: RequisitionNewComponent },
      { path: 'requisition/confirm', canActivate: [AuthRequisition], component: RequisitionConfirmComponent },
      { path: 'requisition/confirm/edit', canActivate: [AuthRequisition], component: RequisitionConfirmEditComponent },
      { path: 'requisition/confirm-unpaid', canActivate: [AuthRequisition], component: RequisitionConfirmUnpaidComponent },
      { path: 'requisition-templates', canActivate: [AuthRequisition], component: RequisitionTemplateComponent },
      { path: 'requisition-templates/new', canActivate: [AuthRequisition], component: RequisitionTemplateNewComponent },
      { path: 'requisition-templates/edit/:templateId', canActivate: [AuthRequisition], component: RequisitionTemplateEditComponent },
      { path: 'borrow/returning/:borrowId', component: ReturningComponent },
      { path: 'alert-expired', component: AlertExpiredComponent },
      { path: 'unitissue', component: UnitissueComponent },
      { path: 'reports/receives', component: ReportReceives },
      { path: 'reports/product-remain', component: ReportProductRemain },
      { path: 'reports/product-expired', component: ProductExpiredComponent },
      { path: 'reports/product-manufacture', component: ProductManufactureComponent },
      { path: 'reports/value-products', component: ValueProductsComponent },
      { path: 'reports/product-summary', component: ProductSummaryComponent },
      { path: 'reports/stock-card', component: StockCardComponent },
      { path: 'reports/purchasing-notgiveaway', component: PurchasingNotgiveawayComponent },
      { path: 'reports/inventory-status', component: InventoryStatusComponent },
      { path: 'reports/product-receive', component: ProductReceiveComponent },
      { path: 'reports/summary-disbursement', component: SummaryDisbursementComponent },
      { path: 'transfer', canActivate: [AuthTransfer], component: TransferComponent },
      { path: 'transfer/new', canActivate: [AuthTransfer], component: TransferNewComponent },
      { path: 'transfer/edit', canActivate: [AuthTransfer], component: TransferEditComponent },
      { path: 'warehouse-products', component: WarehouseProductsComponent },
      { path: 'warehouse-products/details/:warehouseId', component: WarehouseProductsDetailComponent },
      { path: 'code-mapping', component: CodeMappingComponent },
      // { path: 'lots', component: LotsComponent },
      { path: 'donators', component: DonatorsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'counting', component: CountingComponent },
      { path: 'counting/new', component: CountingNewComponent },
      { path: 'counting/verify/:countId', component: CountingVerifyComponent },
      { path: 'counting/adjust/:countId', component: CountingAdjustComponent },
      { path: 'shipping-network', canActivate: [AuthShippingNetwork], component: ShippingNetworkComponent },
      { path: 'his-mapping', canActivate: [AuthHISMapping], component: HisMappingsComponent },
      { path: 'his-issue-transaction', canActivate: [AuthHISTransaction], component: HisIssueTransactionComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'issues/new', component: IssuesNewComponent },
      { path: 'issues/edit', component: IssuesEditComponent },
      { path: 'receive-planning', component: ReceivePlanningComponent },
      { path: 'receive-planning/new', component: ReceivePlanningNewComponent },
      { path: 'receive-planning/edit/:warehouseId', component: ReceivePlanningEditComponent },
      { path: 'borrow-notes', component: BorrowNoteComponent },
      { path: 'borrow-notes/new', component: BorrowNoteNewComponent },
      { path: 'borrow-notes/:borrowNoteId/edit', component: BorrowNoteNewComponent },
      { path: 'min-max', component: CalculateMinMaxComponent },
      { path: 'addition', component: AdditionComponent },
      { path: 'addition/warehouse', component: AdditionWarehouseComponent },
      { path: 'addition/generic', component: AdditionGenericComponent },
      { path: 'addition/edit/:additionId', component: AdditionEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
