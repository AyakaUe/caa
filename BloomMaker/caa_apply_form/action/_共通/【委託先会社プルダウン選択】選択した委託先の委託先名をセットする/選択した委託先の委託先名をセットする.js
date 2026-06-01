// 契約会社コード（検索したいコード）
var targetCd = $variable.optionalParameter.userParameter.caa_t_apply_info.contract_company_cd;

// 契約会社リスト
var list = $input.contract_company_list;

// 一致する会社を検索
var matched = list.find(item => item.contract_company_cd == targetCd);

// 名前を取得（見つからなければ空文字）
var contractCompanyName = matched ? matched.contract_company_cd == "9999" ? null : matched.contract_company_name : null;

$variable.optionalParameter.userParameter.caa_t_apply_info.contract_company_name = contractCompanyName;