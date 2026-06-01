UPDATE PUBLIC.caa_t_contractor_provided_item 
SET
    upd_date = now()                                            -- 更新日時
    , upd_user = /*upd_user*/                                     -- 更新者
    , delete_flg = '1'                                 -- 削除フラグ
WHERE
    user_data_id = /*user_data_id*/                               -- ユーザデータID