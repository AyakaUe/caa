-- 【caa】申請処理者トラン取得
SELECT
    * 
FROM
    caa_t_request_processor 
WHERE
    user_data_id = /*user_data_id*/'' 
    AND delete_flg = '0' 