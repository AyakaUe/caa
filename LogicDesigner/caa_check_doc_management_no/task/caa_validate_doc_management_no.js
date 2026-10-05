/**
 * 稟議番号フォーマットチェック
 * @param {*} ringiNo 
 * @returns 
 */
function validateRingiNo(ringiNo) {
    // 稟議番号があるか
    if (ringiNo === null || ringiNo === "") {
        return {
            error: true,
            message: "稟議番号が入力されていません"
        };
    }
    // - があるか
    if (ringiNo.indexOf("-") < 0) {
        return {
            error: true,
            message: "ハイフン(-)がありません"
        };
    }

    // - の前を取得
    const company_short_name = ringiNo.split("-")[0];

    // 半角大文字英字のみ
    if (!/^[A-Z]+$/.test(company_short_name)) {
        return {
            error: true,
            message: "ハイフン前が会社略称ではありません",
            company_short_name: company_short_name
        };
    }

    return {
        error: false,
        company_short_name: company_short_name
    };
}

/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {
    let ringiNo = input.ringiNo;
    let validationResult = validateRingiNo(ringiNo);
    return validationResult;
}