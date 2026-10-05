
/** 複数データ用改行 */
let n = "";
/** 受入開始日 */
let receive_start_date = "";
/** 受入終了予定日 */
let receive_plan_end_date = "";
/** 受入終了日 */
let receive_end_date = "";
/** 契約会社名 */
let contract_company_name = "";
/** 契約部署名 */
let receive_dept_name = "";
/** アカウント番号 */
let account_no = "";
/** PC備考 */
let provided_pc_memo = "";
/** 申請種別 */
let title = "";
/** 業務委託者名 */
let contract_user_name = "";
/** 業務委託者名(よみがな) */
let contract_user_kana = "";

/**
 * 日付フォーマット関数
 * @param {*} date 
 * @param {*} sep 
 * @returns 
 */
function formatDate(date, sep) {
    if (sep === null) {
        sep = "/";
    }
    if (date === null) {
        return "";
    }
    var yyyy = date.getFullYear();
    var mm = ('00' + (date.getMonth() + 1)).slice(-2);
    var dd = ('00' + date.getDate()).slice(-2);
    return yyyy + sep + mm + sep + dd;
}

/**
 * ユーザー情報追加
 * @param {*} contract_user_info 
 */
function addUserInfo(contract_user_info) {
    let user_info = n + title + "\n" +
        "・業務委託先：" + contract_company_name + "\n" +
        account_no +
        "・氏名：" + contract_user_name + "\n" +
        "・氏名（よみがな）：" + contract_user_kana + "\n" +
        "・就業先部署名：" + receive_dept_name + "\n" +
        "・PC備考：" + provided_pc_memo + "\n" +
        "・受入開始日：" + receive_start_date + "\n" +
        "・受入終了予定日：" + receive_plan_end_date + "\n" +
        "・受入終了日：" + receive_end_date + "\n";

    return contract_user_info + user_info;
}

/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {

    let contract_user_info = input.contract_user_info;
    if (contract_user_info === null) {
        contract_user_info = '';
    }

    /** 変更前台帳データ */
    let ledger_data = input.ledger_data;
    /** 申請画面入力データ */
    let loop_date = input.loop_date;


    if (ledger_data.receive_dept_cd != loop_date.receive_dept_cd) {
        receive_dept_name = loop_date.receive_dept_name;
    } else {
        receive_dept_name = ledger_data.receive_dept_name;
    }

    if (loop_date.receive_plan_end_date_mod_flg == '1' &&
        (ledger_data.receive_plan_end_date != loop_date.receive_plan_end_date)) {
        plan_end_date = loop_date.receive_plan_end_date;
    } else {
        plan_end_date = ledger_data.receive_plan_end_date;
    }

    if (ledger_data.receive_start_date !== null) {
        receive_start_date = formatDate(ledger_data.receive_start_date, sep = "/");
    } else {
        receive_start_date = "";
    }

    if (ledger_data.receive_plan_end_date !== null) {
        receive_plan_end_date = formatDate(ledger_data.receive_plan_end_date, sep = "/");
    } else {
        receive_plan_end_date = "";
    }

    if (ledger_data.receive_end_date !== null) {
        receive_end_date = formatDate(ledger_data.receive_end_date, sep = "/");
    } else {
        receive_end_date = "";
    }

    if (contract_user_info !== null && contract_user_info !== "") {
        n = "\n";
    }

    if (ledger_data.contract_company_name !== null) {
        contract_company_name = ledger_data.contract_company_name;
    }

    if (ledger_data.account_no !== null) {
        account_no = "・アカウント番号：" + ledger_data.account_no + "\n";
    }

    if (loop_date.provided_pc_memo !== null) {
        provided_pc_memo = loop_date.provided_pc_memo;
    }

    if (loop_date.contract_user_name !== null) {
        contract_user_name = loop_date.contract_user_name;
    }
    
    if (loop_date.contract_user_kana !== null) {
        contract_user_kana = loop_date.contract_user_kana;
    }

    // 貸出:PCフラグフラグが無→有になった場合
    if (ledger_data.provided_pc_flg == '02' && loop_date.provided_pc_flg == '01') {
        title = "・申請種別：貸出";

        contract_user_info = addUserInfo(contract_user_info);

        // 返却:PCフラグが有→無の場合
    } else if (ledger_data.provided_pc_flg == '01' && loop_date.provided_pc_flg == '02') {
        title = "・申請種別：返却";

        contract_user_info = addUserInfo(contract_user_info);

    }

    return {
        contract_user_info: contract_user_info
    };
}