--*DataTitle '担当者複数人チェック'
SELECT
    CASE 
        WHEN COUNT(DISTINCT LEDGER.receive_user_cd) > 1 
            THEN TRUE 
        ELSE FALSE 
        END AS is_not_distinct 
FROM
    PUBLIC.caa_t_contractor_ledger LEDGER 
WHERE
    LEDGER.manage_id IN ( 
        SELECT
            ITEM.manage_id 
        FROM
            PUBLIC.caa_t_contractor_provided_item ITEM 
        WHERE
            ITEM.user_data_id = /*user_data_id*/''
    )
