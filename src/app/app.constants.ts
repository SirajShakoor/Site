
export const CONSTANTS = {
  LOCAL_STORAGE_ACCOUNT_KEY: "raad-apl-account",

  LOCAL_CACHE: {
    LOCAL_PRODUCTS: "raad-products",
    LOCAL_CUSTOMERS: "raad-customers",
    LOCAL_STORES: "raad-stores",
    LOCAL_VEHICLE: "raad-vehicle",
    LOCAL_SUPPLIERS: "raad-stores",
    LOCAL_COST_CENTERS: "raad-costCenters",
    LOCAL_INVENTORY: "raad-inventory",
    LOCAL_DRIVER: "raad-driver",

    LOCAL_BUTTON_ACCESS: "raad--button-access",

    BR_DOC_TYPE_ID: "raad-br-doc-type-is",
    BTN_DOC_TYPE_ID: "raad-btn-doc-type-is",
    MRN_DOC_TYPE_ID: "raad-mrn-doc-type-is",
    MIN_DOC_TYPE_ID: "raad-min-doc-type-is",
    MRS_DOC_TYPE_ID: "raad-mrs-doc-type-is",
    SAN_DOC_TYPE_ID: "raad-san-doc-type-is",
    STN_DOC_TYPE_ID: "raad-stn-doc-type-is",
    MRR_DOC_TYPE_ID: "raad-mrr-doc-type-is",
    PRC_DOC_TYPE_ID: "raad-prc-doc-type-is",
    MRB_DOC_TYPE_ID: "raad-mrb-doc-type-is",
    DO_DOC_TYPE_ID: "raad-do-doc-type-is",
    SO_DOC_TYPE_ID: "raad-so-doc-type-is",
    CA_DOC_TYPE_ID: "raad-ca-doc-type-is",
    LIN_DOC_TYPE_ID: "raad-lin-doc-type-is",
    PUA_DOC_TYPE_ID: "raad-pua-doc-type-is",

    SI_DOC_TYPE_ID: "raad-si-doc-type-is",
    SR_DOC_TYPE_ID: "raad-sr-doc-type-is",
    LN_DOC_TYPE_ID: "raad-ln-doc-type-is",
    CNC_DOC_TYPE_ID: "raad-cnc-doc-type-is",
    DNC_DOC_TYPE_ID: "raad-dnc-doc-type-is",
    CNS_DOC_TYPE_ID: "raad-cns-doc-type-is",
    DNS_DOC_TYPE_ID: "raad-dns-doc-type-is",

    FB_DOC_TYPE_ID: "raad-fb-doc-type-is",
    CP_DOC_TYPE_ID: "raad-cp-doc-type-is",

    GL_VE_DOC_TYPE_ID: "raad-gl-ve-doc-type",

    SB_DOC_TYPE_ID: "raad-gl-sb-doc-type",

    PR_TE_DOC_TYPE_ID: "raad-pr-te-doc-type",
    PR_RQ_DOC_TYPE_ID: "raad-pr-rq-doc-type",
    PR_RCV_DOC_TYPE_ID: "raad-pr-rcv-doc-type",
    PR_DOC_TYPE_ID: "raad-pr-pr-doc-type-is",
    PRQ_DOC_TYPE_ID: "raad-pr-prq-doc-type-is",
    PQ_DOC_TYPE_ID: "raad-pr-pq-doc-type-is",
    PO_DOC_TYPE_ID: "raad-pr-po-doc-type-is",
    II_DOC_TYPE_ID: "raad-pr-ii-doc-type-is",
    AR_DOC_TYPE_ID: "raad-pr-ar-doc-type-is"
  },

  API_URL: {
    LOGIN: "User/Login",
    RESET_PWD: "auth/resetpwd",
    CHANGE_PWD: "auth/changepwd",
    REFRESH_TOKEN: "auth/refreshtoken/refresh",

    GET_ALL_SEGMENT: "segment",
    GENERATE_NEXT_CODE: "GenerateNextCode",

    GET_ALL_BTN: "BalanceTransferNoteList",
    GET_BTN_BY_CODE: "BalanceTransferNote",
    GET_BTN_REPORT: "BalanceTransferNoteReport",
    SAVE_BTN: "SaveBalanceTransferNote",
    UPDATE_BTN: "UpdateBalanceTransferNote",
    DELETE_BTN: "DeleteBalanceTransferNote",

    GET_ALL_MTN: "MaterialRequisitionNoteList",
    GET_MTN_BY_CODE: "MaterialRequisitionNote",
    UPDATE_MTN: "UpdateMaterialRequisitionNote",
    SAVE_MTN: "SaveMaterialRequisitionNote",
    DELETE_MTN: "DeleteMaterialRequisitionNote",
    GET_MTN_REPORT: "MaterialRequisitionNoteReport",

    GET_ALL_MIN: "MaterialIssueNoteList",
    GET_MIN_BY_CODE: "MaterialIssueNote",
    UPDATE_MIN: "UpdateMaterialIssueNote",
    SAVE_MIN: "SaveMaterialIssueNote",
    DELETE_MIN: "DeleteMaterialIssueNote",
    GET_MIN_REPORT: "MaterialIssueNoteReport",

    GET_ALL_MRR: "MaterialReturnRequisitionList",
    GET_MRR_BY_CODE: "MaterialReturnRequisition",
    UPDATE_MRR: "UpdateMaterialReturnRequisition",
    SAVE_MRR: "SaveMaterialReturnRequisition",
    DELETE_MRR: "DeleteMaterialReturnRequisition",
    GET_MRR_REPORT: "MaterialReturnRequisitionReport",

    GET_ALL_MRS: "MaterialReturnSlipList",
    GET_MRS_BY_CODE: "MaterialReturnSlip",
    UPDATE_MRS: "UpdateMaterialReturnSlip",
    SAVE_MRS: "SaveMaterialReturnSlip",
    DELETE_MRS: "DeleteMaterialReturnSlip",
    GET_MRS_REPORT: "MaterialReturnSlipReport",

    GET_ALL_SAN: "StockAdjustmentNoteList",
    GET_SAN_BY_CODE: "StockAdjustmentNote",
    UPDATE_SAN: "UpdateStockAdjustmentNote",
    SAVE_SAN: "SaveStockAdjustmentNote",
    DELETE_SAN: "DeleteStockAdjustmentNote",
    GET_SAN_REPORT: "StockAdjustmentNoteReport",

    GET_ALL_STN: "StockTransferNoteList",
    GET_STN_BY_CODE: "StockTransferNote",
    UPDATE_STN: "UpdateStockTransferNote",
    SAVE_STN: "SaveStockTransferNote",
    DELETE_STN: "DeleteStockTransferNote",
    GET_STN_REPORT: "StockTransferNoteReport",

    GET_ALL_PRC: "ProductionChallanList",
    GET_PRC_BY_CODE: "ProductionChallan",
    GET_PRC_REPORT: "ProductionChallanReport",
    SAVE_PRC: "SaveProductionChallan",
    UPDATE_PRC: "UpdateProductionChallan",
    DELETE_PRC: "DeleteProductionChallan",

    GET_ALL_MRB: "MaterialBillList",
    GET_MRB_BY_CODE: "MaterialBill",
    GET_MRB_REPORT: "MaterialBillReport",
    SAVE_MRB: "SaveMaterialBill",
    UPDATE_MRB: "UpdateMaterialBill",
    DELETE_MRB: "DeleteMaterialBill",

    GET_ALL_BANK: "BankList",
    GET_BANK_BY_CODE: "Bank",
    UPDATE_BANK: "UpdateBank",
    SAVE_BANK: "SaveBank",
    DELETE_BANK: "DeleteBank",
    GET_BANK_REPORT: "BankReport",

    GET_ALL_BANK_RECEIPT: "BankReceiptList",
    GET_BANK_RECEIPT_BY_CODE: "BankReceipt",
    UPDATE_BANK_RECEIPT: "UpdateBankReceipt",
    SAVE_BANK_RECEIPT: "SaveBankReceipt",
    DELETE_BANK_RECEIPT: "DeleteBankReceipt",
    GET_BANK_RECEIPT_REPORT: "BankReceiptReport",
    GET_ALL_BANK_RECEIPT_SALES_INVOICES: "BankReceiptSalesInvoiceList",

    GET_ALL_CARRIAGE_CONTRACTOR: "CarriageContractorList",
    GET_CARRIAGE_CONTRACTOR_BY_CODE: "CarriageContractor",
    UPDATE_CARRIAGE_CONTRACTOR: "UpdateCarriageContractor",
    SAVE_CARRIAGE_CONTRACTOR: "SaveCarriageContractor",
    DELETE_CARRIAGE_CONTRACTOR: "DeleteCarriageContractor",
    GET_CARRIAGE_CONTRACTOR_REPORT: "CarriageContractorReport",

    GET_ALL_DRIVER: "DriverList",
    GET_DRIVER_BY_CODE: "Driver",
    UPDATE_DRIVER: "UpdateDriver",
    SAVE_DRIVER: "SaveDriver",
    DELETE_DRIVER: "DeleteDriver",
    GET_DRIVER_REPORT: "DriverReport",

    GET_ALL_COUNTRY: "CountryList",
    GET_COUNTRY_BY_CODE: "Country",
    UPDATE_COUNTRY: "UpdateCountry",
    SAVE_COUNTRY: "SaveCountry",
    DELETE_COUNTRY: "DeleteCountry",
    GET_COUNTRY_REPORT: "CountryReport",

    GET_ALL_CITY: "CityList",
    GET_CITY_BY_CODE: "City",
    SAVE_CITY: "SaveCity",
    GET_CITY_REPORT: "CityReport",
    UPDATE_CITY: "updateCity",
    DELETE_CITY: "DeleteCity",

    GET_ALL_REGION: "RegionList",
    GET_REGION_BY_CODE: "Region",
    SAVE_REGION: "SaveRegion",
    GET_REGION_REPORT: "RegionReport",
    UPDATE_REGION: "UpdateRegion",
    DELETE_REGION: "DeleteRegion",

    GET_ALL_COST_CENTER: "CostCenterList",
    GET_COST_CENTER_BY_CODE: "CostCenter",
    UPDATE_COST_CENTER: "UpdateCostCenter",
    SAVE_COST_CENTER: "SaveCostCenter",
    DELETE_COST_CENTER: "DeleteCostCenter",
    GET_COST_CENTER_REPORT: "CostCenterReport",

    GET_ALL_EMPLOYEE: "EmployeeList",
    GET_EMPLOYEE_BY_CODE: "Employee",
    UPDATE_EMPLOYEE: "UpdateEmployee",
    SAVE_EMPLOYEE: "SaveEmployee",
    DELETE_EMPLOYEE: "DeleteEmployee",
    GET_EMPLOYEE_REPORT: "EmployeeReport",

    GET_ALL_DEPARTMENT: "DepartmentList",
    GET_DEPARTMENT_BY_CODE: "Department",
    UPDATE_DEPARTMENT: "UpdateDepartment",
    SAVE_DEPARTMENT: "SaveDepartment",
    DELETE_DEPARTMENT: "DeleteDepartment",
    GET_DEPARTMENT_REPORT: "DepartmentReport",

    GET_ALL_DESIGNATION: "DesignationList",
    GET_DESIGNATION_BY_CODE: "Designation",
    UPDATE_DESIGNATION: "UpdateDesignation",
    SAVE_DESIGNATION: "SaveDesignation",
    DELETE_DESIGNATION: "DeleteDesignation",
    GET_DESIGNATION_REPORT: "DesignationReport",

    GET_ALL_COMPANY: "CompanyList",
    GET_COMPANY_BY_CODE: "Company",
    UPDATE_COMPANY: "UpdateCompany",
    SAVE_COMPANY: "SaveCompany",
    DELETE_COMPANY: "DeleteCompany",
    GET_COMPANY_REPORT: "CompanyReport",

    GET_ALL_CHART_ACCOUNT: "ChartOfAccountList",
    GET_CHART_ACCOUNT_BY_CODE: "ChartOfAccount",
    UPDATE_CHART_ACCOUNT: "UpdateChartOfAccount",
    SAVE_CHART_ACCOUNT: "SaveChartOfAccount",
    DELETE_CHART_ACCOUNT: "DeleteChartOfAccount",
    GET_CHART_ACCOUNT_REPORT: "ChartOfAccountReport",

    GET_ALL_SITE: "SiteList",
    GET_SITE_BY_CODE: "Site",
    UPDATE_SITE: "UpdateSite",
    SAVE_SITE: "SaveSite",
    DELETE_SITE: "DeleteSite",
    GET_SITE_REPORT: "SiteReport",

    GET_ALL_PAYMENT_SECTION: "PaymentSectionList",
    GET_PAYMENT_SECTION_BY_CODE: "PaymentSection",
    UPDATE_PAYMENT_SECTION: "UpdatePaymentSection",
    SAVE_PAYMENT_SECTION: "SavePaymentSection",
    DELETE_PAYMENT_SECTION: "DeletePaymentSection",
    GET_PAYMENT_SECTION_REPORT: "PaymentSectionReport",

    GET_ALL_PARTY: "PartyList",
    GET_PARTY_BY_CODE: "Party",
    UPDATE_PARTY: "UpdateParty",
    SAVE_PARTY: "SaveParty",
    DELETE_PARTY: "DeleteParty",
    GET_PARTY_REPORT: "PartyReport",

    GET_ALL_USER: "UserList",
    GET_USER_BY_CODE: "User",
    UPDATE_USER: "UpdateUser",
    SAVE_USER: "SaveUser",
    DELETE_USER: "DeleteUser",
    GET_USER_REPORT: "UserReport",

    GET_ALL_VOUCHER_TYPE: "VoucherTypeList",
    GET_VOUCHER_TYPE_BY_CODE: "VoucherType",
    UPDATE_VOUCHER_TYPE: "UpdateVoucherType",
    SAVE_VOUCHER_TYPE: "SaveVoucherType",
    DELETE_VOUCHER_TYPE: "DeleteVoucherType",
    GET_VOUCHER_TYPE_REPORT: "VoucherTypeReport",

    GET_ALL_CURRENCY: "CurrencyList",
    GET_CURRENCY_BY_CODE: "Currency",
    UPDATE_CURRENCY: "UpdateCurrency",
    SAVE_CURRENCY: "SaveCurrency",
    SAVE_CURRENCY_RATE: "SaveCurrencyRate",
    DELETE_CURRENCY: "DeleteCurrency",
    DELETE_CURRENCY_RATE: "DeleteCurrencyRate",
    GET_CURRENCY_REPORT: "CurrencyReport",

    GET_ALL_CURRENCY_TYPE: "CurrencyTypeList",
    GET_CURRENCY_TYPE_BY_CODE: "CurrencyType",
    UPDATE_CURRENCY_TYPE: "UpdateCurrencyType",
    SAVE_CURRENCY_TYPE: "SaveCurrencyType",
    DELETE_CURRENCY_TYPE: "DeleteCurrencyType",
    GET_CURRENCY_TYPE_REPORT: "CurrencyTypeReport",

    GET_ALL_RA1: "ReportingAnalysis1List",
    GET_RA1_BY_CODE: "ReportingAnalysis1",
    UPDATE_RA1: "UpdateReportingAnalysis1",
    SAVE_RA1: "SaveReportingAnalysis1",
    DELETE_RA1: "DeleteReportingAnalysis1",
    GET_RA1_REPORT: "ReportingAnalysis1Report",

    GET_ALL_RA2: "ReportingAnalysis2List",
    GET_RA2_BY_CODE: "ReportingAnalysis2",
    UPDATE_RA2: "UpdateReportingAnalysis2",
    SAVE_RA2: "SaveReportingAnalysis2",
    DELETE_RA2: "DeleteReportingAnalysis2",
    GET_RA2_REPORT: "ReportingAnalysis2Report",

    GET_ALL_RA3: "ReportingAnalysis3List",
    GET_RA3_BY_CODE: "ReportingAnalysis3",
    UPDATE_RA3: "UpdateReportingAnalysis3",
    SAVE_RA3: "SaveReportingAnalysis3",
    DELETE_RA3: "DeleteReportingAnalysis3",
    GET_RA3_REPORT: "ReportingAnalysis3Report",

    GET_ALL_RA4: "ReportingAnalysis4List",
    GET_RA4_BY_CODE: "ReportingAnalysis4",
    UPDATE_RA4: "UpdateReportingAnalysis4",
    SAVE_RA4: "SaveReportingAnalysis4",
    DELETE_RA4: "DeleteReportingAnalysis4",
    GET_RA4_REPORT: "ReportingAnalysis4Report",

    GET_ALL_RA5: "ReportingAnalysis5List",
    GET_RA5_BY_CODE: "ReportingAnalysis5",
    UPDATE_RA5: "UpdateReportingAnalysis5",
    SAVE_RA5: "SaveReportingAnalysis5",
    DELETE_RA5: "DeleteReportingAnalysis5",
    GET_RA5_REPORT: "ReportingAnalysis5Report",

    GET_ALL_RA6: "ReportingAnalysis6List",
    GET_RA6_BY_CODE: "ReportingAnalysis6",
    UPDATE_RA6: "UpdateReportingAnalysis6",
    SAVE_RA6: "SaveReportingAnalysis6",
    DELETE_RA6: "DeleteReportingAnalysis6",
    GET_RA6_REPORT: "ReportingAnalysis6Report",

    GET_ALL_RA7: "ReportingAnalysis7List",
    GET_RA7_BY_CODE: "ReportingAnalysis7",
    UPDATE_RA7: "UpdateReportingAnalysis7",
    SAVE_RA7: "SaveReportingAnalysis7",
    DELETE_RA7: "DeleteReportingAnalysis7",
    GET_RA7_REPORT: "ReportingAnalysis7Report",

    GET_ALL_RA8: "ReportingAnalysis8List",
    GET_RA8_BY_CODE: "ReportingAnalysis8",
    UPDATE_RA8: "UpdateReportingAnalysis8",
    SAVE_RA8: "SaveReportingAnalysis8",
    DELETE_RA8: "DeleteReportingAnalysis8",
    GET_RA8_REPORT: "ReportingAnalysis8Report",

    GET_ALL_RA9: "ReportingAnalysis9List",
    GET_RA9_BY_CODE: "ReportingAnalysis9",
    UPDATE_RA9: "UpdateReportingAnalysis9",
    SAVE_RA9: "SaveReportingAnalysis9",
    DELETE_RA9: "DeleteReportingAnalysis9",
    GET_RA9_REPORT: "ReportingAnalysis9Report",

    GET_ALL_RA10: "ReportingAnalysis10List",
    GET_RA10_BY_CODE: "ReportingAnalysis10",
    UPDATE_RA10: "UpdateReportingAnalysis10",
    SAVE_RA10: "SaveReportingAnalysis10",
    DELETE_RA10: "DeleteReportingAnalysis10",
    GET_RA10_REPORT: "ReportingAnalysis10Report",

    GET_ALL_VERIFICATION_PLAN: "VerificationPlanList",
    GET_VERIFICATION_PLAN_BY_CODE: "VerificationPlan",
    UPDATE_VERIFICATION_PLAN: "UpdateVerificationPlan",
    SAVE_VERIFICATION_PLAN: "SaveVerificationPlan",
    DELETE_VERIFICATION_PLAN: "DeleteVerificationPlan",
    GET_VERIFICATION_PLAN_REPORT: "VerificationPlanReport",
    GET_VERIFICATION_USER_LIST: "VerificationUserList",

    GET_ALL_NOTE_CONFIG: "NoteList",
    GET_NOTE_CONFIG_BY_CODE: "Note",
    UPDATE_NOTE_CONFIG: "UpdateNote",
    SAVE_NOTE_CONFIG: "SaveNote",
    DELETE_NOTE_CONFIG: "DeleteNote",
    GET_NOTE_CONFIG_REPORT: "NoteReport",

    GET_ALL_FREIGHT: "FreightList",
    GET_FREIGHT_BY_CODE: "Freight",
    UPDATE_FREIGHT: "UpdateFreight",
    SAVE_FREIGHT: "SaveFreight",
    DELETE_FREIGHT: "DeleteFreight",
    GET_FREIGHT_REPORT: "FreightReport",

    GET_ALL_VERIFICATION_CONFIGURATION: "SetupVerificationPlanList",
    GET_VERIFICATION_CONFIGURATION_BY_CODE: "SetupVerificationPlan",
    UPDATE_VERIFICATION_CONFIGURATION: "UpdateSetupVerificationPlan",

    GET_ALL_PR: "PurchaseRequisitionList",
    GET_PR_BY_CODE: "PurchaseRequisition",
    GET_PR_REPORT: "Report",
    SAVE_PR: "SaveRequisition",
    UPDATE_PR: "UpdateRequisition",
    DELETE_PR: "DeleteRequisition",

    GET_ALL_RFQ: "RequestForQuotationList",
    GET_RFQ_BY_CODE: "RequestForQuotation",
    GET_RFQ_REPORT: "Report",
    SAVE_RFQ: "SaveRequestForQuotation",
    UPDATE_RFQ: "UpdateRequestForQuotation",
    DELETE_RFQ: "DeleteRequestForQuotation",

    GET_ALL_PQ: "PurchaseQuotationList",
    GET_PQ_BY_CODE: "PurchaseQuotation",
    GET_PQ_REPORT: "Report",
    SAVE_PQ: "SavePurchaseQuotation",
    UPDATE_PQ: "UpdatePurchaseQuotation",
    DELETE_PQ: "DeletePurchaseQuotation",

    GET_ALL_AR: "AdvanceRequisitionList",
    GET_AR_BY_CODE: "AdvanceRequisition",
    GET_AR_REPORT: "Report",
    SAVE_AR: "SaveAdvanceRequisition",
    UPDATE_AR: "UpdateAdvanceRequisition",
    DELETE_AR: "DeleteAdvanceRequisition",

    GET_ALL_PO: "PurchaseOrderList",
    GET_PO_BY_CODE: "PurchaseOrder",
    GET_PO_REPORT: "Report",
    SAVE_PO: "SavePurchaseOrder",
    UPDATE_PO: "UpdatePurchaseOrder",
    DELETE_PO: "DeletePurchaseOrder",

    GET_ALL_II: "ItemInspectionList",
    GET_II_BY_CODE: "ItemInspection",
    GET_II_REPORT: "Report",
    SAVE_II: "SaveItemInspection",
    UPDATE_II: "UpdateItemInspection",
    DELETE_II: "DeleteItemInspection",

    GET_ALL_PRET: "PurchaseReturnList",
    GET_PRET_BY_CODE: "PurchaseReturn",
    GET_PRET_REPORT: "Report",
    SAVE_PRET: "SavePurchaseReturn",
    UPDATE_PRET: "UpdatePurchaseReturn",
    DELETE_PRET: "DeletePurchaseReturn",

    GET_ALL_TE: "TechnicalEvaluationList",
    GET_TE_BY_CODE: "TechnicalEvaluation",
    GET_TE_REPORT: "Report",
    SAVE_TE: "SaveTechnicalEvaluation",
    UPDATE_TE: "UpdateTechnicalEvaluation",
    DELETE_TE: "DeleteTechnicalEvaluation",

    GET_ALL_RE: "ReceivingList",
    GET_RE_BY_CODE: "Receiving",
    GET_RE_REPORT: "Report",
    SAVE_RE: "SaveReceiving",
    UPDATE_RE: "UpdateReceiving",
    DELETE_RE: "DeleteReceiving",

    GET_ALL_DO: "DeliveryOrderList",
    GET_DO_BY_DONO: "DeliveryOrder",
    GET_DO_REPORT: "DeliveryOrderReport",
    SAVE_DO: "SaveDeliveryOrder",
    UPDATE_DO: "UpdateDeliveryOrder",
    DELETE_DO: "DeleteDeliveryOrder",

    GET_ALL_SO: "SalesOrderList",
    GET_SO_BY_SONO: "SalesOrder",
    GET_SO_REPORT: "SalesOrderReport",
    SAVE_SO: "SaveSalesOrder",
    UPDATE_SO: "UpdateSalesOrder",
    DELETE_SO: "DeleteSalesOrder",

    GET_ALL_FREIGHT_BILL: "FreightBillList",
    GET_FREIGHT_BILL_BY_CODE: "FreightBill",
    GET_FREIGHT_BILL_REPORT: "FreightBillReport",
    SAVE_FREIGHT_BILL: "SaveFreightBill",
    UPDATE_FREIGHT_BILL: "UpdateFreightBill",
    DELETE_FREIGHT_BILL: "DeleteFreightBill",

    GET_ALL_MASTER_SO: "SalesOrderMasterList",
    GET_ALL_DETAIL_SO: "SalesOrderDetailList",

    GET_ALL_CP: "ChequePaymentList",
    SAVE_CP: "SaveChequePayment",
    UPDATE_CP: "UpdateChequePayment",
    DELETE_CP: "DeleteChequePayment",
    GET_CP_BY_CPNO: "ChequePayment",
    GET_CP_REPORT: "ChequePaymentReport",

    GET_VE_REPORT: "VoucherEntryReport",

    GET_ALL_LIN: "LinList",
    GET_LIN_BY_LINNO: "Lin",
    GET_LIN_REPORT: "LinReport",
    SAVE_LIN: "SaveLin",
    UPDATE_LIN: "UpdateLin",
    DELETE_LIN: "DeleteLin",
    GET_ALL_MASTER_DO: "DeliveryOrderMasterList",

    GET_ALL_PUA: "PuaList",
    GET_PUA_BY_PUANO: "Pua",
    GET_PUA_REPORT: "PuaReport",
    SAVE_PUA: "SavePua",
    UPDATE_PUA: "UpdatePua",
    DELETE_PUA: "DeletePua",
    GET_ALL_PUA_MASTER_LIN: "PuaLinMasterList",
    GET_ALL_PUA_MASTER_DO: "PuaDeliveryOrderMasterList",
    GET_ALL_PUA_DETAIL_DO: "PuaDeliveryOrderDetailList",
    GET_ALL_PUA_DETAIL_LIN: "PuaLinDetailList",

    GET_ALL_CA: "CustomerAcknowledgementList",
    GET_CA_BY_CANO: "CustomerAcknowledgement",
    GET_CA_REPORT: "CustomerAcknowledgementReport",
    SAVE_CA: "SaveCustomerAcknowledgement",
    UPDATE_CA: "UpdateCustomerAcknowledgement",
    DELETE_CA: "DeleteCustomerAcknowledgement",
    GET_ALL_MASTER_CA: "CaSalesInvoiceMasterList",
    GET_ALL_DETAIL_CA: "CaSalesInvoiceDetailList",

    GET_ALL_LN: "LoadingNoteList",
    CHAMBER_QTY: "ChamberQty",
    GET_LN_BY_LNNO: "LoadingNote",
    GET_LN_REPORT: "LoadingNoteReport",
    SAVE_LN: "SaveLoadingNote",
    UPDATE_LN: "UpdateLoadingNote",
    DELETE_LN: "DeleteLoadingNote",
    GET_ALL_MASTER_LN: "PuaMasterList",
    GET_ALL_DETAIL_LN: "PuaDetailList",
    GET_VOUCHER: "Voucher",

    GET_ALL_SI: "SalesInvoiceList",
    GET_SI_BY_SINO: "SalesInvoice",
    GET_SI_REPORT: "SalesInvoiceReport",
    SAVE_SI: "SaveSalesInvoice",
    UPDATE_SI: "UpdateSalesInvoice",
    DELETE_SI: "DeleteSalesInvoice",
    GET_ALL_MASTER_LOADING_NOTE: "LoadingNoteMasterList",

    GET_ALL_SR: "SalesReturnList",
    GET_SR_BY_SRNO: "SalesReturn",
    GET_SR_REPORT: "SalesReturnReport",
    SAVE_SR: "SaveSalesReturn",
    UPDATE_SR: "UpdateSalesReturn",
    DELETE_SR: "DeleteSalesReturn",
    GET_ALL_MASTER_SALES_INVOICE: "SalesInvoiceMasterList",
    GET_ALL_DETAIL_SALES_INVOICE: "SalesInvoiceDetailList",
    //GET_ALL_MASTER_LOADING_NOTE: "LoadingNoteMasterList",

    GET_ALL_SUPPLIER_BILL: "SupplierBillList",
    GET_SUPPLIER_BILL_BY_CODE: "SupplierBill",
    UPDATE_SUPPLIER_BILL: "UpdateSupplierBill",
    SAVE_SUPPLIER_BILL: "SaveSupplierBill",
    DELETE_SUPPLIER_BILL: "DeleteSupplierBill",
    GET_SUPPLIER_BILL_REPORT: "SupplierBillReport",

    GET_ALL_SUPPLIER: "SupplierList",
    GET_SUPPLIER_BY_CODE: "Supplier",
    UPDATE_SUPPLIER: "UpdateSupplier",
    SAVE_SUPPLIER: "SaveSupplier",
    DELETE_SUPPLIER: "DeleteSupplier",
    GET_SUPPLIER_REPORT: "SupplierReport",

    GET_ALL_SUPPLIER_TYPE: "SupplierTypeList",
    GET_SUPPLIER_TYPE_BY_CODE: "SupplierType",
    UPDATE_SUPPLIER_TYPE: "UpdateSupplierType",
    SAVE_SUPPLIER_TYPE: "SaveSupplierType",
    DELETE_SUPPLIER_TYPE: "DeleteSupplierType",
    GET_SUPPLIER_TYPE_REPORT: "SupplierTypeReport",

    GET_ALL_CUSTOMER: "CustomerList",
    GET_CUSTOMER_BY_CODE: "Customer",
    UPDATE_CUSTOMER: "UpdateCustomer",
    SAVE_CUSTOMER: "SaveCustomer",
    DELETE_CUSTOMER: "DeleteCustomer",
    GET_CUSTOMER_REPORT: "CustomerReport",

    GET_ALL_CUSTOMER_TYPE: "CustomerTypeList",
    GET_CUSTOMER_TYPE_BY_CODE: "CustomerType",
    UPDATE_CUSTOMER_TYPE: "UpdateCustomerType",
    SAVE_CUSTOMER_TYPE: "SaveCustomerType",
    DELETE_CUSTOMER_TYPE: "DeleteCustomerType",
    GET_CUSTOMER_TYPE_REPORT: "CustomerTypeReport",

    GET_ALL_PT: "PriceTitleList",
    GET_PT_BY_CODE: "PriceTitle",
    UPDATE_PT: "UpdatePriceTitle",
    SAVE_PT: "SavePriceTitle",
    DELETE_PT: "DeletePriceTitle",
    GET_PT_REPORT: "PriceTitleReport",

    GET_ALL_PC: "PriceConfigurationList",
    GET_PC_BY_CODE: "PriceConfiguration",
    UPDATE_PC: "UpdatePriceConfiguration",
    SAVE_PC: "SavePriceConfiguration",
    DELETE_PC: "DeletePriceConfiguration",
    GET_PC_REPORT: "PriceConfigurationReport",

    GET_ALL_PE: "PriceEntryList",
    GET_PE_BY_PENO: "PriceEntry",
    GET_PE_REPORT: "PriceEntryReport",
    SAVE_PE: "SavePriceEntry",
    UPDATE_PE: "UpdatePriceEntry",
    DELETE_PE: "DeletePriceEntry",

    GET_ALL_STORE: "StoreList",
    GET_STORE_BY_CODE: "Store",
    UPDATE_STORE: "UpdateStore",
    SAVE_STORE: "SaveStore",
    DELETE_STORE: "DeleteStore",
    GET_STORE_REPORT: "StoreReport",

    GET_ALL_DOCUMENT_CONFIGURATION: "DocumentConfigurationList",
    GET_ALL_DOCUMENT_TYPES: "DocumentConfiguration",
    GET_DOCUMENT_TYPE_BY_CODE: "DocumentTypeConfiguration",
    UPDATE_DOCUMENT_CONFIGURATION: "UpdateDocumentConfiguration",
    UPDATE_DOCUMENT_TYPE: "UpdateDocumentTypeConfiguration",
    SAVE_DOCUMENT_CONFIGURATION: "SaveDocumentTypeConfiguration",
    DELETE_DOCUMENT_TYPE: "DeleteDocumentTypeConfiguration",
    GET_DOCUMENT_CONFIGURATION_REPORT: "DocumentConfigurationReport",

    GET_ALL_UNIT: "UnitList",
    GET_UNIT_BY_CODE: "Unit",
    UPDATE_UNIT: "UpdateUnit",
    SAVE_UNIT: "SaveUnit",
    DELETE_UNIT: "DeleteUnit",
    GET_UNIT_REPORT: "UnitReport",

    GET_ALL_WHT_TYPE: "WhtTypeList",
    GET_WHT_TYPE_BY_CODE: "WhtType",
    UPDATE_WHT_TYPE: "UpdateWhtType",
    SAVE_WHT_TYPE: "SaveWhtType",
    DELETE_WHT_TYPE: "DeleteWhtType",
    GET_WHT_TYPE_REPORT: "WhtTypeReport",

    GET_ALL_PRODUCT: "ProductList",
    GET_PRODUCT_BY_CODE: "Product",
    UPDATE_PRODUCT: "UpdateProduct",
    SAVE_PRODUCT: "SaveProduct",
    DELETE_PRODUCT: "DeleteProduct",
    GET_PRODUCT_REPORT: "ProductReport",

    GET_ALL_SUPPLY_SOURCE: "SupplySourceList",
    GET_SUPPLY_SOURCE_BY_CODE: "SupplySource",
    SAVE_SUPPLY_SOURCE: "SaveSupplySource",
    GET_SUPPLY_SOURCE_REPORT: "SupplySourceReport",
    UPDATE_SUPPLY_SOURCE: "UpdateSupplySource",
    DELETE_SUPPLY_SOURCE: "DeleteSupplySource",

    GET_ALL_CREDIT_NOTE_CT: "CreditNoteCustTypeList",
    GET_CREDIT_NOTE_CT_BY_CODE: "CreditNoteCustType",
    SAVE_CREDIT_NOTE_CT: "SaveCreditNoteCustType",
    GET_CREDIT_NOTE_CT_REPORT: "CreditNoteCustTypeReport",
    UPDATE_CREDIT_NOTE_CT: "UpdateCreditNoteCustType",
    DELETE_CREDIT_NOTE_CT: "DeleteCreditNoteCustType",

    GET_ALL_CREDIT_NOTE_ST: "CreditNoteSuppTypeList",
    GET_CREDIT_NOTE_ST_BY_CODE: "CreditNoteSuppType",
    SAVE_CREDIT_NOTE_ST: "SaveCreditNoteSuppType",
    GET_CREDIT_NOTE_ST_REPORT: "CreditNoteSuppTypeReport",
    UPDATE_CREDIT_NOTE_ST: "UpdateCreditNoteSuppType",
    DELETE_CREDIT_NOTE_ST: "DeleteCreditNoteSuppType",

    GET_ALL_DEBIT_NOTE_CT: "DebitNoteCustTypeList",
    GET_DEBIT_NOTE_CT_BY_CODE: "DebitNoteCustType",
    SAVE_DEBIT_NOTE_CT: "SaveDebitNoteCustType",
    GET_DEBIT_NOTE_CT_REPORT: "DebitNoteCustTypeReport",
    UPDATE_DEBIT_NOTE_CT: "UpdateDebitNoteCustType",
    DELETE_DEBIT_NOTE_CT: "DeleteDebitNoteCustType",

    GET_ALL_DEBIT_NOTE_ST: "DebitNoteSuppTypeList",
    GET_DEBIT_NOTE_ST_BY_CODE: "DebitNoteSuppType",
    SAVE_DEBIT_NOTE_ST: "SaveDebitNoteSuppType",
    GET_DEBIT_NOTE_ST_REPORT: "DebitNoteSuppTypeReport",
    UPDATE_DEBIT_NOTE_ST: "UpdateDebitNoteSuppType",
    DELETE_DEBIT_NOTE_ST: "DeleteDebitNoteSuppType",

    GET_ALL_CREDIT_NOTE_CUSTOMER: "CreditNoteCustomerList",
    GET_CREDIT_NOTE_CUSTOMER_BY_CODE: "CreditNoteCustomer",
    UPDATE_CREDIT_NOTE_CUSTOMER: "UpdateCreditNoteCustomer",
    SAVE_CREDIT_NOTE_CUSTOMER: "SaveCreditNoteCustomer",
    DELETE_CREDIT_NOTE_CUSTOMER: "DeleteCreditNoteCustomer",
    GET_CREDIT_NOTE_CUSTOMER_REPORT: "CreditNoteCustomerReport",

    GET_ALL_DEBIT_NOTE_CUSTOMER: "DebitNoteCustomerList",
    GET_DEBIT_NOTE_CUSTOMER_BY_CODE: "DebitNoteCustomer",
    UPDATE_DEBIT_NOTE_CUSTOMER: "UpdateDebitNoteCustomer",
    SAVE_DEBIT_NOTE_CUSTOMER: "SaveDebitNoteCustomer",
    DELETE_DEBIT_NOTE_CUSTOMER: "DeleteDebitNoteCustomer",
    GET_DEBIT_NOTE_CUSTOMER_REPORT: "DebitNoteCustomerReport",

    GET_ALL_CREDIT_NOTE_SUPPLIER: "CreditNoteSupplierList",
    GET_CREDIT_NOTE_SUPPLIER_BY_CODE: "CreditNoteSupplier",
    UPDATE_CREDIT_NOTE_SUPPLIER: "UpdateCreditNoteSupplier",
    SAVE_CREDIT_NOTE_SUPPLIER: "SaveCreditNoteSupplier",
    DELETE_CREDIT_NOTE_SUPPLIER: "DeleteCreditNoteSupplier",
    GET_CREDIT_NOTE_SUPPLIER_REPORT: "CreditNoteSupplierReport",

    GET_ALL_DEBIT_NOTE_SUPPLIER: "DebitNoteSupplierList",
    GET_DEBIT_NOTE_SUPPLIER_BY_CODE: "DebitNoteSupplier",
    UPDATE_DEBIT_NOTE_SUPPLIER: "UpdateDebitNoteSupplier",
    SAVE_DEBIT_NOTE_SUPPLIER: "SaveDebitNoteSupplier",
    DELETE_DEBIT_NOTE_SUPPLIER: "DeleteDebitNoteSupplier",
    GET_DEBIT_NOTE_SUPPLIER_REPORT: "DebitNoteSupplierReport",

    GET_ALL_PURCHASE_RATE: "PurchaseRateList",
    GET_PURCHASE_RATE_BY_CODE: "PurchaseRate",
    UPDATE_PURCHASE_RATE: "UpdatePurchaseRate",
    SAVE_PURCHASE_RATE: "SavePurchaseRate",
    DELETE_PURCHASE_RATE: "DeletePurchaseRate",
    GET_PURCHASE_RATE_REPORT: "PurchaseRateReport",

    GET_ALL_VEHICLE: "VehicleList",
    GET_VEHICLE_BY_CODE: "Vehicle",
    UPDATE_VEHICLE: "UpdateVehicle",
    SAVE_VEHICLE: "SaveVehicle",
    DELETE_VEHICLE: "DeleteVehicle",
    GET_VEHICLE_REPORT: "VehicleReport",

    GET_ALL_PARTICULAR_CATEGORY: "ParticularCategoryList",
    GET_PARTICULAR_CATEGORY_BY_CODE: "ParticularCategory",
    UPDATE_PARTICULAR_CATEGORY: "UpdateParticularCategory",
    SAVE_PARTICULAR_CATEGORY: "SaveParticularCategory",
    DELETE_PARTICULAR_CATEGORY: "DeleteParticularCategory",
    GET_PARTICULAR_CATEGORY_REPORT: "ParticularCategoryReport",

    GET_ALL_CONDITION_SETUP: "ConditionSetupList",
    GET_CONDITION_SETUP_BY_CODE: "ConditionSetup",
    UPDATE_CONDITION_SETUP: "UpdateConditionSetup",
    SAVE_CONDITION_SETUP: "SaveConditionSetup",
    DELETE_CONDITION_SETUP: "DeleteConditionSetup",
    GET_CONDITION_SETUP_REPORT: "ConditionSetupReport",

    GET_ALL_LIKERT_POINT: "LikertPointSetupList",
    GET_LIKERT_POINT_BY_CODE: "LikertPointSetup",
    UPDATE_LIKERT_POINT: "UpdateLikertPointSetup",
    SAVE_LIKERT_POINT: "SaveLikertPointSetup",
    DELETE_LIKERT_POINT: "DeleteLikertPointSetup",
    GET_LIKERT_POINT_REPORT: "LikertPointSetupReport",

    GET_ALL_PROCESS: "ProcessSetupList",
    GET_PROCESS_BY_CODE: "ProcessSetup",
    UPDATE_PROCESS: "UpdateProcessSetup",
    SAVE_PROCESS: "SaveProcessSetup",
    DELETE_PROCESS: "DeleteProcessSetup",
    GET_PROCESS_REPORT: "ProcessSetupReport",

    GET_ALL_OBJECT: "ObjectSetupList",
    GET_OBJECT_BY_CODE: "ObjectSetup",
    UPDATE_OBJECT: "UpdateObjectSetup",
    SAVE_OBJECT: "SaveObjectSetup",
    DELETE_OBJECT: "DeleteObjectSetup",
    GET_OBJECT_REPORT: "ObjectSetupReport",

    GET_ALL_PARTICULAR: "ParticularSetupList",
    GET_PARTICULAR_BY_CODE: "ParticularSetup",
    UPDATE_PARTICULAR: "UpdateParticularSetup",
    SAVE_PARTICULAR: "SaveParticularSetup",
    DELETE_PARTICULAR: "DeleteParticularSetup",
    GET_PARTICULAR_REPORT: "ParticularSetupReport",

    GET_ALL_TANK: "TankSetupList",
    GET_TANK_BY_CODE: "TankSetup",
    UPDATE_TANK: "UpdateTankSetup",
    SAVE_TANK: "SaveTankSetup",
    DELETE_TANK: "DeleteTankSetup",
    GET_TANK_REPORT: "TankSetupReport",

    GET_ALL_RETAIL_STRUCTURE: "RetailStructureSetupList",
    GET_RETAIL_STRUCTURE_BY_CODE: "RetailStructureSetup",
    UPDATE_RETAIL_STRUCTURE: "UpdateRetailStructureSetup",
    SAVE_RETAIL_STRUCTURE: "SaveRetailStructureSetup",
    DELETE_RETAIL_STRUCTURE: "DeleteRetailStructureSetup",
    GET_RETAIL_STRUCTURE_REPORT: "RetailStructureSetupReport",

    GET_ALL_ROLE: "RoleList",
    GET_ALL_USERS: "NewRole",
    GET_ROLE_BY_CODE: "Role",
    GET_ROLE_RIGHT: "RoleRight",
    UPDATE_ROLE: "UpdateRole",
    SAVE_ROLE: "SaveRole",
    SAVE_RIGHT: "SaveRight",
    DELETE_ROLE: "DeleteRole",
    GET_ROLE_REPORT: "RoleReport"
  },

  LN: {
    GENERAL_TAB: "General",
    PURCHASES_TAB: "Purchases",
    DISPATCHES_TAB: "Dispatches",
    SEAL_TAB: "Seal"
  },

  PICK_LIST: {
    COST_CENTER: "cc",
    REPORTING_ANALYSIS_1: "ra1",
    REPORTING_ANALYSIS_2: "ra2",
    REPORTING_ANALYSIS_3: "ra3",
    REPORTING_ANALYSIS_4: "ra4",
    REPORTING_ANALYSIS_5: "ra5",
    REPORTING_ANALYSIS_6: "ra6",
    REPORTING_ANALYSIS_7: "ra7",
    REPORTING_ANALYSIS_8: "ra8",
    REPORTING_ANALYSIS_9: "ra9",
    REPORTING_ANALYSIS_10: "ra10"
  },

  API_PARAMS: {
    API_PARAM_METHOD_CALL: "calledFr",
    API_PARAM_USER_ID: "userId"
  },

  API_REQUEST_HEADERS: {
    DEFAULT: {
      contentType: "application/json",
      source: "STC",
      ifModifiedSince: "0",
      cacheControl: "no-cache",
      pragma: "no-cache"
    }
  },

  API_REQUEST_HEADER_KEYS: {
    AUTH_TOKEN: "X_AUTH_TOKEN",
    X_API_KEY: "X_API_KEY",
    X_API_KEY_VALUE: "0987654321003810"
  },

  EVENTS: {
    LOGOUT: "logout",
    SHOW_SESSION_TIMOUT: "showSessionTimout",
    PREVIOUS_TICKET: "previousTicket",
    INVALID_TOKEN: "invalidToken"
  },

  SESSION_TIMEOUT: {
    TIMEOUT_COMPONENT_SHOW_TIME: 60, // seconds for how long to show component
    SHOW_COMPONENT_BEFORE_TIME: 100, // seconds before timeout for when to show the component.
    TICK_TIME: 20000, // milliseconds
    DEFAULT_INTERACTION_TIME_LIMIT: 2
  },

  DAYS_FILTER: {
    DAYS_7: "7 days",
    DAYS_14: "14 days",
    DAYS_28: "28 days",
    CUSTOM: "Custom"
  },

  DATE_FORMAT: {
    MMDDYYYY: "MM/DD/YYYY",
    DDMMYYYY: "DD/MM/YYYY",
    YYYYMMDD: "YYYY-MM-DD",
    MDYYHMMA: "M/D/YY hh:mm a"
  },
  LOCALE: {
    EN_US: "en-US"
  }
};

// export const ANIMATION = {
//   CUSTOM_TOAST_ANIM: trigger("flyInOut", [
//     state(
//       "inactive",
//       style({
//         opacity: 0
//       })
//     ),
    // transition(
    //   "inactive => active",
    //   animate(
    //     "400ms ease-out",
    //     keyframes([
    //       style({
    //         transform: "translate3d(100%, 0, 0) skewX(-60deg)",
    //         opacity: 0
    //       }),
    //       style({
    //         transform: "skewX(20deg)",
    //         opacity: 1
    //       }),
    //       style({
    //         transform: "skewX(-5deg)",
    //         opacity: 1
    //       }),
    //       style({
    //         transform: "none",
    //         opacity: 1
    //       })
    //     ])
    //   )
    // ),
    // transition(
    //   "active => removed",
    //   animate(
    //     "400ms ease-out",
    //     keyframes([
    //       style({
    //         opacity: 1
    //       }),
    //       style({
    //         transform: "translate3d(100%, 0, 0) skewX(30deg)",
    //         opacity: 0
    //       })
    //     ])
    //   )
    // )
//   ])
// };
