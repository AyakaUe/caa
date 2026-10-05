
/** 役割コード */
const ROLE_CD = {
    申請者: "wf00",
    審査者: "wf10",
    承認者1: "wf20-1",
    承認者2: "wf20-2",
    承認者3: "wf20-3",
    汎用承認者: "wf30",
    情シス承認者: "wf40",
    決裁者: "wf50",
    通知者: "wf60"
};

/** 手動設定フラグ */
const ADD_FLG = {
    手動: "1",
    自動: "0"
};


/** 申請区分コード */
const requestKbnCd = {
    NEW: "01", // 新規受入
    UPDATE: "02", // 変更申請
    DELETE: "03" // 終了申請
}

/** 情報システム承認者の存在判定 
 * 再申請時は初期値と比較せず、申請時に情報システム承認者が自動で追加されているかどうかを判定するために、$inputの値を使用する
*/
const exists = $input.caa_t_request_processor.some(
    item =>
        item.role_cd === ROLE_CD.情シス承認者 &&
        item.add_flg === ADD_FLG.自動
);

switch ($input.request.request_kbn_cd) {
    // 新規受入の場合、アカウント要が一つでもあったら表示
    case requestKbnCd.NEW:
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01") {
                $variable.is_wf40_disabled = false;
                break;
            } else {
                $variable.is_wf40_disabled = true;
            }
        }
        break;
    // 変更申請の場合、アカウント要に変更した行があったら表示
    case requestKbnCd.UPDATE:

        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_contractor_provided_item.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg == "01") {
                if (exists) {
                    $variable.is_wf40_disabled = false;
                    break;
                }

                if ($input.caa_t_contractor_provided_item[i].provided_account_flg != $variable.optionalParameter.userParameter.caa_t_contractor_provided_item[i].provided_account_flg) {
                    $variable.is_wf40_disabled = false;
                    break;
                }
            } else {
                $variable.is_wf40_disabled = true;
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
                break;
            } else {
                $variable.is_wf40_disabled = true;
            }
        }
        break;
}
