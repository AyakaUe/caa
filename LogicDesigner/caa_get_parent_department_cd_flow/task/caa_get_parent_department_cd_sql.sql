SELECT DISTINCT
    imm.parent_department_cd
    , imm.start_date 
FROM
    imm_department_inc_ath imm 
    INNER JOIN caa_m_cntr_department caa 
        ON caa.company_cd = imm.company_cd 
        AND caa.department_cd = imm.parent_department_cd 
        AND caa.delete_flg = '0' 
WHERE
    imm.department_cd = /*department_cd*/''
    AND imm.end_date > CURRENT_DATE 
    AND imm.delete_flag = '0' 
ORDER BY
    start_date; 