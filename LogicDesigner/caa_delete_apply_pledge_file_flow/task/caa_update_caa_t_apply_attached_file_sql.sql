UPDATE PUBLIC.caa_t_apply_attached_file 
SET
    document_type = /*document_type*/              -- 書類種別
    , file_delete_flg = /*file_delete_flg*/        -- 添付ファイル物理削除済みフラグ
    , add_date = /*add_date*/                      -- 登録日時
    , add_user = /*add_user*/                      -- 登録者
    , upd_date = now()                             -- 更新日時
    , upd_user = /*upd_user*/                      -- 更新者
    , delete_flg = /*delete_flg*/                  -- 削除フラグ
WHERE
    user_data_id = /*user_data_id*/                -- ユーザデータID
    AND file_key = /*file_key*/                    -- ファイルキー