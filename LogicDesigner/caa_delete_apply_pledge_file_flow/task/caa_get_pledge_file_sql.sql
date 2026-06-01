--*DataTitle '業務委託者受入申請_添付ファイルトラン'
--*Captions 'ユーザデータID','ファイルキー','書類種別','添付ファイル物理削除済みフラグ','登録日時','登録者','更新日時','更新者','削除フラグ'
SELECT DISTINCT
    CTAAF.user_data_id
    , CTAAF.file_key
    , CTAAF.document_type
    , CTAAF.file_delete_flg
    , CTAAF.add_date
    , CTAAF.add_user
    , CTAAF.upd_date
    , CTAAF.upd_user
    , CTAAF.delete_flg 
FROM
    PUBLIC.caa_t_apply_attached_file CTAAF 
    INNER JOIN caa_t_request_common CTRC 
        ON CTRC.user_data_id = CTAAF.user_data_id 
    INNER JOIN caa_t_request_processor CTRP 
        ON CTRP.user_data_id = CTAAF.user_data_id 
WHERE
    CTAAF.document_type = 'PLEDGE' 
    AND CTAAF.delete_flg = '0' 
    AND CTAAF.file_delete_flg = '0' 
    AND ( 
        CTRC.approval_date <= CURRENT_DATE - /*interval*/ -- 決裁日が7日以上過ぎているもの
        OR ( 
            -- 取止め、否認
            CTRP.processing_status IN ('discontinue', 'deny') 
            AND CTRP.processing_date <= CURRENT_DATE - /*interval*/ -- 取止め・否認後,7日以上過ぎているもの
        )
    ) 
ORDER BY
    CTAAF.user_data_id
    , CTAAF.file_key
