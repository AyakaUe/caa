$variable.ringiUrl = "";
let add_company_cd = "?company_cd=" + $input.request.company_cd;
let add_doc_management_no = "&document_management_no=" + $variable.optionalParameter.userParameter.caa_t_apply_info.doc_management_no;
let new_url = $constant.ringiUrl + add_company_cd + add_doc_management_no;
$variable.ringiUrl = new_url;