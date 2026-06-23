--*DataTitle '業務委託者管理台帳トラン'
--*Captions 'バージョン'
SELECT
    MAX(version) as version
FROM
    PUBLIC.caa_t_contractor_ledger 
WHERE
    manage_no = /*manage_no*/''
