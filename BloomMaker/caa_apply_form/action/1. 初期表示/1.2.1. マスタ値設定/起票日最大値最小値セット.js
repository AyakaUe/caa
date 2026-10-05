
// 起票日最大値最小値セット
/** 起票日最大値 */
var draft_date_max = $input.comp_ath_list[0].end_date;
/** 起票日最小値 */
var draft_date_min = $input.comp_ath_list[0].start_date;

// 所属している組織の有効範囲を取得
for (const item of $input.comp_ath_list) {
    if (item.end_date > draft_date_max) {
        draft_date_max = item.end_date;
    }
    if (item.start_date < draft_date_min) {
        draft_date_min = item.start_date;
    }
}

// 起票日最大値を設定する
$variable.draft_date.max = draft_date_max < $variable.draft_date.max ? draft_date_max : $variable.draft_date.max;
// 起票日最小値を設定する
$variable.draft_date.min = draft_date_min > $variable.draft_date.min ? draft_date_min : $variable.draft_date.min;