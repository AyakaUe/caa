// 勤務地nullチェック　エラーハンドリング
if ($variable.optionalParameter.userParameter.caa_t_apply_info.work_location !== null && $variable.optionalParameter.userParameter.caa_t_apply_info.work_location !== "") {
    // DBの値を画面表示用に変換
    $variable.work_location_cheked.forEach(i => {
        i.isChecked = $variable.optionalParameter.userParameter.caa_t_apply_info.work_location.split(",").includes(i.item_cd);
    });
    // 勤務地その他チェック
    $variable.is_work_location_other_checked
        = $variable.work_location_cheked.filter(i => i.isChecked && i.item_cd === "99").length > 0;
}
