function toHalfWidthDigits(str) {
  // null / undefined を空文字にする（従来構文）
  var s = (str === null || str === undefined) ? '' : String(str);
  return s.normalize('NFKC');  // 全角→半角（数字・英字・記号も正規化）
}

$variable.searchParam.id_no   = toHalfWidthDigits($variable.searchParam.id_no);
$variable.searchParam.card_no = toHalfWidthDigits($variable.searchParam.card_no);
$variable.updateParam.id_no   = toHalfWidthDigits($variable.updateParam.id_no);
$variable.updateParam.card_no = toHalfWidthDigits($variable.updateParam.card_no);