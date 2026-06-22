--*DataTitle 'IDカード履歴取得'
-- お渡し済み
SELECT
    ID.upd_date
    , CASE 
        WHEN del.del_flg = '01' 
            THEN 'お渡し済' 
        ELSE '' 
        END AS status
    , LUPDATE.account_no
    , LEDGER.contract_user_name
    , LEDGER.receive_start_date
    , LEDGER.receive_end_date 
FROM
    PUBLIC.caa_t_id_card_ledger ID 
    INNER JOIN PUBLIC.caa_t_contractor_ledger LEDGER 
        ON ID.manage_no = LEDGER.manage_no 
        AND LEDGER.delete_flg = '0' 
    LEFT OUTER JOIN PUBLIC.caa_t_contractor_ledger_update LUPDATE 
        ON LEDGER.manage_no = LUPDATE.manage_no 
        AND LUPDATE.delete_flg = '0' 
    LEFT OUTER JOIN ( 
        -- お渡し済みに変更になったデータ del
        SELECT
            ID.insert_id
            , LAG(ID.del_flg) OVER (ORDER BY ID.upd_date) AS prev_del_flg -- 1つ前のお渡しフラグ
            , ID.del_flg
            , LAG(ID.company_cd) OVER (ORDER BY ID.upd_date) AS prev_company_cd -- 1つ前の会社コード
            , ID.company_cd
            , LAG(ID.id_no) OVER (ORDER BY ID.upd_date) AS prev_id_no -- 1つ前のIDカード
            , ID.id_no
            , LAG(ID.card_no) OVER (ORDER BY ID.upd_date) AS prev_card_no -- 1つ前のカードNo.
            , ID.card_no 
            , LAG(ID.manage_no) OVER (ORDER BY ID.upd_date) AS prev_manage_no -- 1つ前の管理番号
            , ID.manage_no 
        FROM
            PUBLIC.caa_t_id_card_ledger ID 
        WHERE
            ID.manage_no IN ( 
                SELECT DISTINCT
                    ID.manage_no 
                FROM
                    PUBLIC.caa_t_id_card_ledger ID 
                WHERE
                    ID.company_cd = /*company_cd*/'' 
                    AND ID.id_no = /*id_no*/'' 
                    AND ID.card_no = /*card_no*/''
            )
    ) del 
        ON del.insert_id = ID.insert_id 
        AND ( 
            ( 
                -- お渡し済みに変更になったデータで絞り込み
                del.prev_del_flg IS DISTINCT FROM del.del_flg AND del.del_flg = '01'
            ) 
            OR ( 
                -- カードが変更になったデータで絞り込み
                del.prev_company_cd IS DISTINCT FROM del.company_cd 
                    OR del.prev_id_no IS DISTINCT FROM del.id_no 
                    OR del.prev_card_no IS DISTINCT FROM del.card_no
            )
            OR ( 
                -- 業務委託者が変更になったデータで絞り込み
                del.prev_manage_no IS DISTINCT FROM del.manage_no 
            )
        ) 
WHERE
    -- ステータス変更になったデータを絞り込み
    (del.del_flg IS NOT NULL AND del.del_flg <> '') 
    AND ID.company_cd = /*company_cd*/'' 
    AND ID.id_no = /*id_no*/'' 
    AND ID.card_no = /*card_no*/'' 
UNION ALL 
SELECT
    -- 返却
    ID.upd_date
    , RETURN_NAME.item_name AS status
    , LUPDATE.account_no
    , LEDGER.contract_user_name
    , LEDGER.receive_start_date
    , LEDGER.receive_end_date 
FROM
    PUBLIC.caa_t_id_card_ledger ID 
    INNER JOIN PUBLIC.caa_t_contractor_ledger LEDGER 
        ON ID.manage_no = LEDGER.manage_no 
        AND LEDGER.delete_flg = '0' 
    LEFT OUTER JOIN PUBLIC.caa_t_contractor_ledger_update LUPDATE 
        ON LEDGER.manage_no = LUPDATE.manage_no 
        AND LUPDATE.delete_flg = '0' 
    LEFT OUTER JOIN PUBLIC.caa_m_general_name RETURN_NAME
        ON RETURN_NAME.company_cd = ID.company_cd
        AND RETURN_NAME.item_cd = ID.return_flg
        AND RETURN_NAME.item_category = 'return_flg'
        AND RETURN_NAME.delete_flg = '0'
    LEFT OUTER JOIN ( 
        -- 返却済みもしくは未返却に変更になったデータ RETURN
        SELECT
            ID.insert_id
            , LAG(ID.return_flg) OVER (ORDER BY ID.upd_date) AS prev_return_flg -- 1つ前の返却フラグ
            , ID.return_flg
            , LAG(ID.company_cd) OVER (ORDER BY ID.upd_date) AS prev_company_cd -- 1つ前の会社コード
            , ID.company_cd
            , LAG(ID.id_no) OVER (ORDER BY ID.upd_date) AS prev_id_no -- 1つ前のIDカード
            , ID.id_no
            , LAG(ID.card_no) OVER (ORDER BY ID.upd_date) AS prev_card_no -- 1つ前のカードNo.
            , ID.card_no 
            , LAG(ID.manage_no) OVER (ORDER BY ID.upd_date) AS prev_manage_no -- 1つ前の管理番号
            , ID.manage_no 
        FROM
            PUBLIC.caa_t_id_card_ledger ID 
        WHERE
            ID.manage_no IN ( 
                SELECT DISTINCT
                    ID.manage_no 
                FROM
                    PUBLIC.caa_t_id_card_ledger ID 
                WHERE
                    ID.company_cd = /*company_cd*/'' 
                    AND ID.id_no = /*id_no*/'' 
                    AND ID.card_no = /*card_no*/''
            )
    ) RETURN 
        ON RETURN.insert_id = ID.insert_id 
        AND ( 
            ( 
                RETURN.prev_return_flg IS DISTINCT FROM RETURN.return_flg 
                    AND ( 
                        -- 返却済みもしくは未返却に変更になったデータを絞り込み
                        RETURN.return_flg = '01' 
                        OR RETURN.return_flg = '02'
                    )
            ) 
            OR ( 
                -- カードが変更になったデータで絞り込み
                RETURN.prev_company_cd IS DISTINCT FROM RETURN.company_cd 
                    OR RETURN.prev_id_no IS DISTINCT FROM RETURN.id_no 
                    OR RETURN.prev_card_no IS DISTINCT FROM RETURN.card_no
            )
            OR ( 
                -- 業務委託者が変更になったデータで絞り込み
                RETURN.prev_manage_no IS DISTINCT FROM RETURN.manage_no 
            )
        ) 
WHERE
    -- ステータス変更になったデータを絞り込み
    ( 
        RETURN.return_flg IS NOT NULL 
        AND RETURN.return_flg <> ''
    ) 
    AND ID.company_cd = /*company_cd*/'' 
    AND ID.id_no = /*id_no*/'' 
    AND ID.card_no = /*card_no*/'' 
ORDER BY
    upd_date
    , status;
