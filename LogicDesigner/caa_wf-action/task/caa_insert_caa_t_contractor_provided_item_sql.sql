INSERT 
INTO PUBLIC.caa_t_contractor_provided_item( 
    user_data_id                                -- ユーザデータID
    , row_no                                    -- 連番
    , manage_id
    , version
    , manage_no                                 -- 管理番号
    , request_kbn_cd
    , contract_user_name                        -- 業務委託者名
    , contract_user_kana                        -- 業務委託者名（よみがな）
    , provided_account_flg
    , provided_account_memo
    , provided_pc_flg
    , provided_pc_memo
    , provided_id_card_flg
    , provided_id_card_memo                     -- 貸与品：IDカード備考
    , provided_dev_equipment_flg                -- 貸与品：開発機材
    , provided_mobile_flg                       -- 貸与品：携帯通信端末
    , provided_folder_access_flg                -- 貸与品：共有フォルダのアクセス
    , add_date                                  -- 登録日時
    , add_user                                  -- 登録者
    , upd_date                                  -- 更新日時
    , upd_user                                  -- 更新者
    , delete_flg                                -- 削除フラグ
) 
VALUES ( 
    /*user_data_id*/                               -- ユーザデータID
    , /*row_no*/                                   -- 連番
    , /*manage_id*/
    , /*version*/
    , /*manage_no*/                                -- 管理番号
    , /*request_kbn_cd*/
    , /*contract_user_name*/                       -- 業務委託者名
    , /*contract_user_kana*/                       -- 業務委託者名（よみがな）
    , /*provided_account_flg*/
    , /*provided_account_memo*/
    , /*provided_pc_flg*/
    , /*provided_pc_memo*/
    , /*provided_id_card_flg*/
    , /*provided_id_card_memo*/                    -- 貸与品：IDカード備考
    , /*provided_dev_equipment_flg*/               -- 貸与品：開発機材
    , /*provided_mobile_flg*/                      -- 貸与品：携帯通信端末
    , /*provided_folder_access_flg*/               -- 貸与品：共有フォルダのアクセス
    , now()                                        -- 登録日時
    , /*add_user*/                                 -- 登録者
    , now()                                        -- 更新日時
    , /*upd_user*/                                 -- 更新者
    , '0'                                          -- 削除フラグ
)
