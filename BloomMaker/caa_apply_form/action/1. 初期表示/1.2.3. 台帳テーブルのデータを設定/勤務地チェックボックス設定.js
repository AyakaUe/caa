
// DBの値を画面表示用に変換
$variable.work_location_cheked.forEach(i => {
    i.isChecked = $variable.optionalParameter.userParameter.caa_t_apply_info.work_location.split(",").includes(i.item_cd);
});