UPDATE PUBLIC.caa_t_ledger_attached_file 
SET
    document_type = /*document_type*/
    , file_delete_flg = /*file_delete_flg*/
    , add_date = /*add_date*/
    , add_user = /*add_user*/
    , upd_date = now()
    , upd_user = /*upd_user*/
    , delete_flg = /*delete_flg*/ 
WHERE
    manage_no = /*manage_no*/ 
    AND file_key = /*file_key*/
