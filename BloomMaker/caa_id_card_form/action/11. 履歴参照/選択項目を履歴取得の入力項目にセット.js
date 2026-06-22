/** 検索結果一覧 */
var searchResult = $variable.searchResult.records;
/** 選択行 */
var selectedRow = $variable.clickedCell.index;
/** 履歴取得のINPUT */
var historyParam = $variable.historyParam;

// company_cd
historyParam.company_cd = searchResult[selectedRow].company_cd;
// id_no
historyParam.id_no = searchResult[selectedRow].id_no;
// card_no
historyParam.card_no = searchResult[selectedRow].card_no;