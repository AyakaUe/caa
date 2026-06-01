
/** 申請区分コード */
const requestKbnCd = {
    NEW: "01", // 新規受入
    UPDATE: "02", // 変更申請
    DELETE: "03" // 終了申請
};

/** 申請区分名 */
const requestKbnName = {
    NEW: "（新規受入）",
    UPDATE: "（変更）",
    DELETE: "（終了）"
};

/** 件名 */
var subject = "";
/** タイトル 【業務委託者受入申請】 */
var title = $constant.subject_matter;
/** 申請区分コード
 * 01：新規受入
 * 02：変更
 * 03：終了*/
var request_kbn_cd = $input.caa_t_apply_info.request_kbn_cd;
/** 会社名 */
var companyName = $input.comp_ath_list[0].company_name;
/** 受入開始日 */
var receive_start_date = $variable.optionalParameter.userParameter.caa_t_apply_info.receive_start_date;
/** 受入終了予定日 */
var receive_plan_end_date = $variable.optionalParameter.userParameter.caa_t_apply_info.receive_plan_end_date;

/****************** 日付のフォーマット変換 ******************/
// date⇒yyyy/mm/dd string

function formatDate(date) {
    if (!date) return "";
    date = new Date(date);
    if (isNaN(date)) return "";
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return year + "/" + month + "/" + day;
}

// 受入開始日と受入終了予定日を日付フォーマット変換
var formattedReceiveStartDate = formatDate(receive_start_date);
var formattedReceivePlanEndDate = formatDate(receive_plan_end_date);

/****************** 件名の設定 ******************/
if (request_kbn_cd === requestKbnCd.NEW) {
    subject += requestKbnName.NEW + title + companyName + " " + formattedReceiveStartDate;
} else if (request_kbn_cd === requestKbnCd.UPDATE) {
    subject += requestKbnName.UPDATE + title + companyName;
} else if (request_kbn_cd === requestKbnCd.DELETE) {
    subject += requestKbnName.DELETE + title + companyName + " " + formattedReceivePlanEndDate;
} else {
    subject += requestKbnName.NEW + title + companyName + " " + formattedReceiveStartDate;
}

// 件名設定
$variable.optionalParameter.userParameter.caa_t_request_common.subject_matter = subject;