/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {
    var baseUrl = "";
    try {
        var System = Packages.jp.co.intra_mart.system.System;
        var baseUrl = System.getBaseURL();
        return {
            success: true,
            baseUrl: baseUrl
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
