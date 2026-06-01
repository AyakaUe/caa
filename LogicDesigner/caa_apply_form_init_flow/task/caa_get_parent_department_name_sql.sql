SELECT
    department_cd
    , department_name 
FROM
    PUBLIC.imm_department 
WHERE
    imm_department.department_cd = /*parent_department_cd*/'' 
    AND imm_department.end_date > CURRENT_DATE 
    AND imm_department.delete_flag = '0' 
ORDER BY
    start_date ASC;