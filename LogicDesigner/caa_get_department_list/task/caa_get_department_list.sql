SELECT
    * 
FROM
    ( 
        WITH params AS ( -- パラメータ
            SELECT
                CAST(/*company_cd*/'' AS text) AS company_cd_in -- 会社コード※カンマ区切りで複数会社指定
                , CAST( coalesce(/*base_date*/NULL, CURRENT_DATE) AS DATE) AS base_date
        ) 
        SELECT DISTINCT
            dm.department_cd
            , dm.department_set_cd
            , dm.department_name
            , company.company_cd
            , company.department_name AS company_name
            , company.department_short_name AS company_short_name 
        FROM
            imm_department dm 
            INNER JOIN imm_department company 
                ON company.company_cd = dm.company_cd 
                AND company.department_set_cd = dm.department_set_cd 
                AND company.department_cd IN ( 
                    SELECT
                        regexp_split_to_table((SELECT company_cd_in FROM params), ',')
                ) 
        /*IF is_receive != true */
                AND company.start_date <= (SELECT base_date FROM params) 
        /*END*/
                AND company.end_date > (SELECT base_date FROM params) 
                AND company.locale_id = 'ja' 
                AND company.delete_flag = '0' 
        WHERE
            1 = 1 
        /*IF user_cd != '' && user_cd != null*/
            AND ( 
                dm.department_cd IN ( 
                    SELECT DISTINCT
                        imm_department_ath.department_cd AS department_cd 
                    FROM
                        imm_user 
                        INNER JOIN imm_department_ath 
                            ON imm_user.user_cd = imm_department_ath.user_cd 
                            AND imm_department_ath.start_date <= (SELECT base_date FROM params) 
                            AND imm_department_ath.end_date > (SELECT base_date FROM params) 
                            AND imm_department_ath.delete_flag = '0' 
                    WHERE
                        imm_user.user_cd = /*user_cd*/'' 
                    /*IF is_receive != true */
                        AND imm_user.start_date <= (SELECT base_date FROM params) 
                    /*END*/
                        AND imm_user.end_date > (SELECT base_date FROM params) 
                        AND imm_user.delete_flag = '0' 
                        AND imm_department_ath.company_cd IN ( 
                            SELECT
                                regexp_split_to_table((SELECT company_cd_in FROM params), ',')
                        )
                ) 
                OR dm.department_cd IN ( 
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
                            SELECT DISTINCT
                                imm_department_ath.department_cd AS department_cd 
                            FROM
                                imm_user 
                                INNER JOIN imm_department_ath 
                                    ON imm_user.user_cd = imm_department_ath.user_cd 
                            /*IF is_receive != true */
                                    AND imm_department_ath.start_date <= (SELECT base_date FROM params) 
                            /*END*/
                                    AND imm_department_ath.end_date > (SELECT base_date FROM params) 
                                    AND imm_department_ath.delete_flag = '0' 
                            WHERE
                                imm_user.user_cd = /*user_cd*/'' 
                            /*IF is_receive != true */
                                AND imm_user.start_date <= (SELECT base_date FROM params) 
                            /*END*/
                                AND imm_user.end_date > (SELECT base_date FROM params) 
                                AND imm_user.delete_flag = '0' 
                                AND imm_department_ath.company_cd IN ( 
                                    SELECT
                                        regexp_split_to_table((SELECT company_cd_in FROM params), ',')
                                )
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
            ) 
        /*END*/
            AND dm.company_cd IN ( 
                SELECT
                    regexp_split_to_table((SELECT company_cd_in FROM params), ',')
            ) 
            AND dm.department_set_cd IN ( 
                SELECT
                    regexp_split_to_table((SELECT company_cd_in FROM params), ',')
            ) 
        /*IF is_receive != true */
            AND dm.start_date <= (SELECT base_date FROM params) 
        /*END*/
            AND dm.end_date > (SELECT base_date FROM params) 
            AND dm.locale_id = 'ja' 
            AND dm.delete_flag = '0'
    ) OUTPUT
ORDER BY OUTPUT.company_cd
    , OUTPUT.department_cd;
