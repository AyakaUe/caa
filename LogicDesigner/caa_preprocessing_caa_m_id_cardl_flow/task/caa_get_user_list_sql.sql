--*DataTitle '【caa】ユーザー一覧取得（所属絞り込み）'
SELECT
    imm_user.user_name AS user_name
    , imm_user.user_cd AS user_cd
    , regexp_replace(imm_user.user_cd, '@.*$', '') AS employee_no
    , company.department_name AS company_name
    , company.department_short_name AS company_short
    , imm_department.department_name AS dept_name
    , imm_company_post.post_name AS post_name
    , imm_user.email_address1 AS mail_address
    , imm_department.company_cd AS company_cd
    , imm_department.department_cd AS dept_cd
    , imm_company_post.post_cd AS post_cd
    , imm_user.start_date 
FROM
    imm_user 
    INNER JOIN b_m_account_role_b ROLE          -- アカウントロール
        ON imm_user.user_cd = ROLE.user_cd 
/*IF is_receive != true */
        AND ROLE.valid_start_date <= coalesce(/*base_date*/NULL, CURRENT_DATE) 
/*END*/
        AND ROLE.valid_end_date > coalesce(/*base_date*/NULL, CURRENT_DATE) 
        AND ROLE.role_id IN ( 
            SELECT
                CMUC.com_role_cd 
            FROM
                PUBLIC.caa_m_use_company CMUC 
            /*IF company_cd != '' && company_cd != null*/
            WHERE
                CMUC.company_cd = /*company_cd*/'' 
            /*END*/
        ) 
    INNER JOIN imm_department_ath 
        ON imm_user.user_cd = imm_department_ath.user_cd 
/*IF is_receive != true */
        AND imm_department_ath.start_date <= coalesce(/*base_date*/NULL, CURRENT_DATE) 
/*END*/
        AND imm_department_ath.end_date > coalesce(/*base_date*/NULL, CURRENT_DATE) 
        AND imm_department_ath.delete_flag = '0' 
    INNER JOIN imm_department 
        ON imm_department.company_cd = imm_department_ath.company_cd 
        AND imm_department.department_set_cd = imm_department_ath.department_set_cd 
        AND imm_department.department_cd = imm_department_ath.department_cd 
/*IF is_receive != true */
        AND imm_department.start_date <= coalesce(/*base_date*/NULL, CURRENT_DATE) 
/*END*/
        AND imm_department.end_date > coalesce(/*base_date*/NULL, CURRENT_DATE) 
        AND imm_department.locale_id = 'ja' 
        AND imm_department.delete_flag = '0' 
    INNER JOIN imm_department company 
        ON company.company_cd = imm_department_ath.company_cd 
        AND company.department_set_cd = imm_department_ath.department_set_cd 
        AND company.department_cd = imm_department_ath.department_set_cd 
/*IF is_receive != true */
        AND company.start_date <= coalesce(/*base_date*/NULL, CURRENT_DATE) 
/*END*/
        AND company.end_date > coalesce(/*base_date*/NULL, CURRENT_DATE) 
        AND company.locale_id = 'ja' 
        AND company.delete_flag = '0' 
    LEFT JOIN imm_department_post_ath 
        ON imm_department_post_ath.company_cd = imm_department_ath.company_cd 
        AND imm_department_post_ath.department_set_cd = imm_department_ath.department_set_cd 
        AND imm_department_post_ath.department_cd = imm_department_ath.department_cd 
/*IF is_receive != true */
        AND imm_department_post_ath.start_date <= coalesce(/*base_date*/NULL, CURRENT_DATE) 
/*END*/
        AND imm_department_post_ath.end_date > coalesce(/*base_date*/NULL, CURRENT_DATE) 
        AND imm_department_post_ath.user_cd = imm_user.user_cd 
        AND imm_department_post_ath.delete_flag = '0' 
    LEFT JOIN imm_company_post 
        ON imm_company_post.company_cd = imm_department_post_ath.company_cd 
        AND imm_company_post.department_set_cd = imm_department_post_ath.department_set_cd 
        AND imm_company_post.post_cd = imm_department_post_ath.post_cd 
/*IF is_receive != true */
        AND imm_company_post.start_date <= coalesce(/*base_date*/NULL, CURRENT_DATE) 
/*END*/
        AND imm_company_post.end_date > coalesce(/*base_date*/NULL, CURRENT_DATE) 
        AND imm_company_post.locale_id = 'ja' 
        AND imm_company_post.delete_flag = '0' 
WHERE
    1 = 1 
/*IF is_receive != true */
    AND imm_user.start_date <= coalesce(/*base_date*/NULL, CURRENT_DATE) 
/*END*/
    AND imm_user.end_date > coalesce(/*base_date*/NULL, CURRENT_DATE) 
    AND imm_user.delete_flag = '0' 
    AND imm_user.locale_id = 'ja' 
/*IF company_cd != '' && company_cd != null*/
    AND imm_department.company_cd = /*company_cd*/'' 
/*END*/
/*IF dept_cd != '' && dept_cd != null*/
    AND imm_department.department_cd = /*dept_cd*/'' --申請者の所属で絞り込む場合は指定
/*END*/
ORDER BY
    company_name ASC
    , dept_name ASC
    , employee_no ASC;
