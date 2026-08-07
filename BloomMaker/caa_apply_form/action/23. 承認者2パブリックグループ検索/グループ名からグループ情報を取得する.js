/**
 * グループ名からグループ情報を取得する
 * @param {string} groupName - グループ名
 * @param {Array} records - グループ一覧（$input.wf20_public_group）
 * @returns {Object|null} グループ情報 / 見つからない場合は null
 */
function getPublicGroup(groupName, records) {
    var group = records.find(function (record) {
        return record.name === groupName;
    });

    if (!group) {
        return null;
    }

    return {
        cd: group.cd,
        name: group.name
    };
}

// グループ名からグループ情報取得
var result = getPublicGroup(
    $variable.selected_wf20_public_group.name,
    $input.wf20_public_group
);

// 取得した情報をセット
if (result !== null) {
    Object.assign(
        $variable.wf20_2_public_group,
        result
    );
}