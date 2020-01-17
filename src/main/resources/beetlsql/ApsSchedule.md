findApsHeader
===
select #{page("h.id,\n" +
"       h.project_no,\n" + 
"       h.order_no,\n" + 
"       h.item_no,\n" + 
"       i.description as item_desc,\n" + 
"       h.department_code,\n" + 
"       d.description as department_name,\n" + 
"       to_char(h.scheduled_start_date, 'yyyy-mm-dd hh24:mi:ss') as scheduled_start_date,\n" + 
"       to_char(h.scheduled_due_date, 'yyyy-mm-dd hh24:mi:ss') as scheduled_due_date,\n" + 
"       h.quantity_planned,\n" + 
"       h.create_user,\n" + 
"       to_char(h.create_date, 'yyyy-mm-dd hh24:mi:ss') as create_date")}
  from e_sfc_order_header h, e_bom_item i, e_smm_department d
 where i.item_no = h.item_no
   and d.department_code(+) = h.department_code
   and exists (select 'x'
          from e_aps_schedule_result t
         where t.order_header_id = h.id
           and t.time_flag = 0)

findApsDetail
===
select #{page("h.id,\n" +
"       h.project_no,\n" + 
"       h.order_no,\n" + 
"       h.item_no,\n" + 
"       i.description as item_desc,\n" + 
"       h.department_code,\n" + 
"       d.description as department_name,\n" + 
"       to_char(h.scheduled_start_date, 'yyyy-mm-dd hh24:mi:ss') as scheduled_start_date,\n" + 
"       to_char(h.scheduled_due_date, 'yyyy-mm-dd hh24:mi:ss') as scheduled_due_date,\n" + 
"       h.quantity_planned,\n" + 
"       h.create_user,\n" + 
"       to_char(h.create_date, 'yyyy-mm-dd hh24:mi:ss') as create_date")}
  from e_sfc_order_header h, e_bom_item i, e_smm_department d
 where i.item_no = h.item_no
   and d.department_code(+) = h.department_code
   and exists (select 'x'
          from e_aps_schedule_result t
         where t.order_header_id = h.id
           and t.time_flag = 0)
