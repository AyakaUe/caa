--*DataTitle '業務委託者管理台帳トラン'
--*Captions 'バージョン'
SELECT
    version 
FROM
    PUBLIC.caa_t_contractor_ledger 
WHERE
    manage_id = /*manage_id*/
ORDER BY
    manage_id
