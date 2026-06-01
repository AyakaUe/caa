const start =
  $variable.optionalParameter.userParameter.caa_t_apply_info.contract_start_date;
const end =
  $variable.optionalParameter.userParameter.caa_t_apply_info.contract_end_plan_date;

console.log("end : " + end);

if (end != null) {
  $variable.is_contract_end_plan_date = new Date(end) < new Date(start);
} else {
  $variable.is_contract_end_plan_date = false;
}
