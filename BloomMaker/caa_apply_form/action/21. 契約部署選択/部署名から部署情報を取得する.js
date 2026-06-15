/**
 * 部署名から部署情報を取得する
 * @param {string} department_name - 部署名
 * @param {Array} records - 組織一覧（$variable.get_department_list_result.records）
 * @returns {Object|null} 部署情報 / 見つからない場合は null
 */
function getDepartmentInfo(department_name, records) {
    var department = records.find(function (record) {
        return record.department_name === department_name;
    });

    if (!department) {
        return null;
    }

    return {
        receive_dept_cd: department.department_cd,
        receive_dept_name: department.department_name,
        receive_company_cd: department.company_cd,
        receive_company_name: department.company_name,
        receive_company_short: department.company_short_name
    };
}

// 部署名から部署情報取得
var result = getDepartmentInfo(
    $variable.selected_departments.department_name,
    $variable.get_department_list_result.records
);

// 申請情報テーブルにセット
if (result !== null) {
    Object.assign(
        $variable.optionalParameter.userParameter.caa_t_apply_info,
        result
    );
}