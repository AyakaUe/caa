-- 汎用名称マスタ
SELECT
    item_cd
    , item_name
    , general_item1
    , general_item2
    , general_item3 
FROM
    caa_m_general_name 
WHERE
    item_category = /*item_category*/'' 
    AND company_cd = /*company_cd*/'' 
/*IF delete_flg_check == true */
    AND delete_flg = '0' 
/*END*/
ORDER BY
    sort_key ASC
