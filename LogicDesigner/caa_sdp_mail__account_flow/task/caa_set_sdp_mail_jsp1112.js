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

/** 複数データ用改行 */
let n = "";
/** 契約会社名 */
let contract_company_name = "";
/** アカウント番号 */
let account_no = "";
/** 業務委託者名 */
let contract_user_name = "";
/** 業務委託者名(よみがな) */
let contract_user_kana = "";
/** 契約部署名 */
let receive_dept_name = "";
/** PC備考 */
let provided_pc_memo = "";
/** 受入開始日 */
let receive_start_date = "";
/** 受入終了予定日 */
let receive_plan_end_date = "";
/** 受入終了日 */
let receive_end_date = "";
/** 受入担当者名 */
let receive_user_name = "";
/** 受入担当者CD */
let receive_user_cd = "";

/**
 * ユーザー情報追加
 * @param {*} contract_user_info 
 */
function addUserInfo(contract_user_info) {
    let user_info = n + "・申請種別：返却" + "\n" +
        "・業務委託先：" + contract_company_name + "\n" +
        account_no +
        "・氏名：" + contract_user_name + "\n" +
        "・氏名（よみがな）：" + contract_user_kana + "\n" +
        "・就業先部署名：" + receive_dept_name + "\n" +
        "・PC備考：" + provided_pc_memo + "\n" +
        "・受入開始日：" + receive_start_date + "\n" +
        "・受入終了予定日：" + receive_plan_end_date + "\n" +
        "・受入終了日：" + receive_end_date + "\n" +
        "・受入担当者名：" + receive_user_name + "\n" +
        "・受入担当者CD：" + receive_user_cd + "\n";

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
    let apply_data = input.loop_data;

    if (ledger_data.contract_company_name !== null) {
        contract_company_name = ledger_data.contract_company_name;
    }

    if (ledger_data.account_no !== null) {
        account_no = "・アカウント番号：" + ledger_data.account_no + "\n";
    }

    if (apply_data.contract_user_name !== null) {
        contract_user_name = apply_data.contract_user_name;
    }

    if (apply_data.contract_user_kana !== null) {
        contract_user_kana = apply_data.contract_user_kana;
    }

    if (ledger_data.receive_dept_name !== null) {
        receive_dept_name = ledger_data.receive_dept_name;
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

    if (apply_data.provided_pc_memo !== null) {
        provided_pc_memo = apply_data.provided_pc_memo;
    }

    if (ledger_data.receive_user_name !== null) {
        receive_user_name = ledger_data.receive_user_name;
    }

    if (ledger_data.receive_user_cd !== null) {
        receive_user_cd = ledger_data.receive_user_cd;
    }

    if (apply_data.provided_pc_flg == '01') {
        contract_user_info = addUserInfo(contract_user_info);
    }

    return {
        contract_user_info: contract_user_info
    };
}
