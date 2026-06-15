/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {

    var records = input.records;

    if (!records || records.length === 0) {
        return {
            receive_mod_flg: "1",
            contract_manage_user_name_mod_flg: "1",
            contract_work_content_mod_flg: "1",
            contract_end_plan_date_mod_flg: "1",
            receive_plan_end_date_mod_flg: "1",
            attend_count_mod_flg: "1",
            work_location_mod_flg: "1",
            doc_management_no_mod_flg: "1",
            contract_start_date: null,
            receive_start_date: null
        };
    }

    /**
     * 文字列型に変換
     * @param {*} value 値
     * @returns 文字列変換後の値
     */
    function normalize(value) {
        if (value === null || value === undefined) {
            return "";
        }
        // Date → ISO文字列に統一
        if (value instanceof Date) {
            return value.toISOString();
        }
        // 文字列なら trim + 全角→半角（必要なら）
        if (typeof value === "string") {
            return value.trim();
        }
        // 数値などは文字列化
        return String(value);
    }

    /**
     * 差異の有無チェック
     * @param {*} key 項目名
     * @returns 差異の有無
     */
    function hasDiff(key) {
        if (records.length === 1) {
            return false;
        }
        var baseValue = normalize(records[0][key]);
        for (var i = 1; i < records.length; i++) {
            if (normalize(records[i][key]) !== baseValue) {
                return true;
            }
        }
        return false;
    }

    return {
        receive_mod_flg: hasDiff("receive_employee_no") ? "0" : "1",
        contract_manage_user_name_mod_flg: hasDiff("contract_manage_user_name") ? "0" : "1",
        contract_work_content_mod_flg: hasDiff("contract_work_content") ? "0" : "1",
        contract_end_plan_date_mod_flg: hasDiff("contract_end_plan_date") ? "0" : "1",
        receive_plan_end_date_mod_flg: hasDiff("receive_plan_end_date") ? "0" : "1",
        attend_count_mod_flg: hasDiff("attend_count") ? "0" : "1",
        work_location_mod_flg: hasDiff("work_location") ? "0" : "1",
        doc_management_no_mod_flg: hasDiff("doc_management_no") ? "0" : "1",
        contract_start_date: hasDiff("contract_start_date") ? null : records[0]["contract_start_date"],
        receive_start_date: hasDiff("receive_start_date") ? null : records[0]["receive_start_date"]
    };
}