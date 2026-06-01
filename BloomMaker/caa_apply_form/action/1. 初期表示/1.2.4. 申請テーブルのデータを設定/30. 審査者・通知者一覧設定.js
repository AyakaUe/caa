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

// 申請処理者トランから追加フラグ自動の審査者一覧設定
$variable.wf10_public_group.splice(0, 1);
$variable.wf10_public_group.push(...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.審査者 && item.add_flg === ADD_FLG.自動).map(item => ({
    cd: item.group_cd,
    name: item.group_name
})));

// 申請処理者トランから承認者1をマップにセット
Object.assign($variable.wf20_1_caa_t_request_processor, ...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.承認者1 && item.add_flg === ADD_FLG.手動).map(item => ({
    user_name: item.user_name,
    user_cd: item.user_cd,
    employee_no: item.employee_no,
    dept_cd: item.dept_cd,
    dept_name: item.dept_name,
    post_cd: item.position_cd,
    post_name: item.position_name
})));

// 申請処理者トランから承認者2設定
Object.assign($variable.wf20_2_caa_t_request_processor, ...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.承認者2 && item.add_flg === ADD_FLG.手動).map(item => ({
    user_name: item.user_name,
    user_cd: item.user_cd,
    employee_no: item.employee_no,
    dept_cd: item.dept_cd,
    dept_name: item.dept_name,
    post_cd: item.position_cd,
    post_name: item.position_name
})));

// 申請処理者トランから承認者3設定
Object.assign($variable.wf20_3_caa_t_request_processor, ...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.承認者3 && item.add_flg === ADD_FLG.手動).map(item => ({
    user_name: item.user_name,
    user_cd: item.user_cd,
    employee_no: item.employee_no,
    dept_cd: item.dept_cd,
    dept_name: item.dept_name,
    post_cd: item.position_cd,
    post_name: item.position_name
})));

// 申請処理者トランから追加フラグ自動の汎用承認者一覧設定
$variable.wf30_public_group.splice(0, 1);
$variable.wf30_public_group.push(...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.汎用承認者 && item.add_flg === ADD_FLG.自動).map(item => ({
    cd: item.group_cd,
    name: item.group_name
})));

// 申請処理者トランから追加フラグ自動の情シス承認者一覧設定
$variable.wf40_public_group.splice(0, 1);
$variable.wf40_public_group.push(...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.情シス承認者 && item.add_flg === ADD_FLG.自動).map(item => ({
    cd: item.group_cd,
    name: item.group_name
})));

// 申請処理者トランから追加フラグ自動の決裁者一覧設定
$variable.wf50_public_group.splice(0, 1);
$variable.wf50_public_group.push(...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.決裁者 && item.add_flg === ADD_FLG.自動).map(item => ({
    cd: item.group_cd,
    name: item.group_name
})));

// 申請処理者トランから追加フラグ自動の通知者一覧設定
$variable.wf60_public_group.splice(0, 1);
$variable.wf60_public_group.push(...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.通知者 && item.add_flg === ADD_FLG.自動).map(item => ({
    cd: item.group_cd,
    name: item.group_name
})));

/** ユーザ追加の審査者・通知者の設定 */

// 申請処理者トランから追加フラグ手動の審査者一覧設定
$variable.wf10_caa_t_request_processor.splice(0, 1);
$variable.wf10_caa_t_request_processor.push(...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.審査者 && item.add_flg === ADD_FLG.手動).map(item => ({
    user_name: item.user_name,
    user_cd: item.user_cd,
    employee_no: item.employee_no,
    dept_cd: item.dept_cd,
    dept_name: item.dept_name,
    post_cd: item.position_cd,
    post_name: item.position_name
})));

// 申請処理者トランから追加フラグ手動の通知者一覧設定
$variable.wf60_caa_t_request_processor.splice(0, 1);
$variable.wf60_caa_t_request_processor.push(...$input.caa_t_request_processor.filter(item => item.role_cd === ROLE_CD.通知者 && item.add_flg === ADD_FLG.手動).map(item => ({
    user_name: item.user_name,
    user_cd: item.user_cd,
    employee_no: item.employee_no,
    dept_cd: item.dept_cd,
    dept_name: item.dept_name,
    post_cd: item.position_cd,
    post_name: item.position_name
})));

/**
 * 処理済み記録取得
 * @param {string} roleCd 
 * @param {string} addFlg 
 * @returns 
 */
function getProcessingUserInfo(roleCd, addFlg) {
    var userInfos = [];
    for (const item of $input.caa_t_request_processor) {
        if (item.role_cd === roleCd && item.add_flg === addFlg) {
            console.log(`役割コード${roleCd}の処理者情報を設定:`, item);
            userInfos.push({
                user_data_id: item.user_data_id,
                matter_no: item.matter_no,
                role_cd: item.role_cd,
                detail_no: item.detail_no,
                add_flg: item.add_flg,
                company_cd: item.company_cd,
                user_cd: item.user_cd,
                user_name: item.user_name,
                employee_no: item.employee_no,
                dept_cd: item.dept_cd,
                dept_name: item.dept_name,
                position_cd: item.position_cd,
                position_name: item.position_name,
                group_cd: item.group_cd,
                group_name: item.group_name,
                processor_cd: item.processor_cd,
                processor_name: getProcessorName(item),
                processor_company_cd: item.processor_company_cd,
                processor_dept_cd: item.processor_dept_cd,
                processor_dept_name: item.processor_dept_name,
                processor_position_cd: item.processor_position_cd,
                processor_position_name: item.processor_position_name,
                processing_status: item.processing_status,
                processing_comment: item.processing_comment,
                processing_comment_user_name: item.processing_comment_user_name,
                processing_date: formatDateTimeJST(item.processing_date),
                add_date: item.add_date,
                add_user: item.add_user,
                upd_date: item.upd_date,
                upd_user: item.upd_user,
                delete_flg: item.delete_flg
            });
        }
    }
    return userInfos;
}

/** 手動一覧設定処理者取得 */
function getRequestProcessorLists(roleCd, addFlg) {
    var userInfos = [];
    for (const item of $input.caa_t_request_processor) {
        if (item.role_cd === roleCd && item.add_flg === addFlg) {
            console.log(`役割コード${roleCd}の処理者情報を設定:`, item);
            userInfos.push({
                user_name: item.user_name,
                user_cd: item.user_cd,
                employee_no: item.employee_no,
                company_cd: item.company_cd,
                dept_cd: item.dept_cd,
                dept_name: item.dept_name,
                post_cd: item.position_cd,
                post_name: item.position_name,
                processing_comment: item.processing_comment,
                processing_date: formatDateTimeJST(item.processing_date)
            });
        }
    }
    return userInfos;
}

/**
 * 処理者名設定
 * @param {*} item 
 * @returns 
 */
function getProcessorName(item) {
    var processor_name = "";
    if (item.processor_cd === "" || item.processor_name === "" || item.processor_cd === null || item.processor_name === null) {
        // 処理前は処理予定グループもしくは処理予定者を返却
        if (item.group_cd !== "" && item.group_name !== "" && item.group_cd !== null && item.group_name !== null) {
            processor_name = item.group_name;
        } else if (item.user_cd !== "" && item.user_name !== "" && item.user_cd !== null && item.user_name !== null) {
            processor_name = item.user_name + "[" + item.dept_name + "]";
        }
    } else {
        // 処理済みは稟議の表示方法に合わせて成形
        if (item.group_cd !== "" && item.group_name !== "" && item.group_cd !== null && item.group_name !== null) {
            // パブリックグループの場合
            // パブリックグループ名 + (役職名) + [処理者名]　で表示
            if (item.processor_position_name !== "" && item.processor_position_name !== null) {
                // 役職名がある場合
                processor_name = item.group_name + "(" + item.processor_position_name + ")" + "[" + item.processor_name + "]";
            } else {
                // 役職名がない場合
                processor_name = item.group_name + "[" + item.processor_name + "]";
            }
        } else if (item.user_cd !== "" && item.user_name !== "" && item.user_cd !== null && item.user_name !== null) {
            // 処理者ユーザの場合
            // 処理者名 + (役職名) + [部署名]　で表示
            if (item.processor_position_name !== "" && item.processor_position_name !== null) {
                // 役職名がある場合
                processor_name = item.processor_name + "(" + item.processor_position_name + ")" + "[" + item.processor_dept_name + "]";
            } else {
                // 役職名がない場合
                processor_name = item.processor_name + "[" + item.processor_dept_name + "]";
            }
        }
    }
    return processor_name;
}

/**
 * Date型 → "yyyy/mm/dd hh:mm:ss"（JST）
 * @param {Date} date
 * @returns {string}
 */
function formatDateTimeJST(date) {
    if (!date) {
        return "";
    }

    // Date型じゃなかった場合の保険
    const d = (date instanceof Date) ? new Date(date) : new Date(date);

    function pad(n) {
        return n < 10 ? "0" + n : n;
    }

    return (
        d.getFullYear() + "/" +
        pad(d.getMonth() + 1) + "/" +
        pad(d.getDate()) + " " +
        pad(d.getHours()) + ":" +
        pad(d.getMinutes()) + ":" +
        pad(d.getSeconds())
    );
}

/** 処理実行者設定 */
// 申請処理者トランから追加フラグ自動の申請者一覧の処理者を設定
$variable.wf00_processing_user_info = getProcessingUserInfo(ROLE_CD.申請者, ADD_FLG.自動);

// 申請処理者トランから追加フラグ自動の審査者一覧の処理者を設定
$variable.wf10_processing_user_info = getProcessingUserInfo(ROLE_CD.審査者, ADD_FLG.自動);

// 申請処理者トランから追加フラグ手動の承認者1一覧の処理者を設定
$variable.wf20_1_processing_user_info = getProcessingUserInfo(ROLE_CD.承認者1, ADD_FLG.手動);

// 申請処理者トランから追加フラグ手動の承認者2一覧の処理者を設定
$variable.wf20_2_processing_user_info = getProcessingUserInfo(ROLE_CD.承認者2, ADD_FLG.手動);

// 申請処理者トランから追加フラグ手動の承認者3一覧の処理者を設定
$variable.wf20_3_processing_user_info = getProcessingUserInfo(ROLE_CD.承認者3, ADD_FLG.手動);

// 申請処理者トランから追加フラグ自動の汎用承認者一覧の処理者を設定
$variable.wf30_processing_user_info = getProcessingUserInfo(ROLE_CD.汎用承認者, ADD_FLG.自動);

// 申請処理者トランから追加フラグ自動の情シス承認者一覧の処理者を設定
$variable.wf40_processing_user_info = getProcessingUserInfo(ROLE_CD.情シス承認者, ADD_FLG.自動);

// 申請処理者トランから追加フラグ自動の決裁者一覧の処理者を設定
$variable.wf50_processing_user_info = getProcessingUserInfo(ROLE_CD.決裁者, ADD_FLG.自動);

// 申請処理者トランから追加フラグ手動の審査者一覧の処理者を設定
$variable.wf10_caa_t_request_processor = getRequestProcessorLists(ROLE_CD.審査者, ADD_FLG.手動);
