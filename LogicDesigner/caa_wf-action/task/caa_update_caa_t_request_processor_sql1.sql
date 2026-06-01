UPDATE PUBLIC.caa_t_request_processor 
SET
    processing_status = /*processing_status*/                       -- 処理ステータス
    , processing_comment = /*processing_comment*/                     -- 処理コメント
    , processing_comment_user_name = /*processing_comment_user_name*/ -- 処理コメント記入者
    , upd_date = now()                                                -- 更新日時
    , upd_user = /*upd_user*/                                         -- 更新者
    , delete_flg = '1'                                     -- 削除フラグ
WHERE
    user_data_id = /*user_data_id*/                                   -- ユーザデータID
