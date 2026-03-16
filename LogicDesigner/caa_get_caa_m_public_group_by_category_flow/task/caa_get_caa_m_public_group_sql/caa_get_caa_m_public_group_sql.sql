-- パブリックグループ取得
SELECT DISTINCT
    mpg.company_cd                              -- 会社コード
    , mpg.public_group_set_cd                   -- パブリックグループセットコード
    , mpg.public_group_category
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf10' 
                THEN mpg.public_group_cd 
            END
    ) AS wf10_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf10' 
                THEN imm.public_group_name 
            END
    ) AS wf10_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf30' 
                THEN mpg.public_group_cd 
            END
    ) AS wf30_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf30' 
                THEN imm.public_group_name 
            END
    ) AS wf30_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf40' 
                THEN mpg.public_group_cd 
            END
    ) AS wf40_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf40' 
                THEN imm.public_group_name 
            END
    ) AS wf40_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf50' 
                THEN mpg.public_group_cd 
            END
    ) AS wf50_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf50' 
                THEN imm.public_group_name 
            END
    ) AS wf50_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf60' 
                THEN mpg.public_group_cd 
            END
    ) AS wf60_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'wf60' 
                THEN imm.public_group_name 
            END
    ) AS wf60_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'soumu' 
                THEN mpg.public_group_cd 
            END
    ) AS soumu_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'soumu' 
                THEN imm.public_group_name 
            END
    ) AS soumu_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'inv' 
                THEN mpg.public_group_cd 
            END
    ) AS inv_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'inv' 
                THEN imm.public_group_name 
            END
    ) AS inv_public_group_name
    , ( 
         CASE 
            WHEN mpg.public_group_category = 'jouhou' 
                THEN mpg.public_group_cd 
            END
    ) AS jouhou_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'jouhou' 
                THEN imm.public_group_name 
            END
    ) AS jouhou_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'jcntr' 
                THEN mpg.public_group_cd 
            END
    ) AS jcntr_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'jcntr' 
                THEN imm.public_group_name 
            END
    ) AS jcntr_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'idcard' 
                THEN mpg.public_group_cd 
            END
    ) AS idcard_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'idcard' 
                THEN imm.public_group_name 
            END
    ) AS idcard_public_group_name
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'audit' 
                THEN mpg.public_group_cd 
            END
    ) AS audit_public_group_cd
    , ( 
        CASE 
            WHEN mpg.public_group_category = 'audit' 
                THEN imm.public_group_name 
            END
    ) AS audit_public_group_name 
FROM
    PUBLIC.caa_m_public_group mpg 
    INNER JOIN imm_public_grp imm 
        ON mpg.public_group_set_cd = imm.public_group_set_cd 
        AND mpg.public_group_cd = imm.public_group_cd 
/*IF draft_date != '' && draft_date != null */
        AND imm.start_date <= /*draft_date*/'1900/01/01' 
        AND imm.end_date IS NULL 
        OR CURRENT_DATE <= /*draft_date*/'2999/12/31' 
/*END*/
WHERE
    1 = 1 
/*IF company_cd != '' && company_cd != null */
    AND mpg.company_cd = /*company_cd*/''       -- 会社コード
/*END*/
/*IF draft_date != '' && draft_date != null */
    AND mpg.start_date <= /*draft_date*/'1900/01/01' 
    AND mpg.end_date IS NULL 
    OR CURRENT_DATE <= /*draft_date*/'2999/12/31' 
/*END*/
ORDER BY
    mpg.company_cd
    , mpg.public_group_set_cd
