/** 役割コード */
const ROLE_CD = {
    申請者: "wf00",
    審査者: "wf10",
    承認者1: "wf20-1",
    承認者2: "wf20-2",
    承認者3: "wf20-3",
    汎用承認者: "wf30",
    情シス承認者: "wf40",
    決裁者: "wf50",
    通知者: "wf60"
};

/** 手動設定フラグ */
const ADD_FLG = {
    手動: "1",
    自動: "0"
};

/** ノードID */
const NODE_ID = {
    申請: "ND001",
    審査: "NV100",
    承認1: "NA200",
    承認2: "NA300",
    承認3: "NA400",
    承認4: "NV500",
    情報システム部承認者: "NA600",
    決裁者: "NA700"
};

/**
 * プロセスターゲット設定作成
 * @param {string} role_cd 役割コード
 * @param {Array} processors 処理者トランの配列
 * @returns {Array} プロセスターゲット設定の配列
 */
function createProcessTargetConfigs(role_cd, processors) {
    var processTargetConfigs = [];
    for (var i = 0; i < processors.length; i++) {
        if (processors[i].role_cd === role_cd) {
            if (processors[i].group_cd === null || processors[i].group_cd === undefined || processors[i].group_cd === "") {
                processTargetConfigs.push({
                    pluginId: "jp.co.intra_mart.workflow.plugin.authority.node.dynamic.user",
                    parameter: processors[i].user_cd
                });
            } else {
                processTargetConfigs.push({
                    pluginId: "jp.co.intra_mart.workflow.plugin.authority.node.dynamic.public_group",
                    parameter: $input.public_group_set_cd + "^" + processors[i].group_cd
                });
            }
        } else {
        }
    }
    return processTargetConfigs;
}

/** 
 * 縦配置ノードの拡張設定作成
 * @param {string} role_cd 役割コード
 * @param {Array} processors 処理者トランの配列
 * @returns {Array} 縦配置ノードの配列
 */
function createMatterNodeExpansions(role_cd, processors) {
    var matterNodeExpansions = [];
    for (var i = 0; i < processors.length; i++) {
        if (processors[i].role_cd === role_cd) {
            var processTargetConfigs = createProcessTargetConfigs(role_cd, [processors[i]]);
            if (processTargetConfigs.length > 0) {
                if (processors[i].group_cd === null || processors[i].group_cd === undefined || processors[i].group_cd === "") {
                    matterNodeExpansions.push(
                        {
                            nodeName: processors[i].user_name,
                            processTargetConfigs: processTargetConfigs
                        }
                    );
                } else {
                    matterNodeExpansions.push(
                        {
                            nodeName: processors[i].group_name,
                            processTargetConfigs: processTargetConfigs
                        }
                    );
                }
            }
        }
    }

    return matterNodeExpansions;
}

/** 
 * 縦配置ノード追加
 * @param {string} nodeId ノードID
 * @param {Array} processors 処理者トランの配列
 * @param {string} role_cd 役割コード
 */
function addHvNodeConfigs(nodeId, role_cd, processors) {
    var matterNodeExpansions = createMatterNodeExpansions(role_cd, processors);
    if (matterNodeExpansions.length > 0) {
        $variable.hvNodeConfigs.push(
            {
                nodeId: nodeId,
                display: false,
                readonly: false,
                dispatchControl: {
                    max: matterNodeExpansions.length,
                    min: 1
                },
                matterNodeExpansions: matterNodeExpansions
            }
        );
    } else {
        $variable.hvNodeConfigs.push(
            {
                nodeId: nodeId,
                display: false,
                readonly: false,
                dispatchControl: {
                    max: 0,
                    min: 0
                },
            }
        );
    }
}

/** 
 * 動的承認ノード追加
 * @param {string} nodeId ノードID
 * @param {Array} processors 処理者トランの配列
 * @param {string} role_cd 役割コード
 */
function addDcNodeConfigs(nodeId, role_cd, processors) {
    var processTargetConfigs = createProcessTargetConfigs(role_cd, processors);
    if (processTargetConfigs.length > 0) {
        $variable.dcNodeConfigs.push(
            {
                enable: true,
                nodeId: nodeId,
                display: false,
                readonly: false,
                processTargetConfigs: processTargetConfigs
            }
        );
    } else {
        $variable.dcNodeConfigs.push(
            {
                enable: false,
                nodeId: nodeId,
                display: false,
                readonly: false
            }
        );
    }
}

// リスト初期化
$variable.hvNodeConfigs = [];
$variable.dcNodeConfigs = [];

// 処理者トランの役割コードによってノード変数設定
// 審査者は縦ノードに設定
addHvNodeConfigs(NODE_ID.審査, ROLE_CD.審査者, $variable.optionalParameter.userParameter.caa_t_request_processor);
// 承認者1は動的ノードに設定
addDcNodeConfigs(NODE_ID.承認1, ROLE_CD.承認者1, $variable.optionalParameter.userParameter.caa_t_request_processor);
// 承認者2は動的ノードに設定
addDcNodeConfigs(NODE_ID.承認2, ROLE_CD.承認者2, $variable.optionalParameter.userParameter.caa_t_request_processor);
// 承認者3は動的ノードに設定
addDcNodeConfigs(NODE_ID.承認3, ROLE_CD.承認者3, $variable.optionalParameter.userParameter.caa_t_request_processor);
// 汎用承認者は縦ノードに設定
addHvNodeConfigs(NODE_ID.承認4, ROLE_CD.汎用承認者, $variable.optionalParameter.userParameter.caa_t_request_processor);
// 情シス承認者は動的ノードに設定
addDcNodeConfigs(NODE_ID.情報システム部承認者, ROLE_CD.情シス承認者, $variable.optionalParameter.userParameter.caa_t_request_processor);
// 決裁者は動的ノードに設定
addDcNodeConfigs(NODE_ID.決裁者, ROLE_CD.決裁者, $variable.optionalParameter.userParameter.caa_t_request_processor);