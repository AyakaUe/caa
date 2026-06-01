UPDATE PUBLIC.caa_t_apply_info 
SET
    upd_date = now()                                                          -- 更新日時
    , upd_user = /*upd_user*/                                                   -- 更新者
    , delete_flg = '1' 
WHERE
    user_data_id = /*user_data_id*/                                             -- ユーザデータID
