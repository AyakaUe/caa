--*DataTitle '業務委託者管理台帳トラン'
--*CaptionFromComment
SELECT
    ctcl.manage_id                              -- 管理ID
    , ctcl.version                              -- バージョン
    , ctcl.manage_no                            -- 管理番号
    , ctcl.request_kbn_cd                       -- 申請区分コード
    , ctcl.apply_status_cd                      -- 申請状況
    , ctcl.cntr_dept_cd                         -- 管理組織コード
    , ctcl.contract_company_cd                  -- 委託先会社コード
    , ctcl.contract_company_name                -- 委託先会社名
    , ctclu.account_no                          -- アカウント管理番号
    , ctcl.contract_user_name                   -- 業務委託者：氏名
    , ctcl.contract_user_kana                   -- 業務委託者：よみがな
    , ctcl.contract_manage_user_name            -- 委託先管理責任者：氏名
    , ctcl.receive_company_cd                   -- 契約会社コード
    , ctcl.receive_company_name                 -- 契約会社名
    , ctcl.receive_company_short                -- 契約会社略称
    , ctcl.receive_dept_cd                      -- 契約部署コード
    , COALESCE(ctcl.receive_dept_name, id.department_name) AS receive_dept_name -- 契約部署名
    , ctcl.receive_user_cd                      -- 担当者：ユーザコード
    , ctcl.receive_employee_no                  -- 担当者：社員番号
    , ctcl.receive_user_name                    -- 担当者：氏名
    , ctcl.receive_post_cd                      -- 担当者：役職コード
    , ctcl.receive_post_name                    -- 担当者：役職名
    , ctcl.work_dept_cd                         -- 就業先部署コード
    , ctcl.work_dept_name                       -- 就業先部署名
    , ctcl.work_company_cd                      -- 就業先会社コード
    , ctcl.work_company_name                    -- 就業先会社名
    , ctcl.work_company_short                   -- 就業先会社略称
    , ctcl.matter_no                            -- 案件番号
    , ctcl.apply_date                           -- 起票日
    , ctcl.subject_matter                       -- 件名
    , ctcl.contract_work_content                -- 業務内容
    , ctcl.contract_start_date                  -- 業務委託契約開始日
    , ctcl.contract_end_plan_date               -- 業務委託契約終了予定日
    , ctcl.receive_start_date                   -- 受入開始日
    , ctcl.receive_plan_end_date                -- 受入終了予定日
    , ctcl.receive_end_date                     -- 受入終了日
    , ctcl.attend_count                         -- 出社回数
    , ctcl.attend_count_other                   -- 出社回数（その他）
    , ctcl.work_location                        -- 勤務地
    , ctcl.work_location_other                  -- 勤務地（その他）
    , ctcl.doc_management_no                    -- 稟議番号（基本契約書）
    , ctcl.indv_doc_management_no               -- 稟議番号（個別契約書）
    , ctcl.apply_count                          -- 申請人数
    , ctcl.file_memo                            -- ファイル備考
    , ctcl.user_data_id                         -- ユーザデータID
    , ctcl.provided_account_flg                 -- 貸与品：アカウント
    , ctcl.provided_account_memo                -- 貸与品：アカウント備考
    , ctcl.provided_pc_flg                      -- 貸与品：PC
    , ctcl.provided_pc_memo                     -- 貸与品：PC備考
    , ctcl.provided_id_card_flg                 -- 貸与品：IDカード
    , ctcl.provided_id_card_memo                -- 貸与品：IDカード備考
    , ctcl.provided_dev_equipment_flg           -- 貸与品：開発機材
    , ctcl.provided_mobile_flg                  -- 貸与品：携帯通信端末
    , ctcl.provided_folder_access_flg           -- 貸与品：共有フォルダのアクセス
    , ctcl.add_date                             -- 登録日時
    , ctcl.add_user                             -- 登録者
    , ctcl.upd_date                             -- 更新日時
    , ctcl.upd_user                             -- 更新者
    , ctcl.delete_flg                           -- 削除フラグ
FROM
    PUBLIC.caa_t_contractor_ledger ctcl 
    LEFT OUTER JOIN PUBLIC.caa_t_contractor_ledger_update ctclu 
        ON ctclu.manage_no = ctcl.manage_no 
    LEFT OUTER JOIN ( -- 契約部署名を組織マスタから取得
        SELECT
            department_cd
            , department_name 
        FROM
            ( 
                SELECT
                    d.department_cd
                    , d.department_name
                    , ROW_NUMBER() OVER ( -- 複数あった場合古いデータを使用
                        PARTITION BY
                            d.department_cd 
                        ORDER BY
                            d.start_date ASC
                    ) AS rn 
                FROM
                    imm_department d 
                WHERE
                    d.company_cd = /*company_cd*/'' 
                    AND d.department_set_cd = /*company_cd*/'' 
                    AND d.end_date > COALESCE( /*base_date*/NULL, CURRENT_DATE) 
                    AND d.locale_id = 'ja' 
                    AND d.delete_flag = '0'
            ) x 
        WHERE
            x.rn = 1
    ) id 
        ON id.department_cd = ctcl.receive_dept_cd 
WHERE
    ctcl.manage_id IN /*manage_ids*/() -- 管理ID
ORDER BY
    ctcl.manage_id
