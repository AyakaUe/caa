--*DataTitle '業務委託者管理台帳_添付ファイルトラン'
--*Captions '管理番号','ファイルキー','書類種別','添付ファイル物理削除済みフラグ','登録日時','登録者','更新日時','更新者','削除フラグ'
SELECT
    CTLAF.manage_no
    , CTLAF.file_key
    , CTLAF.document_type
    , CTLAF.file_delete_flg
    , CTLAF.add_date
    , CTLAF.add_user
    , CTLAF.upd_date
    , CTLAF.upd_user
    , CTLAF.delete_flg 
FROM
    PUBLIC.caa_t_ledger_attached_file CTLAF 
    INNER JOIN caa_t_contractor_ledger_update CTCLU 
        ON CTLAF.manage_no = CTCLU.manage_no 
WHERE
    CTLAF.document_type = 'PLEDGE' 
    AND CTLAF.delete_flg = '0' 
    AND CTLAF.file_delete_flg = '0' 
    AND CTCLU.pledge_submit_date <= CURRENT_DATE - /*interval*/ -- 誓約書原本提出日が7日以上過ぎているもの
ORDER BY
    CTLAF.manage_no
    , CTLAF.file_key;
