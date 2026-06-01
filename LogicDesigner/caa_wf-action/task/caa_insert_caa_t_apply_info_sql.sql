INSERT 
INTO PUBLIC.caa_t_apply_info( 
    user_data_id                                -- ユーザデータID
    , matter_no                                 -- 案件番号
    , request_kbn_cd                            -- 申請区分コード
    , cntr_dept_cd
    , receive_user_cd                           -- 受入担当者：ユーザコード
    , receive_employee_no                       -- 受入担当者：社員番号
    , receive_user_name                         -- 受入担当者：氏名
    , receive_post_cd                           -- 受入担当者：役職コード
    , receive_post_name                         -- 受入担当者：役職名
    , receive_dept_cd                           -- 受入部署コード
    , receive_dept_name                         -- 受入部署名
    , receive_company_cd                        -- 受入会社コード
    , receive_company_name                      -- 受入会社名
    , receive_company_short                     -- 受入会社略称
    , contract_company_cd                       -- 委託先会社コード
    , contract_company_name                     -- 委託先会社名
    , contract_manage_user_name                 -- 委託先管理責任者：氏名
    , contract_work_content                     -- 業務内容
    , contract_start_date                       -- 業務委託契約開始日
    , contract_end_plan_date                    -- 業務委託契約終了予定日
    , receive_start_date                        -- 受入開始日
    , receive_plan_end_date                     -- 受入終了予定日
    , receive_end_date                          -- 受入終了日
    , attend_count                              -- 出社回数
    , work_location                             -- 勤務地
    , apply_count                               -- 申請人数
    , doc_management_no                         -- 稟議番号（文書番号）
    , memo                                      -- 備考
    , receive_mod_flg                           -- 受入担当者：修正フラグ
    , contract_manage_user_name_mod_flg         -- 委託先管理責任者：修正フラグ
    , contract_work_content_mod_flg             -- 業務内容：修正フラグ
    , contract_end_plan_date_mod_flg            -- 業務委託契約終了予定日：修正フラグ
    , receive_plan_end_date_mod_flg             -- 受入終了予定日：修正フラグ
    , attend_count_mod_flg                      -- 出社回数：修正フラグ
    , work_location_mod_flg                     -- 勤務地：修正フラグ
    , doc_management_no_mod_flg                 -- 稟議番号（文書番号）：修正フラグ
    , add_date                                  -- 登録日時
    , add_user                                  -- 登録者
    , upd_date                                  -- 更新日時
    , upd_user                                  -- 更新者
    , delete_flg                                -- 削除フラグ
) 
VALUES ( 
    /*user_data_id*/                               -- ユーザデータID
    , /*matter_no*/                                -- 案件番号
    , /*request_kbn_cd*/                           -- 申請区分コード
    , /*cntr_dept_cd*/
    , /*receive_user_cd*/                          -- 受入担当者：ユーザコード
    , /*receive_employee_no*/                      -- 受入担当者：社員番号
    , /*receive_user_name*/                        -- 受入担当者：氏名
    , /*receive_post_cd*/                          -- 受入担当者：役職コード
    , /*receive_post_name*/                        -- 受入担当者：役職名
    , /*receive_dept_cd*/                          -- 受入部署コード
    , /*receive_dept_name*/                        -- 受入部署名
    , /*receive_company_cd*/                       -- 受入会社コード
    , /*receive_company_name*/                     -- 受入会社名
    , /*receive_company_short*/                    -- 受入会社略称
    , /*contract_company_cd*/                      -- 委託先会社コード
    , /*contract_company_name*/                    -- 委託先会社名
    , /*contract_manage_user_name*/                -- 委託先管理責任者：氏名
    , /*contract_work_content*/                    -- 業務内容
    , /*contract_start_date*/null                  -- 業務委託契約開始日
    , /*contract_end_plan_date*/null               -- 業務委託契約終了予定日
    , /*receive_start_date*/null                   -- 受入開始日
    , /*receive_plan_end_date*/null                -- 受入終了予定日
    , /*receive_end_date*/null                     -- 受入終了日
    , /*attend_count*/                             -- 出社回数
    , /*work_location*/                            -- 勤務地
    , /*apply_count*/                              -- 申請人数
    , /*doc_management_no*/                        -- 稟議番号（文書番号）
    , /*memo*/                                     -- 備考
    , /*receive_mod_flg*/                          -- 受入担当者：修正フラグ
    , /*contract_manage_user_name_mod_flg*/        -- 委託先管理責任者：修正フラグ
    , /*contract_work_content_mod_flg*/            -- 業務内容：修正フラグ
    , /*contract_end_plan_date_mod_flg*/           -- 業務委託契約終了予定日：修正フラグ
    , /*receive_plan_end_date_mod_flg*/            -- 受入終了予定日：修正フラグ
    , /*attend_count_mod_flg*/                     -- 出社回数：修正フラグ
    , /*work_location_mod_flg*/                    -- 勤務地：修正フラグ
    , /*doc_management_no_mod_flg*/                -- 稟議番号（文書番号）：修正フラグ
    , now()                                        -- 登録日時
    , /*add_user*/                                 -- 登録者
    , now()                                        -- 更新日時
    , /*upd_user*/                                 -- 更新者
    , '0'                                          -- 削除フラグ
)
