$variable.is_work_location_other_checked
 = $variable.work_location_cheked.filter(i => i.isChecked && i.item_cd === "99").length > 0;