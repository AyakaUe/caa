/**
 * 社員番号から受入担当者情報を取得する
 * @param {string} employeeNo - 社員番号
 * @param {Array} records - ユーザ一覧（$variable.get_user_list_result.records）
 * @returns {Object|null} 受入担当者情報 / 見つからない場合は null
 */
function getReceiveUserInfo(employeeNo, dept_name, records) {
    var user = records.find(function (record) {
        return record.employee_no === employeeNo
            && record.dept_name === dept_name;
    });

    if (!user) {
        return null;
    }

    return {
        receive_user_cd: user.user_cd,
        receive_employee_no: user.employee_no,
        receive_user_name: user.user_name,
        receive_post_cd: user.post_cd,
        receive_post_name: user.post_name
    };
}

// 社員番号からユーザ情報取得
var result = getReceiveUserInfo(
    $variable.selected_users.employee_no,
    $variable.selected_users.dept_name,
    $variable.get_user_list_result.records
);

// 申請情報テーブルにセット
if (result !== null) {
    Object.assign(
        $variable.optionalParameter.userParameter.caa_t_apply_info,
        result
    );
}