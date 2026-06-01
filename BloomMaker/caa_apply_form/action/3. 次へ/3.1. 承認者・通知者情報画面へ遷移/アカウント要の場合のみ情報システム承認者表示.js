
$variable.is_wf40_disabled = true;

/** 申請区分コード */
const requestKbnCd = {
    NEW: "01", // 新規受入
    UPDATE: "02", // 変更申請
    DELETE: "03" // 終了申請
}

switch ($input.request.request_kbn_cd) {
    // 新規受入の場合、アカウント要が一つでもあったら表示
    case requestKbnCd.NEW:
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01") {
                $variable.is_wf40_disabled = false;
            }
        }
        break;
    // 変更申請の場合、アカウント要に変更した行があったら表示
    case requestKbnCd.UPDATE:
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01") {
                if ($input.caa_t_contractor_provided_item[i].provided_account_flg != $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg) {
                    $variable.is_wf40_disabled = false;
                }
            }
        }
        break;
    // 終了申請の場合非表示
    case requestKbnCd.DELETE:
        $variable.is_wf40_disabled = true;
        break;
    default:
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01") {
                $variable.is_wf40_disabled = false;
            }
        }
        break;
}


