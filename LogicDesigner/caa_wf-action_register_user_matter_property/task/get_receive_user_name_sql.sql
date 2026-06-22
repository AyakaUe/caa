--*DataTitle '複数担当者取得'
SELECT DISTINCT
    LEDGER.receive_user_cd 
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
