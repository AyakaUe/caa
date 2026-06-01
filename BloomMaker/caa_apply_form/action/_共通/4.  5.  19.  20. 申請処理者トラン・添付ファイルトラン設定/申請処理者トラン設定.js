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

// リスト初期化
$variable.optionalParameter.userParameter.caa_t_request_processor = [];

/** 詳細番号最大値 */
var max_detail_no = 0;

/** 申請処理者トランテンプレート */
var temp_caa_t_request_processor = {
    user_data_id: $input.caa_t_request_common.user_data_id,
    matter_no: $input.caa_t_request_common.matter_no,
    role_cd: "",
    detail_no: 0,
    add_flg: "",
    company_cd: $input.request.company_cd,
    user_cd: "",
    user_name: "",
    employee_no: "",
    dept_cd: "",
    dept_name: "",
    position_cd: "",
    position_name: "",
    group_cd: "",
    group_name: "",
    processor_cd: "",
    processor_name: "",
    processor_company_cd: "",
    processor_dept_cd: "",
    processor_dept_name: "",
    processor_position_cd: "",
    processor_position_name: "",
    processing_status: "",
    processing_comment: "",
    processing_comment_user_name: "",
    processing_date: null,
    add_date: null,
    add_user: $input.comp_ath_list[0].user_cd,
    upd_date: null,
    upd_user: $input.comp_ath_list[0].user_cd,
    delete_flg: "0",
    original_act_target_cd: ""
};

/**
 * 社員番号からユーザ情報を取得する
 * @param {string} employeeNo - 社員番号
 * @param {string} dept_name - 部署名
 * @param {Array} records - ユーザ一覧（$variable.get_user_list_result.records）
 * @returns {Object|null} ユーザ情報 / 見つからない場合は null
 */
function getUserInfo(employeeNo, dept_name, records) {
    var user = records.find(function (record) {
        return record.employee_no === employeeNo && record.dept_name === dept_name;
    });

    if (!user) {
        return null;
    }

    return {
        user_cd: user.user_cd,
        employee_no: user.employee_no,
        user_name: user.user_name,
        post_cd: user.post_cd,
        post_name: user.post_name,
        dept_cd: user.dept_cd,
        dept_name: user.dept_name,
        company_cd: user.company_cd,
        company_name: user.company_name,
        company_short: user.company_short
    };
}

/**
 * 申請処理者トランに追加
 * @param {string} role_cd 
 * @param {string} add_flg 
 * @param {string} user_cd 
 * @param {string} user_name 
 * @param {string} employee_no 
 * @param {string} dept_cd 
 * @param {string} dept_name 
 * @param {string} position_cd 
 * @param {string} position_name 
 * @param {string} group_cd 
 * @param {string} group_name 
 */
function addRequestProcessor(role_cd, add_flg, user_cd, user_name, employee_no, dept_cd, dept_name, position_cd, position_name, group_cd, group_name) {
    max_detail_no++;
    var new_processor = JSON.parse(JSON.stringify(temp_caa_t_request_processor));
    new_processor.role_cd = role_cd;
    new_processor.detail_no = max_detail_no;
    new_processor.add_flg = add_flg;
    if (group_cd === null || group_cd === undefined || group_cd === "") {
        // グループコードがない場合はユーザ情報をセット
        var userInfo = getUserInfo(employee_no, dept_name, $variable.get_user_list_result.records);
        if (userInfo) {
            new_processor.user_cd = userInfo.user_cd;
            new_processor.user_name = userInfo.user_name;
            new_processor.employee_no = userInfo.employee_no;
            new_processor.dept_cd = userInfo.dept_cd;
            new_processor.dept_name = userInfo.dept_name;
            new_processor.position_cd = userInfo.post_cd;
            new_processor.position_name = userInfo.post_name;
        } else {
            new_processor.user_cd = $input.comp_ath_list[0].user_cd;
            new_processor.user_name = $input.comp_ath_list[0].user_name;
            new_processor.employee_no = $input.comp_ath_list[0].employee_no;
            new_processor.dept_cd = $input.comp_ath_list[0].department_cd;
            new_processor.dept_name = $input.comp_ath_list[0].department_name;
            new_processor.position_cd = $input.comp_ath_list[0].post_cd;
            new_processor.position_name = $input.comp_ath_list[0].post_name;
        }
        new_processor.original_act_target_cd = new_processor.user_cd;
    } else {
        // グループコードがある場合はグループ情報をセット
        new_processor.group_cd = group_cd;
        new_processor.group_name = group_name;
        new_processor.original_act_target_cd = $input.public_group_set_cd + "^" + group_cd;
    }
    $variable.optionalParameter.userParameter.caa_t_request_processor.push(new_processor);
}

// 申請者設定
addRequestProcessor(
    ROLE_CD.申請者,
    ADD_FLG.自動,
    $input.comp_ath_list[0].user_cd,
    $input.comp_ath_list[0].user_name,
    $input.comp_ath_list[0].employee_no,
    $input.comp_ath_list[0].department_cd,
    $input.comp_ath_list[0].department_name,
    $input.comp_ath_list[0].post_cd,
    $input.comp_ath_list[0].post_name,
    "",
    ""
);

// 審査者設定
for (var i = 0; i < $variable.wf10_public_group.length; i++) {
    if ($variable.wf10_public_group[i].cd !== "") {
        addRequestProcessor(
            ROLE_CD.審査者,
            ADD_FLG.自動,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            $variable.wf10_public_group[i].cd,
            $variable.wf10_public_group[i].name
        );
    }
}

// 手動審査者設定
for (var j = 0; j < $variable.wf10_caa_t_request_processor.length; j++) {
    if ($variable.wf10_caa_t_request_processor[j].user_cd !== "") {
        addRequestProcessor(
            ROLE_CD.審査者,
            ADD_FLG.手動,
            $variable.wf10_caa_t_request_processor[j].user_cd,
            $variable.wf10_caa_t_request_processor[j].user_name,
            $variable.wf10_caa_t_request_processor[j].employee_no,
            $variable.wf10_caa_t_request_processor[j].dept_cd,
            $variable.wf10_caa_t_request_processor[j].dept_name,
            $variable.wf10_caa_t_request_processor[j].post_cd,
            $variable.wf10_caa_t_request_processor[j].post_name,
            "",
            ""
        );
    }
}

// 承認者1設定
if ($variable.wf20_1_caa_t_request_processor.user_cd !== "") {
    addRequestProcessor(
        ROLE_CD.承認者1,
        ADD_FLG.手動,
        $variable.wf20_1_caa_t_request_processor.user_cd,
        $variable.wf20_1_caa_t_request_processor.user_name,
        $variable.wf20_1_caa_t_request_processor.employee_no,
        $variable.wf20_1_caa_t_request_processor.dept_cd,
        $variable.wf20_1_caa_t_request_processor.dept_name,
        $variable.wf20_1_caa_t_request_processor.post_cd,
        $variable.wf20_1_caa_t_request_processor.post_name,
        "",
        ""
    );
}

// 承認者2設定
if ($variable.wf20_2_caa_t_request_processor.user_cd !== "") {
    addRequestProcessor(
        ROLE_CD.承認者2,
        ADD_FLG.手動,
        $variable.wf20_2_caa_t_request_processor.user_cd,
        $variable.wf20_2_caa_t_request_processor.user_name,
        $variable.wf20_2_caa_t_request_processor.employee_no,
        $variable.wf20_2_caa_t_request_processor.dept_cd,
        $variable.wf20_2_caa_t_request_processor.dept_name,
        $variable.wf20_2_caa_t_request_processor.post_cd,
        $variable.wf20_2_caa_t_request_processor.post_name,
        "",
        ""
    );
}

// 承認者3設定
if ($variable.wf20_3_caa_t_request_processor.user_cd !== "") {
    addRequestProcessor(
        ROLE_CD.承認者3,
        ADD_FLG.手動,
        $variable.wf20_3_caa_t_request_processor.user_cd,
        $variable.wf20_3_caa_t_request_processor.user_name,
        $variable.wf20_3_caa_t_request_processor.employee_no,
        $variable.wf20_3_caa_t_request_processor.dept_cd,
        $variable.wf20_3_caa_t_request_processor.dept_name,
        $variable.wf20_3_caa_t_request_processor.post_cd,
        $variable.wf20_3_caa_t_request_processor.post_name,
        "",
        ""
    );
}

// 汎用承認者設定
for (var k = 0; k < $variable.wf30_public_group.length; k++) {
    if ($variable.wf30_public_group[k].cd !== "") {
        addRequestProcessor(
            ROLE_CD.汎用承認者,
            ADD_FLG.自動,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            $variable.wf30_public_group[k].cd,
            $variable.wf30_public_group[k].name
        );
    }
}

// 情シス承認者設定
if ($variable.is_wf40_disabled === $env.const.false) {
    for (var l = 0; l < $variable.wf40_public_group.length; l++) {
        if ($variable.wf40_public_group[l].cd !== "") {
            addRequestProcessor(
                ROLE_CD.情シス承認者,
                ADD_FLG.自動,
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                $variable.wf40_public_group[l].cd,
                $variable.wf40_public_group[l].name
            );
        }
    }
}

// 決裁者設定
for (var m = 0; m < $variable.wf50_public_group.length; m++) {
    if ($variable.wf50_public_group[m].cd !== "") {
        addRequestProcessor(
            ROLE_CD.決裁者,
            ADD_FLG.自動,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            $variable.wf50_public_group[m].cd,
            $variable.wf50_public_group[m].name
        );
    }
}

// 通知者設定
for (var n = 0; n < $variable.wf60_public_group.length; n++) {
    if ($variable.wf60_public_group[n].cd !== "") {
        addRequestProcessor(
            ROLE_CD.通知者,
            ADD_FLG.自動,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            $variable.wf60_public_group[n].cd,
            $variable.wf60_public_group[n].name
        );
    }
}

// 手動通知者設定
for (var o = 0; o < $variable.wf60_caa_t_request_processor.length; o++) {
    if ($variable.wf60_caa_t_request_processor[o].user_cd !== "") {
        addRequestProcessor(
            ROLE_CD.通知者,
            ADD_FLG.手動,
            $variable.wf60_caa_t_request_processor[o].user_cd,
            $variable.wf60_caa_t_request_processor[o].user_name,
            $variable.wf60_caa_t_request_processor[o].employee_no,
            $variable.wf60_caa_t_request_processor[o].dept_cd,
            $variable.wf60_caa_t_request_processor[o].dept_name,
            $variable.wf60_caa_t_request_processor[o].post_cd,
            $variable.wf60_caa_t_request_processor[o].post_name,
            "",
            ""
        );
    }
}