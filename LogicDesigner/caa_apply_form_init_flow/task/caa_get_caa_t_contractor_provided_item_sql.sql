-- 業務委託者・貸与品トラン取得
SELECT
    * 
FROM
    caa_t_contractor_provided_item 
WHERE
    user_data_id = /*user_data_id*/'' 
    AND delete_flg = '0' 
ORDER BY
    row_no ASC;