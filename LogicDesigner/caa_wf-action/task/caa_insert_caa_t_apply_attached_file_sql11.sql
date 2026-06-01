INSERT 
INTO PUBLIC.caa_t_apply_attached_file( 
    user_data_id                                -- ユーザデータID
    , file_key                                  -- ファイルキー
    , document_type                             -- 書類種別
    , file_delete_flg                           -- 添付ファイル物理削除済みフラグ
    , add_date                                  -- 登録日時
    , add_user                                  -- 登録者
    , upd_date                                  -- 更新日時
    , upd_user                                  -- 更新者
    , delete_flg                                -- 削除フラグ
) 
VALUES ( 
    /*user_data_id*/                               -- ユーザデータID
    , /*file_key*/                                 -- ファイルキー
    , /*document_type*/                            -- 書類種別
    , '0'                                          -- 添付ファイル物理削除済みフラグ
    , now()                                        -- 登録日時
    , /*add_user*/                                 -- 登録者
    , now()                                        -- 更新日時
    , /*upd_user*/                                 -- 更新者
    , '0'                                          -- 削除フラグ
)
