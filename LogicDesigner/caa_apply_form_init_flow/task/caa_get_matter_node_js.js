/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {

    // ===== 入力 =====
    var systemMatterId = input.systemMatterId;
    var nodeId = input.nodeId;
    var localeId = input.localeId || "ja";

    try {
        var manager = new ActvMatterNode(localeId, systemMatterId);
        var wfResult = manager.getMatterNode(nodeId);

        if (wfResult.resultFlag === false) {
            throw wfResult;
        }

        var execProcessTargetList = manager.getExecProcessTargetList(nodeId);
        if (execProcessTargetList.resultFlag === false) {
            throw execProcessTargetList;
        }

        var node = wfResult.data;
        var processTargetModels = execProcessTargetList.data;

        return {
            success: true,
            nodeId: node.nodeId,
            nodeName: node.nodeName,
            nodeType: node.nodeType,
            parentNodeId: node.parentNodeId,
            parentNodeType: node.parentNodeType,
            processTargetCd: processTargetModels[0].parameter
        }

    } catch (e) {

        if (e.resultStatusInfo) {
            return {
                success: false,
                errorCode: e.resultStatusInfo.errorCode,
                errorMessage: e.resultStatusInfo.errorMessage
            };
        }

        return {
            success: false,
            errorCode: "UnknownError",
            errorMessage: e.toString()
        };

    }
}
