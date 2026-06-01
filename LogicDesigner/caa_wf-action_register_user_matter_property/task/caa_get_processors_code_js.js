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

/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {

    var records = input.records;
    Debug.print("records length = " + records.length);

    var processors = [];

    if (!records || records.length === 0) {
        return {
            processors: processors
        };
    }

    // 役割コードが申請以外の処理者コードを取得
    for (var i = 0; i < records.length; i++) {
        if (records[i].role_cd !== ROLE_CD.申請者 && records[i].processor_cd !== "" && records[i].processor_cd !== null) {
            processors.push(records[i].processor_cd);
        }
    }

    return {
        processors: processors
    };
}