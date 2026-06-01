
/** 書類種別 */
const DOCUMENT_TYPE = {
    業務委託契約書: "CONTRACT",
    社屋内外作業誓約書: "PLEDGE"
};

// 業務委託契約書削除済み表示設定
$variable.is_contract_attached_files_deleted =
    $variable.optionalParameter.userParameter.caa_t_apply_attached_file.some(item => item.document_type === DOCUMENT_TYPE.業務委託契約書 && item.file_delete_flg !== '0');
// 社屋内外作業誓約書削除済み表示設定
$variable.is_pledge_attached_files_deleted =
    $variable.optionalParameter.userParameter.caa_t_apply_attached_file.some(item => item.document_type === DOCUMENT_TYPE.社屋内外作業誓約書 && item.file_delete_flg !== '0');