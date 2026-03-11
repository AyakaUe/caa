INSERT 
INTO PUBLIC.caa_m_id_card( 
    company_cd                                  -- 会社コード
    , id_no                                     -- ID番号
    , card_no                                   -- カードNo.
    , lend_ng_flg                               -- 貸出対象外フラグ
    , disposal_flg                              -- 廃棄フラグ
    , memo                                      -- 備考
    , add_date                                  -- 登録日時
    , add_user                                  -- 登録者
    , upd_date                                  -- 更新日時
    , upd_user                                  -- 更新者
    , delete_flg                                -- 削除フラグ
) 
VALUES ( 
    /*company_cd*/                                 -- 会社コード
    , /*id_no*/                                    -- ID番号
    , /*card_no*/                                  -- カードNo.
    /*IF is_lend_ng == true*/ , '1'/*END*/         -- 貸出対象外フラグON
    /*IF is_lend_ng == false*/ , '0'/*END*/        -- 貸出対象外フラグOFF
    /*IF is_disposal == true*/ , '1'/*END*/        -- 廃棄フラグON
    /*IF is_disposal == false*/ , '0'/*END*/       -- 廃棄フラグOFF
    , /*memo*/                                     -- 備考
    , now()                                        -- 登録日時
    , /*add_user*/                                 -- 登録者
    , now()                                        -- 更新日時
    , /*upd_user*/                                 -- 更新者
    , /*delete_flg*/                               -- 削除フラグ
)
