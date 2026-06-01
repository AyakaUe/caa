
/** 書類種別 */
const DOCUMENT_TYPE = {
    業務委託契約書: "CONTRACT",
    社屋内外作業誓約書: "PLEDGE"
};

// 添付ファイルトランから業務委託契約書のファイルキーを取得
$variable.contract_attached_files_new.push(
    ...$variable.optionalParameter.userParameter.caa_t_apply_attached_file.filter(item => item.document_type === DOCUMENT_TYPE.業務委託契約書 && item.file_delete_flg === '0').map(item => item.file_key));
// 添付ファイルトランから社屋内外作業誓約書のファイルキーを取得
$variable.pledge_attached_files_new.push(
    ...$variable.optionalParameter.userParameter.caa_t_apply_attached_file.filter(item => item.document_type === DOCUMENT_TYPE.社屋内外作業誓約書 && item.file_delete_flg === '0').map(item => item.file_key));
