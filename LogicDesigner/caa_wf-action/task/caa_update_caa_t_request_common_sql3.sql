UPDATE PUBLIC.caa_t_request_common 
SET
    system_matter_id = /*system_matter_id*/             -- システム案件ID
    , matter_no = /*matter_no*/                         -- 案件番号
    , company_cd = /*company_cd*/                       -- 会社コード
    , subject_matter = /*subject_matter*/               -- 件名
    , processing_status = /*processing_status*/         -- 処理ステータス
    , drafter_user_cd = /*drafter_user_cd*/             -- 起案者：ユーザーコード
    , drafter_employee_no = /*drafter_employee_no*/     -- 起案者：社員番号
    , drafter_name = /*drafter_name*/                   -- 起案者：氏名
    , drafter_department_cd = /*drafter_department_cd*/ -- 起案者：組織コード
    , drafter_post_cd = /*drafter_post_cd*/             -- 起案者：役職コード
    , draft_date = /*draft_date*/                       -- 起案日
    , approval_date = /*approval_date*/                 -- 決裁日
    , upd_date = now()                                  -- 更新日時
    , upd_user = /*upd_user*/                           -- 更新者
    , delete_flg = /*delete_flg*/                       -- 削除フラグ
WHERE
    user_data_id = /*user_data_id*/                     -- ユーザデータID
