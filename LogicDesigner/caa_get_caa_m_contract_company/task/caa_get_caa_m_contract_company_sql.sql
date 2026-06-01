-- 委託先マスタ取得
SELECT
    * 
FROM
    PUBLIC.caa_m_contract_company 
WHERE
    company_cd = /*company_cd*/''               -- 会社コード
/*IF contract_company_cd != '' && contract_company_cd != null */
    AND contract_company_cd = /*contract_company_cd*/'' -- 委託先会社コード
/*END*/
/*IF delete_flg_check == true */
    AND delete_flg = '0' 
/*END*/
ORDER BY
    company_cd
    , contract_company_cd DESC;