INSERT 
INTO PUBLIC.caa_t_request_common( 
    user_data_id                                -- ユーザデータID
    , system_matter_id                          -- システム案件ID
    , matter_no                                 -- 案件番号
    , company_cd                                -- 会社コード
    , subject_matter                            -- 件名
    , processing_status                         -- 処理ステータス
    , drafter_user_cd                           -- 起案者：ユーザーコード
    , drafter_employee_no                       -- 起案者：社員番号
    , drafter_name                              -- 起案者：氏名
    , drafter_department_cd                     -- 起案者：組織コード
    , drafter_post_cd                           -- 起案者：役職コード
    , draft_date                                -- 起案日
    , approval_date                             -- 決裁日
    , add_date                                  -- 登録日時
    , add_user                                  -- 登録者
    , upd_date                                  -- 更新日時
    , upd_user                                  -- 更新者
    , delete_flg                                -- 削除フラグ
) 
VALUES ( 
    /*user_data_id*/                               -- ユーザデータID
    , /*system_matter_id*/                         -- システム案件ID
    , /*matter_no*/                                -- 案件番号
    , /*company_cd*/                               -- 会社コード
    , /*subject_matter*/                           -- 件名
    , /*processing_status*/                        -- 処理ステータス
    , /*drafter_user_cd*/                          -- 起案者：ユーザーコード
    , /*drafter_employee_no*/                      -- 起案者：社員番号
    , /*drafter_name*/                             -- 起案者：氏名
    , /*drafter_department_cd*/                    -- 起案者：組織コード
    , /*drafter_post_cd*/                          -- 起案者：役職コード
    , /*draft_date*/                               -- 起案日
    , /*approval_date*/                            -- 決裁日
    , now()                                        -- 登録日時
    , /*add_user*/                                 -- 登録者
    , now()                                        -- 更新日時
    , /*upd_user*/                                 -- 更新者
    , '0'                                          -- 削除フラグ
)
