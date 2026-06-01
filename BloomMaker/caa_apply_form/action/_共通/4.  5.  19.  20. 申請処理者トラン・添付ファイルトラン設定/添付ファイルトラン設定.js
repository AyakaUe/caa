/** 書類種別 */
const DOCUMENT_TYPE = {
    業務委託契約書: "CONTRACT",
    社屋内外作業誓約書: "PLEDGE"
};

/** 申請区分コード */
const requestKbnCd = {
    NEW: "01", // 新規受入
    UPDATE: "02", // 変更申請
    DELETE: "03" // 終了申請
};

/** 申請区分コード */
var request_kbn_cd = $input.request.request_kbn_cd;

/** 添付ファイルトランに追加 */
function addApplyAttachedFile(documentType, fileKey) {
    /** 添付ファイルトランテンプレート */
    const caa_t_apply_attached_file = {
        user_data_id: $input.request.imwUserDataId,
        file_key: fileKey,
        document_type: documentType,
        file_delete_flg: "0",
        add_date: null,
        add_user: $input.comp_ath_list[0].user_cd,
        upd_date: null,
        upd_user: $input.comp_ath_list[0].user_cd,
        delete_flg: "0"
    };

    $variable.optionalParameter.userParameter.caa_t_apply_attached_file.push(
        caa_t_apply_attached_file
    );
}

// 初期化
$variable.optionalParameter.userParameter.caa_t_apply_attached_file = [];

// 業務委託契約書を添付ファイルトランにセット
if (request_kbn_cd === requestKbnCd.NEW) {
    for (let i = 0; i < $variable.contract_attached_files_new.length; i++) {
        addApplyAttachedFile(DOCUMENT_TYPE.業務委託契約書, $variable.contract_attached_files_new[i]);
    }
} else {
    for (let i = 0; i < $variable.contract_attached_files.length; i++) {
        addApplyAttachedFile(DOCUMENT_TYPE.業務委託契約書, $variable.contract_attached_files[i]);
    }
}

// 社屋内外作業誓約書を添付ファイルトランにセット
if (request_kbn_cd === requestKbnCd.NEW) {
    for (let i = 0; i < $variable.contract_attached_files_new.length; i++) {
        addApplyAttachedFile(DOCUMENT_TYPE.社屋内外作業誓約書, $variable.pledge_attached_files_new[i]);
    }
} else {
    for (let i = 0; i < $variable.pledge_attached_files.length; i++) {
        addApplyAttachedFile(DOCUMENT_TYPE.社屋内外作業誓約書, $variable.pledge_attached_files[i]);
    }
}