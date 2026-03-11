/** 検索結果一覧 */
var searchResult = $variable.searchResult.records;
/** 選択行 */
var selectedRow = $variable.clickedCell.index;
/** 編集画面の入力項目 */
var updateParam = $variable.updateParam;

// 選択行の値を編集画面の入力項目にセット
// company_cd
updateParam.company_cd = searchResult[selectedRow].company_cd;
// id_no
updateParam.id_no = searchResult[selectedRow].id_no;
// card_no
updateParam.card_no = searchResult[selectedRow].card_no;
// is_lend_ng
updateParam.is_lend_ng = searchResult[selectedRow].is_lend_ng;
// is_disposal
updateParam.is_disposal = searchResult[selectedRow].is_disposal;
// memo
updateParam.memo = searchResult[selectedRow].memo;
// add_date
updateParam.add_date = searchResult[selectedRow].add_date;
// add_user
updateParam.add_user = searchResult[selectedRow].add_user;
// upd_date
updateParam.upd_date = searchResult[selectedRow].upd_date;
// upd_user
updateParam.upd_user = searchResult[selectedRow].upd_user;
// delete_flg
updateParam.delete_flg = searchResult[selectedRow].delete_flg;