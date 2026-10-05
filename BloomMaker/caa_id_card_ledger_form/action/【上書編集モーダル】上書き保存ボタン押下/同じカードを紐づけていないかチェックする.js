// 最初にリセット
$variable.updateflg = false

// 短縮用
let select_lists = $variable.update_modal.select_lists

// 各自比較
for (let i = 0; i < select_lists.length; i++) {
    let id_no = select_lists[i].id_no
    let card_no = select_lists[i].card_no
    let return_flg = select_lists[i].return_flg
    for (let j = i + 1; j < select_lists.length; j++) {
        // 空欄かどうか
        if (select_lists[j].id_no != "" && select_lists[j].id_no != null) {
            if (id_no != select_lists[j].id_no && card_no != select_lists[j].card_no) {
                // 比較対象と異なるなら何もしない
            } else if (return_flg == '01' || select_lists[j].return_flg == '01') {
                // どちらかが返却済みでも何もしない
            } else if (select_lists[i].contract_user_name == select_lists[j].contract_user_name) {
                // 業務委託者名が同じなら何もしない
            }
             else {
                $variable.updateflg = true
            }
        } else {
            // 比較対象が空欄なら何もしない
        }
    }
}