import '@clr/icons';
import '@clr/icons/shapes/all-shapes';
import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AgxTypeaheadModule } from '@siteslave/agx-typeahead';
import { MyDatePickerTHModule } from 'mydatepicker-th';
declare var require: any; // highcharts


// start module
import { AdminRoutingModule } from './admin-routing.module';
import { AuthModule } from '../auth/auth.module';
import { DirectivesModule } from '../directives/directives.module';
import { GridDetailModule } from './../grid-detail/grid-detail.module';
import { HelperModule } from '../helper/helper.module';
import { ModalsModule } from './../modals/modals.module';
import { ToolsModule } from './tools/tools.module';
// end module

// start service
import { AbcVenService } from './abc-ven.service';
import { AdditionService } from 'app/admin/addition.service';
import { AdjustStockService } from './adjust-stock.service';
import { AlertExpiredService } from './alert-expired.service';
import { AlertService } from '../alert.service';
import { BorrowItemsService } from './borrow-items.service';
import { BorrowNoteService } from './borrow-note.service';
import { BorrowOtherService } from './borrow-other.service';
import { CountingService } from './counting.service';
import { DateService } from './../date.service';
import { DonatorService } from './donator.service';
import { HisTransactionService } from 'app/admin/his-transaction.service';
import { IssueService } from './issue.service';
import { MinMaxService } from './min-max.service';
import { PickService } from './pick.service';
import { ProductsService } from './products.service';
import { ReceiveotherTypeService } from './receiveother-type.service';
import { ReceiveService } from './receive.service';
import { ReportProductsService } from './reports/reports-products.service';
import { RequisitionService } from './requisition.service';
import { RequisitionTypeService } from './requisition-type.service';
import { ReturnBudgetService } from './return-budget.service';
import { ShippingNetworkService } from './shipping-network.service';
import { ToolsService } from './tools.service';
import { TransectionTypeService } from './transection-type.service';
import { TransferService } from './transfer.service';
import { UploadingService } from './../uploading.service';
import { WarehouseProductsService } from './warehouse-products.service';
import { WarehouseService } from './warehouse.service';
import { WarehouseTypeService } from './warehouse-type.service';
// end service

// start pipe
import { MonthToThPipe } from 'app/helper/month-to-th.pipe';
import { MonthDateperiodPipe } from 'app/helper/month-dateperiod.pipe';
import { ToThaiDatePipe } from '../helper/to-thai-date.pipe';
import { YearThaiPipe } from 'app/helper/year-thai.pipe';
// end pipe

// start component
import { AbcSettingComponent } from './abc-setting/abc-setting.component';
import { AbcVenComponent } from './abc-ven/abc-ven.component';
import { AccessCheck } from '../access-check';
import { AdditionComponent } from './addition/addition.component';
import { AdditionEditComponent } from './addition-edit/addition-edit.component';
import { AdditionGenericComponent } from './addition-generic/addition-generic.component';
import { AdditionWarehouseComponent } from './addition-warehouse/addition-warehouse.component';
import { AdjustStockComponent } from './adjust-stock/adjust-stock.component';
import { AdjustStockNewComponent } from './adjust-stock-new/adjust-stock-new.component';
import { AlertExpiredComponent } from './alert-expired/alert-expired.component';
import { BorrowComponent } from './borrow/borrow.component';
import { BorrowEditComponent } from './borrow-edit/borrow-edit.component';
import { BorrowNewComponent } from './borrow-new/borrow-new.component';
import { BorrowNoteComponent } from './borrow-note/borrow-note.component';
import { BorrowNoteNewComponent } from './borrow-note-new/borrow-note-new.component';
import { BorrowotherEditComponent } from './borrowother-edit/borrowother-edit.component';
import { BorrowotherNewComponent } from './borrowother-new/borrowother-new.component';
import { CalculateMinMaxComponent } from 'app/admin/calculate-min-max/calculate-min-max.component';
import { ChartModule } from 'angular2-highcharts';
import { CodeMappingComponent } from './code-mapping/code-mapping.component';
import { CountingAdjustComponent } from './counting-adjust/counting-adjust.component';
import { CountingComponent } from './counting/counting.component';
import { CountingNewComponent } from './counting-new/counting-new.component';
import { CountingVerifyComponent } from './counting-verify/counting-verify.component';
import { DonatorsComponent } from './donators/donators.component';
import { ExportdataComponent } from './exportdata/exportdata.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { HisIssueTransactionComponent } from './his-issue-transaction/his-issue-transaction.component';
import { HisMappingsComponent } from './his-mappings/his-mappings.component';
import { InventoryStatusComponent } from './reports/inventory-status/inventory-status.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesEditComponent } from './issues-edit/issues-edit.component';
import { IssuesNewComponent } from './issues-new/issues-new.component';
import { IssueTemplateNewComponent } from './issue-template-new/issue-template-new.component';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MonthlyReportComponent } from './reports/monthly-report/monthly-report.component';
import { PayReportComponent } from './reports/pay-report/pay-report.component';
import { PeriodComponent } from './period/period.component';
import { PickComponent } from './pick/pick.component';
import { PickNewComponent } from './pick-new/pick-new.component';
import { ProductExpiredComponent } from './reports/product-expired/product-expired.component';
import { ProductManufactureComponent } from './reports/product-manufacture/product-manufacture.component';
import { ProductReceiveComponent } from './reports/product-receive/product-receive.component';
import { ProductRemainComponent } from './reports/product-remain/product-remain.component';
import { ProductsComponent } from './products/products.component';
import { ProductSummaryComponent } from './reports/product-summary/product-summary.component';
import { ProductsWarehouseComponent } from './products-warehouse/products-warehouse.component';
import { PurchasingNotgiveawayComponent } from './reports/purchasing-notgiveaway/purchasing-notgiveaway.component';
import { ReceiveComponent } from './receive/receive.component';
import { ReceiveEditComponent } from "app/admin/receive-edit/receive-edit.component";
import { ReceiveIssueYearComponent } from './reports/receive-issue-year/receive-issue-year.component';
import { ReceiveNotMatchPoComponent } from './reports/receive-not-match-po/receive-not-match-po.component';
import { ReceiveOtherComponent } from "app/admin/receive-other/receive-other.component";
import { ReceiveOtherEditComponent } from './receive-other-edit/receive-other-edit.component';
import { ReceiveotherTypeComponent } from './receiveother-type/receiveother-type.component';
import { ReceivePlanningComponent } from './receive-planning/receive-planning.component';
import { ReceivePlanningEditComponent } from './receive-planning-edit/receive-planning-edit.component';
import { ReceivePlanningNewComponent } from './receive-planning-new/receive-planning-new.component';
import { ReceivePurchaseComponent } from './receive-purchase/receive-purchase.component';
import { ReceivesComponent } from './reports/receives/receives.component';
import { ReportComponent } from './report/report.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { RequisitionConfirmComponent } from 'app/admin/requisition-confirm/requisition-confirm.component';
import { RequisitionConfirmUnpaidComponent } from 'app/admin/requisition-confirm-unpaid/requisition-confirm-unpaid.component';
import { RequisitionConfirmEditComponent } from './requisition-confirm-edit/requisition-confirm-edit.component';
import { RequisitionFastComponent } from './requisition-fast/requisition-fast.component';
import { RequisitionMultipleComponent } from './requisition-multiple/requisition-multiple.component';
import { RequisitionNewComponent } from './requisition-new/requisition-new.component';
import { RequisitionTemplateComponent } from './requisition-template/requisition-template.component';
import { RequisitionTemplateNewComponent } from './requisition-template-new/requisition-template-new.component';
import { RequisitionTemplateEditComponent } from './requisition-template-edit/requisition-template-edit.component';
import { RequisitionTypeComponent } from './requisition-type/requisition-type.component';
import { ReturnBudgetComponent } from './return-budget/return-budget.component';
import { ReturnedComponent } from './returned/returned.component';
import { ReturnedEditComponent } from './returned-edit/returned-edit.component';
import { ShippingNetworkComponent } from './shipping-network/shipping-network.component';
import { StockCardComponent } from './reports/stock-card/stock-card.component';
import { SummaryDisbursementComponent } from './reports/summary-disbursement/summary-disbursement.component';
import { TransectionTypeComponent } from './transection-type/transection-type.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferEditComponent } from './transfer-edit/transfer-edit.component';
import { TransferNewComponent } from './transfer-new/transfer-new.component';
import { ValueProductsComponent } from './reports/value-products/value-products.component';
import { ValueReceiveOtherComponent } from './reports/value-receive-other/value-receive-other.component';
import { VenSettingComponent } from './ven-setting/ven-setting.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseDetailComponent } from './warehouse-detail/warehouse-detail.component';
import { WarehouseProductPlanningComponent } from './warehouse-product-planning/warehouse-product-planning.component';
import { WarehouseTypeComponent } from './warehouse-type/warehouse-type.component';
// end component

// start auth
import { AdminGuard } from './../admin-guard';
import { AuthReceive } from 'app/auth-receive.service';
import { AuthTransfer } from 'app/auth-transfer.service';
import { AuthRequisition } from 'app/auth-requisition.service';
import { AuthPeriod } from '../auth-period.service';
import { AuthShippingNetwork } from 'app/auth-shipping-network.service';
import { AuthHISTransaction } from 'app/auth-his-transaction.service';
import { AuthHISMapping } from 'app/auth-his-mapping.service';
import { AuthWarehouseManagement } from 'app/auth-warehouse-management.service';
import { AuthAdjustService } from 'app/auth-adjust.service';
import { AuthMinMaxPlanning } from 'app/auth-minmax-planing.service';
import { AuthStockcard } from 'app/auth-stockcard.service';
import { AuthReturnBudget } from 'app/auth-return-budget.service';
import { AuthAddition } from 'app/auth-addition.service';
import { AuthPick } from '../auth-pick.service';
// end auth


export function highchartsFactory() {
  return require('highcharts');
}

const Highcharts = require('highcharts');

Highcharts.setOptions({
  credits: false
});

@NgModule({
  imports: [
    AdminRoutingModule,
    AgxTypeaheadModule,
    AuthModule,
    ChartModule,
    ClarityModule,
    DirectivesModule,
    FormsModule,
    GridDetailModule,
    HelperModule,
    ModalsModule,
    MyDatePickerTHModule,
    TextMaskModule,
    ToolsModule,
    CommonModule
  ],
  declarations: [
    AbcSettingComponent,
    AbcVenComponent,
    AdditionComponent,
    AdditionEditComponent,
    AdditionGenericComponent,
    AdditionWarehouseComponent,
    AdjustStockComponent,
    AdjustStockNewComponent,
    AlertExpiredComponent,
    BorrowComponent,
    BorrowEditComponent,
    BorrowNewComponent,
    BorrowNoteComponent,
    BorrowNoteNewComponent,
    BorrowotherEditComponent,
    BorrowotherNewComponent,
    CalculateMinMaxComponent,
    CodeMappingComponent,
    CountingAdjustComponent,
    CountingComponent,
    CountingNewComponent,
    CountingVerifyComponent,
    DonatorsComponent,
    ExportdataComponent,
    HisIssueTransactionComponent,
    HisMappingsComponent,
    InventoryStatusComponent,
    IssuesComponent,
    IssuesEditComponent,
    IssuesNewComponent,
    IssueTemplateNewComponent,
    LayoutComponent,
    MonthlyReportComponent,
    PayReportComponent,
    PeriodComponent,
    PickComponent,
    PickNewComponent,
    ProductExpiredComponent,
    ProductManufactureComponent,
    ProductReceiveComponent,
    ProductRemainComponent,
    ProductsComponent,
    ProductSummaryComponent,
    ProductsWarehouseComponent,
    PurchasingNotgiveawayComponent,
    ReceiveComponent,
    ReceiveEditComponent,
    ReceiveIssueYearComponent,
    ReceiveNotMatchPoComponent,
    ReceiveOtherComponent,
    ReceiveOtherEditComponent,
    ReceiveotherTypeComponent,
    ReceivePlanningComponent,
    ReceivePlanningEditComponent,
    ReceivePlanningNewComponent,
    ReceivePurchaseComponent,
    ReceivesComponent,
    ReportComponent,
    RequisitionComponent,
    RequisitionConfirmComponent,
    RequisitionConfirmEditComponent,
    RequisitionConfirmUnpaidComponent,
    RequisitionFastComponent,
    RequisitionMultipleComponent,
    RequisitionMultipleComponent,
    RequisitionNewComponent,
    RequisitionTemplateComponent,
    RequisitionTemplateEditComponent,
    RequisitionTemplateNewComponent,
    RequisitionTypeComponent,
    ReturnBudgetComponent,
    ReturnedComponent,
    ReturnedEditComponent,
    ShippingNetworkComponent,
    StockCardComponent,
    SummaryDisbursementComponent,
    TransectionTypeComponent,
    TransectionTypeComponent,
    TransferComponent,
    TransferEditComponent,
    TransferNewComponent,
    ValueProductsComponent,
    ValueReceiveOtherComponent,
    VenSettingComponent,
    WarehouseComponent,
    WarehouseDetailComponent,
    WarehouseProductPlanningComponent,
    WarehouseTypeComponent,
    MainPageComponent
  ],
  providers: [
    AbcVenService,
    AccessCheck,
    AdditionService,
    AdjustStockService,
    AdminGuard,
    AlertExpiredService,
    AlertService,
    AuthAddition,
    AuthAdjustService,
    AuthHISMapping,
    AuthHISTransaction,
    AuthMinMaxPlanning,
    AuthPeriod,
    AuthPick,
    AuthReceive,
    AuthRequisition,
    AuthReturnBudget,
    AuthShippingNetwork,
    AuthStockcard,
    AuthTransfer,
    AuthWarehouseManagement,
    BorrowItemsService,
    BorrowItemsService,
    BorrowNoteService,
    BorrowOtherService,
    CountingService,
    DateService,
    DonatorService,
    HisTransactionService,
    IssueService,
    MinMaxService,
    MonthDateperiodPipe,
    MonthToThPipe,
    PickService,
    ProductsService,
    ReceiveotherTypeService,
    ReceiveService,
    ReportProductsService,
    RequisitionService,
    RequisitionTypeService,
    ReturnBudgetService,
    ShippingNetworkService,
    ToolsService,
    ToThaiDatePipe,
    TransectionTypeService,
    TransferService,
    UploadingService,
    WarehouseProductsService,
    WarehouseService,
    WarehouseTypeService,
    YearThaiPipe,
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ]
})
export class AdminModule { }
