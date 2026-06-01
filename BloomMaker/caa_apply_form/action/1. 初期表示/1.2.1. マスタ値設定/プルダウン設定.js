// 出社回数
$variable.attend_count_labels = [''].concat($input.attend_count.map(pulldown => pulldown.item_name));
$variable.attend_count_values = [''].concat($input.attend_count.map(pulldown => pulldown.item_cd));
// アカウント
$variable.account_exist_labels = [''].concat($input.account_exist.map(pulldown => pulldown.item_name));
$variable.account_exist_values = [''].concat($input.account_exist.map(pulldown => pulldown.item_cd));
// PC
$variable.pc_exist_labels = [''].concat($input.pc_exist.map(pulldown => pulldown.item_name));
$variable.pc_exist_values = [''].concat($input.pc_exist.map(pulldown => pulldown.item_cd));
// IDカード
$variable.idcard_exist_labels = [''].concat($input.idcard_exist.map(pulldown => pulldown.item_name));
$variable.idcard_exist_values = [''].concat($input.idcard_exist.map(pulldown => pulldown.item_cd));
// 開発機材
$variable.dev_equipment_exist_labels = [''].concat($input.dev_equipment_exist.map(pulldown => pulldown.item_name));
$variable.dev_equipment_exist_values = [''].concat($input.dev_equipment_exist.map(pulldown => pulldown.item_cd));
// 携帯通信端末
$variable.mobile_exist_labels = [''].concat($input.mobile_exist.map(pulldown => pulldown.item_name));
$variable.mobile_exist_values = [''].concat($input.mobile_exist.map(pulldown => pulldown.item_cd));
// 共有フォルダのアクセス
$variable.folder_access_exist_labels = [''].concat($input.folder_access_exist.map(pulldown => pulldown.item_name));
$variable.folder_access_exist_values = [''].concat($input.folder_access_exist.map(pulldown => pulldown.item_cd));
// 委託先マスタ
$variable.contract_company_labels = [''].concat($input.contract_company_list.map(pulldown => pulldown.contract_company_name));
$variable.contract_company_values = [''].concat($input.contract_company_list.map(pulldown => pulldown.contract_company_cd));