UPDATE PUBLIC.caa_m_id_card 
SET
    card_no = /*card_no*/                          -- カードNo.
    /*IF is_lend_ng == true */
    , lend_ng_flg = '1'                            -- 貸出対象外フラグON
    /*END*/
    /*IF is_lend_ng == false */
    , lend_ng_flg = '0'                            -- 貸出対象外フラグOFF
    /*END*/
    /*IF is_disposal == true */
    , disposal_flg = '1'                           -- 廃棄フラグON
    /*END*/
    /*IF is_disposal == false */
    , disposal_flg = '0'                           -- 廃棄フラグOFF
    /*END*/
    , memo = /*memo*/                              -- 備考
    , upd_date = now()                             -- 更新日時
    , upd_user = /*upd_user*/                      -- 更新者
    , delete_flg = /*delete_flg*/                  -- 削除フラグ
WHERE
    company_cd = /*company_cd*/                    -- 会社コード
    AND id_no = /*id_no*/                          -- ID番号
