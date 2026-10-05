
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
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {

    let mail_body = input.mail_body;
    let contract_user_info = "";
    /** 申請画面入力データ **/
    let apply_data = input.ledger_data;
    let n = "";

    if (apply_data.length > 0) {
        for (let i = 0; i < apply_data.length; i++) {
            let receive_start_date = "";
            let receive_plan_end_date = "";
            let receive_end_date = "";
            let contract_company_name = "";
            let contract_user_name = "";
            let contract_user_kana = "";
            let receive_dept_name = "";
            let provided_pc_memo = "";
            let receive_user_name = "";
            let receive_user_cd = "";

            if (apply_data[i].receive_start_date !== null) {
                receive_start_date = formatDate(apply_data[i].receive_start_date, sep = "/");
            } else {
                receive_start_date = "";
            }

            if (apply_data[i].receive_plan_end_date !== null) {
                receive_plan_end_date = formatDate(apply_data[i].receive_plan_end_date, sep = "/");
            } else {
                receive_plan_end_date = "";
            }

            if (apply_data[i].receive_end_date !== null) {
                receive_end_date = formatDate(apply_data[i].receive_end_date, sep = "/");
            } else {
                receive_end_date = "";
            }

            if (apply_data[i].provided_pc_memo !== null) {
                provided_pc_memo = apply_data[i].provided_pc_memo;
            }

            if (apply_data[i].contract_company_name !== null) {
                contract_company_name = apply_data[i].contract_company_name;
            }

            if (apply_data[i].contract_user_name !== null) {
                contract_user_name = apply_data[i].contract_user_name;
            }

            if (apply_data[i].contract_user_kana !== null) {
                contract_user_kana = apply_data[i].contract_user_kana;
            }

            if (apply_data[i].receive_dept_name !== null) {
                receive_dept_name = apply_data[i].receive_dept_name;
            }

            if (apply_data[i].receive_user_name !== null) {
                receive_user_name = apply_data[i].receive_user_name;
            }

            if (apply_data[i].receive_user_cd !== null) {
                receive_user_cd = apply_data[i].receive_user_cd;
            }

            if (i !== 0) {
                n = "\n";
            }

            let user_info = n + "・申請種別：貸出" + "\n" +
                "・業務委託先：" + contract_company_name + "\n" +
                "・氏名：" + contract_user_name + "\n" +
                "・氏名（よみがな）：" + contract_user_kana + "\n" +
                "・就業先部署名：" + receive_dept_name + "\n" +
                "・PC備考：" + provided_pc_memo + "\n" +
                "・受入開始日：" + receive_start_date + "\n" +
                "・受入終了予定日：" + receive_plan_end_date + "\n" +
                "・受入終了日：" + receive_end_date + "\n" + 
                "・担当者氏名：" + receive_user_name + "\n" +
                "・社員番号：" + receive_user_cd + "\n";

            contract_user_info = contract_user_info + user_info;

        }
        mail_body = mail_body.replace('{^contract_user_info^}', contract_user_info);
    } else {
        mail_body = "";
    }

    return {
        mail_body: mail_body
    };
}
