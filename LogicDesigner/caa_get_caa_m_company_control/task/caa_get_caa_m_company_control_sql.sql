-- 会社別制御マスタ取得
SELECT
    company_cd                                  -- 会社コード
    , item_category                             -- 項目ID
    , item_content                              -- 項目内容
    , required_flg                              -- 必須フラグ
    , CASE 
        WHEN required_flg = '1' 
            THEN TRUE 
        ELSE FALSE 
        END AS is_required
    , disable_flg                               -- 無効化フラグ
    , CASE 
        WHEN disable_flg = '1' 
            THEN TRUE 
        ELSE FALSE 
        END AS is_disable
    , memo                                      -- 備考
    , add_date                                  -- 登録日時
    , add_user                                  -- 登録者
    , upd_date                                  -- 更新日時
    , upd_user                                  -- 更新者
    , delete_flg                                -- delete_flg
FROM
    PUBLIC.caa_m_company_control 
WHERE
    company_cd = /*company_cd*/''               -- 会社コード
    AND item_category = /*item_category*/''     -- 項目ID
    AND delete_flg = '0' 
ORDER BY
    company_cd
    , item_category; 