const index = $im.resolve('$index');

// indexがnullだったりundefinedだったりする場合は処理実行しない
if (index == null || index == undefined) {
    return;
}

if (index >= 0) {
    $variable.idcard_request_param.contract_user_name = $variable.update_modal.select_lists[index].contract_user_name;
}