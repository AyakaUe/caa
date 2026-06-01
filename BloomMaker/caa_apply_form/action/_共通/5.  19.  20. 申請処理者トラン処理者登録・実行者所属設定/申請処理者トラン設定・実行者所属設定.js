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

/** ノードID */
const NODE_ID = {
    申請: "ND001",
    審査: "NV100",
    承認1: "NA200",
    承認2: "NA300",
    承認3: "NA400",
    承認4: "NV500",
    情報システム部承認者: "NA600",
    決裁者: "NA700"
};

// INPUTのノードIDによって処理者登録する対象のデータを切り替える
switch ($input.request.imwNodeId) {
    case NODE_ID.申請:
        // 役割コード「申請者」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.申請者) {
                console.log("申請ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                $variable.authUserDepartmentInfo.departmentCd = $input.comp_ath_list[0].department_cd;
                break;
            }
        }
        break;
    case NODE_ID.審査:
        // 役割コード「審査者」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.審査者
                && $variable.optionalParameter.userParameter.caa_t_request_processor[i].original_act_target_cd === $input.processTargetCd
            ) {
                console.log("審査ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== null
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== undefined
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== "") {
                    // 処理者トランにユーザが登録されている場合はその所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd;
                } else {
                    // 処理者トランにグループが登録されている場合は処理者の所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $input.comp_ath_list[0].department_cd;
                }
                break;
            }
        }
        break;
    case NODE_ID.承認1:
        // 役割コード「承認者1」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.承認者1
                && $variable.optionalParameter.userParameter.caa_t_request_processor[i].original_act_target_cd === $input.processTargetCd
            ) {
                console.log("承認1ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                $variable.authUserDepartmentInfo.departmentCd = $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd;
                break;
            }
        }
        break;
    case NODE_ID.承認2:
        // 役割コード「承認者2」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.承認者2
                && $variable.optionalParameter.userParameter.caa_t_request_processor[i].original_act_target_cd === $input.processTargetCd
            ) {
                console.log("承認2ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                $variable.authUserDepartmentInfo.departmentCd = $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd;
                break;
            }
        }
        break;
    case NODE_ID.承認3:
        // 役割コード「承認者3」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.承認者3
                && $variable.optionalParameter.userParameter.caa_t_request_processor[i].original_act_target_cd === $input.processTargetCd
            ) {
                console.log("承認3ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                $variable.authUserDepartmentInfo.departmentCd = $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd;
                break;
            }
        }
        break;
    case NODE_ID.承認4:
        // 役割コード「汎用承認者」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.汎用承認者
                && $variable.optionalParameter.userParameter.caa_t_request_processor[i].original_act_target_cd === $input.processTargetCd
            ) {
                console.log("承認4ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== null
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== undefined
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== "") {
                    // 処理者トランにユーザが登録されている場合はその所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd;
                } else {
                    // 処理者トランにグループが登録されている場合は処理者の所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $input.comp_ath_list[0].department_cd;
                }
                break;
            }
        }
        break;
    case NODE_ID.情報システム部承認者:
        // 役割コード「情シス承認者」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.情シス承認者
                && $variable.optionalParameter.userParameter.caa_t_request_processor[i].original_act_target_cd === $input.processTargetCd
            ) {
                console.log("情シス承認者ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== null
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== undefined
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== "") {
                    // 処理者トランにユーザが登録されている場合はその所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd;
                } else {
                    // 処理者トランにグループが登録されている場合は処理者の所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $input.comp_ath_list[0].department_cd;
                }
                break;
            }
        }
        break;
    case NODE_ID.決裁者:
        // 役割コード「決裁者」のデータを特定し、そのデータの処理者情報欄にログインユーザ情報を設定する
        for (var i = 0; i < $variable.optionalParameter.userParameter.caa_t_request_processor.length; i++) {
            if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].role_cd === ROLE_CD.決裁者
                && $variable.optionalParameter.userParameter.caa_t_request_processor[i].original_act_target_cd === $input.processTargetCd
            ) {
                console.log("決裁者ノードの処理者トラン設定");
                setApplicantInfoToProcessorTran();
                // 実行者所属設定
                if ($variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== null
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== undefined
                    && $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd !== "") {
                    // 処理者トランにユーザが登録されている場合はその所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $variable.optionalParameter.userParameter.caa_t_request_processor[i].dept_cd;
                } else {
                    // 処理者トランにグループが登録されている場合は処理者の所属を設定する
                    $variable.authUserDepartmentInfo.departmentCd = $input.comp_ath_list[0].department_cd;
                }
                break;
            }
        }
        break;
    default:
        console.log("未知のノードID");
}

/** 処理者トランに申請者情報をセット
 * @param {string} status 処理ステータス
 * @param {string} comment 処理コメント
 */
function setApplicantInfoToProcessorTran() {
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processor_cd = $input.comp_ath_list[0].user_cd;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processor_name = $input.comp_ath_list[0].user_name;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processor_company_cd = $input.comp_ath_list[0].company_cd;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processor_dept_cd = $input.comp_ath_list[0].department_cd;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processor_dept_name = $input.comp_ath_list[0].department_name;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processor_position_cd = $input.comp_ath_list[0].post_cd;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processor_position_name = $input.comp_ath_list[0].post_name;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processing_comment_user_name = $input.comp_ath_list[0].user_name;
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].processing_date = new Date();
    $variable.optionalParameter.userParameter.caa_t_request_processor[i].is_processing = true;
}