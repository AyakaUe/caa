
// 起票日最大値最小値チェック
/** 起票日 */
var draft_date = $variable.optionalParameter.userParameter.caa_t_request_common.draft_date;
/** 起票日最大値 */
var draft_date_max = $variable.draft_date.max;
/** 起票日最小値 */
var draft_date_min = $variable.draft_date.min;

// 起票日が最大値を超えていたら最大値で上書きする
if (draft_date > draft_date_max) {
    draft_date = draft_date_max;
}

// 起票日が最小値を下回っていたら最小値で上書きする
if (draft_date < draft_date_min) {
    draft_date = draft_date_min;
}

$variable.optionalParameter.userParameter.caa_t_request_common.draft_date = draft_date;