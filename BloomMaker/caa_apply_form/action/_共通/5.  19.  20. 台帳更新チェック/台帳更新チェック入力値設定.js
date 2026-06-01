
$variable.caa_check_caa_t_contractor_ledger_param = {
    ledgers: []
};

for (const item of $input.caa_t_contractor_provided_item) {
    $variable.caa_check_caa_t_contractor_ledger_param.ledgers.push({
        manage_id: item.manage_id,
        version: item.version,
    })
}