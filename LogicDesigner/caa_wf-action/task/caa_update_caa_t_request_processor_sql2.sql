UPDATE PUBLIC.caa_t_request_processor 
SET
    matter_no = /*matter_no*/                                         -- 案件番号
    , add_flg = /*add_flg*/                                           -- 手動設定フラグ
    , company_cd = /*company_cd*/                                     -- 会社コード
    , user_cd = /*user_cd*/                                           -- ユーザコード
    , user_name = /*user_name*/                                       -- ユーザ名
    , employee_no = /*employee_no*/                                   -- 社員番号
    , dept_cd = /*dept_cd*/                                           -- 組織コード
    , dept_name = /*dept_name*/                                       -- 組織名
    , position_cd = /*position_cd*/                                   -- 役職コード
    , position_name = /*position_name*/                               -- 役職名
    , group_cd = /*group_cd*/                                         -- グループコード
    , group_name = /*group_name*/                                     -- グループ名
    , processor_cd = /*processor_cd*/                                 -- 処理者コード
    , processor_name = /*processor_name*/                             -- 処理者名
    , processor_company_cd = /*processor_company_cd*/                 -- 処理者会社コード
    , processor_dept_cd = /*processor_dept_cd*/                       -- 処理者組織コード
    , processor_dept_name = /*processor_dept_name*/                   -- 処理者組織名
    , processor_position_cd = /*processor_position_cd*/               -- 処理者役職コード
    , processor_position_name = /*processor_position_name*/           -- 処理者役職名
    , processing_status = /*processing_status*/                       -- 処理ステータス
    , processing_comment = /*processing_comment*/                     -- 処理コメント
    , processing_comment_user_name = /*processing_comment_user_name*/ -- 処理コメント記入者
    , processing_date = /*processing_date*/                           -- 処理日
    , add_date = /*add_date*/                                         -- 登録日時
    , add_user = /*add_user*/                                         -- 登録者
    , upd_date = now()                                                -- 更新日時
    , upd_user = /*upd_user*/                                         -- 更新者
    , delete_flg = /*delete_flg*/                                     -- 削除フラグ
    , original_act_target_cd = /*original_act_target_cd*/             -- 代理元対象コード
WHERE
    user_data_id = /*user_data_id*/                                   -- ユーザデータID
    AND role_cd = /*role_cd*/                                         -- 役割コード
    AND detail_no = /*detail_no*/                                     -- 明細番号
