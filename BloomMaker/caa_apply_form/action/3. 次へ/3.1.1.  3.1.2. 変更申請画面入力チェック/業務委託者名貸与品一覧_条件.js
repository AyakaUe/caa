
/**  業務委託者名　正規表現 */
const name_regex = /^.+[ \u3000]+.+$/;
/**  業務委託者名（よみがな）　正規表現 */
const kana_regex = /^(?:[\u3040-\u309Fー]+|[A-Za-z]+)(?:[ \u3000]+(?:[\u3040-\u309Fー]+|[A-Za-z]+))+$/;

for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_name == "") {
        return true;
    } else if (!$variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_name.match(name_regex)) {
        return true;
    }
    // アカウント有の場合はよみがな必須
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01") {
        if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana == "") {
            console.log("contract_user_kana is null");
            return true;
        } else if (!$variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana.match(kana_regex)) {
            console.log("contract_user_kana is invalid");
            return true;
        }
    } else {
        if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana != ""
            && !$variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana_no_check.match(kana_regex)) {
            console.log("contract_user_kana_no_check is invalid");
            return true;
        }
    }
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "") {
        return true;
    }
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_pc_flg == "") {
        return true;
    }
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_id_card_flg == "") {
        return true;
    }
    if ($input.provided_dev_equipment_flg[0].is_disable == $env.const.false
        && $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_dev_equipment_flg == "") {
        return true;
    }
    if ($input.provided_mobile_flg[0].is_disable == $env.const.false
        && $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_mobile_flg == "") {
        return true;
    }
    if ($input.provided_folder_access_flg[0].is_disable == $env.const.false
        && $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_folder_access_flg == "") {
        return true;
    }
}