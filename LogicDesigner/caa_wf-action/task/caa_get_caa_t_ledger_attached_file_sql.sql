-- 【caa】添付ファイルトラン取得
SELECT
    * 
FROM
    caa_t_apply_attached_file 
WHERE
    user_data_id = /*user_data_id*/'' 
    AND delete_flg = '0' 