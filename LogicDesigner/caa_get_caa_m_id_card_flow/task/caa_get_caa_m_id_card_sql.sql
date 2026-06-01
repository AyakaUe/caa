SELECT
    cmic.company_cd                             -- 会社コード
    , cmic.card_no                              -- ID番号
    , cmic.id_no                                -- カードNo.
    , cticl.account_no                          -- アカウント管理番号
    , cticl.contract_user_name                  -- 業務委託者：氏名
    , CASE 
        WHEN cmic.lend_ng_flg = '1' 
            THEN '貸出対象外' 
        ELSE '' 
        END AS lend_ng_flg                      -- 貸出対象外フラグ
    , CASE 
        WHEN cmic.lend_ng_flg = '1' 
            THEN TRUE 
        ELSE FALSE 
        END AS is_lend_ng                       -- チェックボックス用貸出対象外フラグ
    , CASE 
        WHEN cmic.disposal_flg = '1' 
            THEN '廃棄済み' 
        ELSE '' 
        END AS disposal_flg                     -- 廃棄フラグ
    , CASE 
        WHEN cmic.disposal_flg = '1' 
            THEN TRUE 
        ELSE FALSE 
        END AS is_disposal                      -- チェックボックス用廃棄フラグ
    , cmic.memo                                 -- 備考
    , cmic.add_date                             -- 登録日時
    , cmic.add_user                             -- 登録者
    , cmic.upd_date                             -- 更新日時
    , cmic.upd_user                             -- 更新者
    , cmic.delete_flg                           -- 削除フラグ
FROM
    caa_m_id_card cmic                          -- IDカード管理マスタ
    LEFT OUTER JOIN caa_v_id_card_ledger_search cticl -- IDカード管理検索ビュー
        ON cticl.id_no = cmic.id_no 
        AND cticl.return_flg <> '01'            -- 01 : 返却済み
WHERE
    1 = 1 
/*IF company_cd != '' && company_cd != null */
    AND cmic.company_cd = /*company_cd*/'' 
/*END*/
/*IF id_no != '' && id_no != null */
    AND cmic.id_no LIKE '%' || /*id_no*/'' || '%' 
/*END*/
/*IF card_no != '' && card_no != null */
    AND cmic.card_no LIKE '%' || /*card_no*/'' || '%' 
/*END*/
/*IF is_lend_ng == false */
    AND cmic.lend_ng_flg = '0' 
/*END*/
/*IF is_disposal == false */
    AND cmic.disposal_flg = '0' 
/*END*/
    AND cmic.delete_flg <> '1' 
ORDER BY
    cmic.card_no
