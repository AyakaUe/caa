
/**  業務委託者名　正規表現 */
const name_regex = /^.+[ \u3000]+.+$/;
/**  業務委託者名（よみがな）　正規表現 */
const kana_regex =
  /^(?:[\u3040-\u309F\u30A0-\u30FFー]+|[A-Za-z]+)(?:[ \u3000]+(?:[\u3040-\u309F\u30A0-\u30FFー]+|[A-Za-z]+))+$/;



for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
    try {
        if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_name == ""
            || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_name == null) {
            console.log("業務委託者名が未入力");
            return true;
        } else if (!$variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_name.match(name_regex)) {
            console.log("業務委託者名が正規表現にマッチしない");
            return true;
        }
    } catch (e) {
        console.log("業務委託者名が未入力" + e);
        return true;
    }
    // アカウント有の場合はよみがな必須
    try {
        if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01") {
            if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana == ""
                || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana == null) {
                console.log("業務委託者名（よみがな）が未入力");
                return true;
            } else if (!$variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana.match(kana_regex)) {
                console.log("業務委託者名（よみがな）が正規表現にマッチしない");
                return true;
            }
        } else {
            if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana_no_check != ""
                && $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana_no_check != null
                && !$variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].contract_user_kana_no_check.match(kana_regex)) {
                return true;
            }
        }
    } catch (e) {
        console.log("業務委託者名（よみがな）が未入力" + e);
        return true;
    }
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == ""
        || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == null) {
        return true;
    }
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_pc_flg == ""
        || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_pc_flg == null) {
        return true;
    }
    if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_id_card_flg == ""
        || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_id_card_flg == null) {
        return true;
    }
    if ($input.provided_dev_equipment_flg[0].is_disable == $env.const.false
        && ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_dev_equipment_flg == ""
            || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_dev_equipment_flg == null)) {
        return true;
    }
    if ($input.provided_mobile_flg[0].is_disable == $env.const.false
        && ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_mobile_flg == ""
            || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_mobile_flg == null)) {
        return true;
    }
    if ($input.provided_folder_access_flg[0].is_disable == $env.const.false
        && ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_folder_access_flg == ""
            || $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_folder_access_flg == null)) {
        return true;
    }
}
