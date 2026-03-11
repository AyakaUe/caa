SELECT
    count(*) 
FROM
    caa_m_id_card cmic 
WHERE
    1 = 1 
/*IF company_cd != '' && company_cd != null */
    AND cmic.company_cd = /*company_cd*/'' 
/*END*/
/*IF id_no != '' && id_no != null */
    AND cmic.id_no = /*id_no*/'' 
/*END*/
