
// アカウント無⇒有もしくは、有⇒無の切替時に、業務委託者（よみがな）を、入力していた内容で上書きする。

var contract_user_kana = "";
for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
    contract_user_kana = $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01"
        ? $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana
        : $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana_no_check;

    $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana = contract_user_kana;
    $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana_no_check = contract_user_kana;
}
