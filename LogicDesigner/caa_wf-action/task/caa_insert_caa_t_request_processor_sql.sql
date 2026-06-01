INSERT 
INTO PUBLIC.caa_t_request_processor( 
    user_data_id                                -- ユーザデータID
    , matter_no                                 -- 案件番号
    , role_cd                                   -- 役割コード
    , detail_no                                 -- 明細番号
    , add_flg                                   -- 手動設定フラグ
    , company_cd                                -- 会社コード
    , user_cd                                   -- ユーザコード
    , user_name                                 -- ユーザ名
    , employee_no                               -- 社員番号
    , dept_cd                                   -- 組織コード
    , dept_name                                 -- 組織名
    , position_cd                               -- 役職コード
    , position_name                             -- 役職名
    , group_cd                                  -- グループコード
    , group_name                                -- グループ名
    , processor_cd                              -- 処理者コード
    , processor_name                            -- 処理者名
    , processor_company_cd                      -- 処理者会社コード
    , processor_dept_cd                         -- 処理者組織コード
    , processor_dept_name                       -- 処理者組織名
    , processor_position_cd                     -- 処理者役職コード
    , processor_position_name                   -- 処理者役職名
    , processing_status                         -- 処理ステータス
    , processing_comment                        -- 処理コメント
    , processing_comment_user_name              -- 処理コメント記入者
    , processing_date                           -- 処理日
    , add_date                                  -- 登録日時
    , add_user                                  -- 登録者
    , upd_date                                  -- 更新日時
    , upd_user                                  -- 更新者
    , delete_flg                                -- 削除フラグ
    , original_act_target_cd                    -- 代理元対象コード
) 
VALUES ( 
    /*user_data_id*/                               -- ユーザデータID
    , /*matter_no*/                                -- 案件番号
    , /*role_cd*/                                  -- 役割コード
    , /*detail_no*/                                -- 明細番号
    , /*add_flg*/                                  -- 手動設定フラグ
    , /*company_cd*/                               -- 会社コード
    , /*user_cd*/                                  -- ユーザコード
    , /*user_name*/                                -- ユーザ名
    , /*employee_no*/                              -- 社員番号
    , /*dept_cd*/                                  -- 組織コード
    , /*dept_name*/                                -- 組織名
    , /*position_cd*/                              -- 役職コード
    , /*position_name*/                            -- 役職名
    , /*group_cd*/                                 -- グループコード
    , /*group_name*/                               -- グループ名
    , /*processor_cd*/                             -- 処理者コード
    , /*processor_name*/                           -- 処理者名
    , /*processor_company_cd*/                     -- 処理者会社コード
    , /*processor_dept_cd*/                        -- 処理者組織コード
    , /*processor_dept_name*/                      -- 処理者組織名
    , /*processor_position_cd*/                    -- 処理者役職コード
    , /*processor_position_name*/                  -- 処理者役職名
    , /*processing_status*/                        -- 処理ステータス
    , /*processing_comment*/                       -- 処理コメント
    , /*processing_comment_user_name*/             -- 処理コメント記入者
    , /*processing_date*/                          -- 処理日
    , now()                                        -- 登録日時
    , /*add_user*/                                 -- 登録者
    , now()                                        -- 更新日時
    , /*upd_user*/                                 -- 更新者
    , '0'                                          -- 削除フラグ
    , /*original_act_target_cd*/                   -- 代理元対象コード
)
