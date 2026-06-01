// ユーザーが入力した会社名
var inputCompanyName = $variable.optionalParameter.userParameter.caa_t_apply_info.contract_company_name;

// 契約会社リスト
var list = $input.contract_company_list;

// 一致する会社名が存在するかチェック
$variable.is_contract_company_same = list.some(item => item.contract_company_name == inputCompanyName);
