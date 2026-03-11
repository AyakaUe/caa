
-- パブリックグループ取得
/* TODO : 名称取得追加 */
SELECT DISTINCT
    mpg.company_cd                              -- 会社コード
    , mpg.public_group_set_cd                   -- パブリックグループセットコード
    -- 審査者をカンマ区切りで1列にまとめる
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'wf10' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS wf10_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'wf30' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS wf30_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'wf40' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS wf40_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'wf50' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS wf50_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'wf60' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS wf60_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'soumu' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS soumu_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'inv' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS inv_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'jouhou' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS jouhou_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'jcntr' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS jcntr_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'idcard' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS idcard_public_group_cd
    , STRING_AGG( 
        CASE 
            WHEN mpg.public_group_category = 'audit' 
                THEN mpg.public_group_cd 
            END
        , ',' 
        ORDER BY
            mpg.public_group_cd
    ) AS audit_public_group_cd 
FROM
    PUBLIC.caa_m_public_group mpg 
GROUP BY
    mpg.company_cd
    , mpg.public_group_set_cd 
WHERE
    1 = 1 
/*IF company_cd != '' && company_cd != null */
    AND mpg.company_cd = /*company_cd*/''   -- 会社コード
/*END*/
/*IF public_group_set_cd != '' && public_group_set_cd != null */
    AND mpg.public_group_set_cd = /*public_group_set_cd*/''     -- パブリックグループセットコード
/*END*/
/*IF draft_date != '' && draft_date != null */
    mpg.start_date <= /*draft_date*/'1900/01/01' 
    AND mpg.end_date IS NULL 
    OR CURRENT_DATE <= /*draft_date*/'2999/12/31' 
/*END*/
