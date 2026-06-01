SELECT
    /** メールアドレスをカンマ区切りで結合*/
    STRING_AGG(DISTINCT imm_user.email_address1, ',') AS email_address 
FROM
    imm_user 
WHERE
    1 = 1 
    AND imm_user.start_date <= coalesce(/*draft_date*/NULL, CURRENT_DATE) 
    AND imm_user.end_date > coalesce(/*draft_date*/NULL, CURRENT_DATE) 
    AND imm_user.delete_flag = '0' 
    AND imm_user.locale_id = 'ja' 
    AND imm_user.email_address1 IS NOT NULL 
    AND imm_user.email_address1 <> ''
    AND imm_user.user_cd IN /*user_cds*/()
