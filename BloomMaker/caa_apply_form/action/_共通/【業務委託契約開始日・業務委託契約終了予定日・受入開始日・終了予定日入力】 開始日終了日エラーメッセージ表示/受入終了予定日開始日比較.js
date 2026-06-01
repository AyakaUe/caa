const start =
  $variable.optionalParameter.userParameter.caa_t_apply_info.receive_start_date;
const end =
  $variable.optionalParameter.userParameter.caa_t_apply_info.receive_plan_end_date;

if (end != null) {
  $variable.is_receive_plan_end_date = new Date(end) < new Date(start);
} else {
  $variable.is_receive_plan_end_date = false;
}