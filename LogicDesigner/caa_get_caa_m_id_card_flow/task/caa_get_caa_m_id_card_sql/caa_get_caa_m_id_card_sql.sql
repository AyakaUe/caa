SELECT
    cmic.company_cd
    , cmic.card_no
    , cmic.id_no
    , cmic.memo
    , cmic.add_date
    , cmic.add_user
    , cmic.upd_date
    , cmic.upd_user
    , cmic.delete_flg
    , CASE 
        WHEN cmic.lend_ng_flg = '1' 
            THEN '貸出対象外' 
        ELSE '' 
        END AS lend_ng_flg
    , CASE 
        WHEN cmic.lend_ng_flg = '1' 
            THEN TRUE 
        ELSE FALSE 
        END AS is_lend_ng
    , CASE 
        WHEN cmic.disposal_flg = '1' 
            THEN '廃棄済み' 
        ELSE '' 
        END AS disposal_flg
    , CASE 
        WHEN cmic.disposal_flg = '1' 
            THEN TRUE 
        ELSE FALSE 
        END AS is_disposal 
FROM
    caa_m_id_card cmic 
WHERE
    1 = 1 
/*IF company_cd != '' && company_cd != null */
    AND cmic.company_cd = /*company_cd*/'' 
/*END*/
/*IF id_no != '' && id_no != null */
    AND cmic.id_no LIKE '%' || /*id_no*/'' || '%' 
/*END*/
/*IF card_no != '' && card_no != null */
    AND cmic.card_no LIKE '%' || /*card_no*/'' || '%' 
/*END*/
/*IF is_lend_ng == false */
    AND cmic.lend_ng_flg = '0' 
/*END*/
/*IF is_disposal == false */
    AND cmic.disposal_flg = '0' 
/*END*/
    AND cmic.delete_flg <> '1' 
ORDER BY
    cmic.card_no
