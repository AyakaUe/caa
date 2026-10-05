/**
 * run.
 *
 * @param input {Object} - task input data.
 * @return {Object} task result.
 */
function run(input) {

    let mail_body = input.mail_body
    let processor_dept_name_wf20 = input.processor_dept_name_wf20
    let processor_name_wf40 = ''
    let processor_name_wf60 = input.processor_name_wf60
    let processor_cd_wf60 = input.processor_cd_wf60

    if (input.processor_dept_name_wf20 === null) {
        processor_dept_name_wf20 = ''
    } else {
        processor_dept_name_wf20 = input.processor_dept_name_wf20
    }

    if (input.processor_name_wf40 === null) {
        processor_name_wf40 = ''
    } else {
        processor_name_wf40 = input.processor_name_wf40
    }

    if (input.processor_name_wf60 === null) {
        processor_name_wf60 = ''
    }

    if (input.processor_cd_wf60 === null) {
        processor_cd_wf60 = ''
    }


    mail_body = mail_body.replace('{^Matter_Num^}', input.matter_no);

    mail_body = mail_body.replace('{^receive_company_name^}', input.receive_company_name);
    mail_body = mail_body.replace('{^wf00_processor_cd^}', input.processor_cd_wf00);
    mail_body = mail_body.replace('{^wf00_processor_name^}', input.processor_name_wf00);
    mail_body = mail_body.replace('{^wf00_processor_dept_name^}', input.processor_dept_name_wf00);

    mail_body = mail_body.replace('{^receive_company_name^}', input.receive_company_name);
    mail_body = mail_body.replace('{^wf20_processor_cd^}', input.processor_cd_wf20);
    mail_body = mail_body.replace('{^wf20_processor_name^}', input.processor_name_wf20);
    mail_body = mail_body.replace('{^wf20_processor_dept_name^}', processor_dept_name_wf20);

    mail_body = mail_body.replace('{^wf40_processor_name^}', processor_name_wf40);

    mail_body = mail_body.replace('{^wf60_user_name^}', processor_name_wf60);
    mail_body = mail_body.replace('{^wf60_user_cd^}', processor_cd_wf60);

    mail_body = mail_body.replace('{^receive_company_name^}', input.receive_company_name);

    mail_body = mail_body.replace('{^receive_user_name^}', input.receive_user_name);
    mail_body = mail_body.replace('{^receive_user_cd^}', input.receive_user_cd);


    return {
        mail_body: mail_body
    };
}
