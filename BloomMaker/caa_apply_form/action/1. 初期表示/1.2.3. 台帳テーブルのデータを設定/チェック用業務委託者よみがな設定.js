
// アカウント無用のよみがなに、業務委託者（よみがな）を、入力していた内容で上書きする。

var contract_user_kana = "";
for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
    $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana_no_check
        = $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana;
}
