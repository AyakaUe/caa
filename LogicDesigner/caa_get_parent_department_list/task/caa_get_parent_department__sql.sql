SELECT
    * 
FROM
    ( 
        WITH params AS ( 
            -- パラメータ
            SELECT
                CAST(/*company_cd*/'1002' AS text) AS company_cd_in -- 会社コード※カンマ区切りで複数会社指定
                , CAST( coalesce(/*base_date*/NULL, CURRENT_DATE) AS DATE) AS base_date
                , CAST(/*department_cd*/'0001002002,0001004274,0001002162' AS text) AS department_cd_in -- 部署コード※カンマ区切りで複数会社指定
                ) 
        SELECT
            imm_department.company_cd
            , company.department_short_name AS comp_short
            , caa.department_cd
            , imm_department.department_name
            , string_agg( dept.department_short_name, '/' ORDER BY depia2.DEPTH DESC) AS department_short_name_path 
        FROM
            imm_department 
            INNER JOIN imm_department company 
                ON company.company_cd = imm_department.company_cd 
                AND company.department_set_cd = company.department_set_cd 
                AND company.department_cd = imm_department.department_set_cd 
                AND company.end_date > (SELECT base_date FROM params) 
            INNER JOIN PUBLIC.imm_department_inc_ath depia2 
                ON depia2.company_cd = imm_department.company_cd 
                AND depia2.department_set_cd = imm_department.department_set_cd 
                AND depia2.department_cd = imm_department.department_cd 
                AND depia2.delete_flag = '0' 
                AND depia2.end_date > (SELECT base_date FROM params) 
            INNER JOIN PUBLIC.imm_department dept 
                ON dept.company_cd = depia2.company_cd 
                AND dept.department_set_cd = depia2.department_set_cd 
                AND dept.department_cd = depia2.parent_department_cd 
                AND dept.delete_flag = '0' 
                AND dept.end_date > (SELECT base_date FROM params) 
            INNER JOIN caa_m_cntr_department caa 
                ON caa.company_cd = imm_department.company_cd 
                AND caa.department_cd = imm_department.department_cd 
                AND caa.end_date > (SELECT base_date FROM params) 
        WHERE
            imm_department.end_date > (SELECT base_date FROM params) 
            AND imm_department.company_cd IN ( 
                SELECT
                    regexp_split_to_table((SELECT company_cd_in FROM params), ',')
            ) 
            /*IF department_cd != '' && department_cd != null*/
            AND imm_department.department_cd IN ( 
                SELECT DISTINCT
                    imm.parent_department_cd 
                FROM
                    imm_department dm 
                    LEFT OUTER JOIN imm_department_inc_ath imm 
                        ON dm.department_cd = imm.department_cd 
                    INNER JOIN caa_m_cntr_department caa 
                        ON caa.company_cd = imm.company_cd 
                        AND caa.department_cd = imm.parent_department_cd 
                    INNER JOIN imm_department parent 
                        ON parent.department_cd = imm.parent_department_cd 
                WHERE
                    dm.department_cd IN ( 
                        SELECT
                            regexp_split_to_table((SELECT department_cd_in FROM params), ',')
                    ) 
                    AND dm.company_cd IN ( 
                        SELECT
                            regexp_split_to_table((SELECT company_cd_in FROM params), ',')
                    ) 
                    AND dm.department_set_cd IN ( 
                        SELECT
                            regexp_split_to_table((SELECT company_cd_in FROM params), ',')
                    ) 
                    AND dm.locale_id = 'ja'
            ) 
            /*END*/
        GROUP BY
            imm_department.company_cd
            , company.department_short_name
            , caa.department_cd
            , imm_department.department_name 
        ORDER BY
            company_cd
            , department_cd ASC
    ) 
OUTPUT
ORDER BY
OUTPUT
    .company_cd
    , 
OUTPUT
    .department_cd;
