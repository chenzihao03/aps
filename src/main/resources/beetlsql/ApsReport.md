findApsResultTime
===
select #{page(
"rownum as id,\n" +
"       t.regular,\n" + 
"       t.time_flag,\n" + 
"       t.order_cycle,\n" + 
"       t.order_delay,\n" + 
"       t.eqm_load_ratio,\n" + 
"       t.eqm_key_load_ratio,\n" + 
"       to_char(t.create_date, 'yyyy-mm-dd hh24:mi:ss') as create_date")}
  from e_aps_result_view t
 Order By t.time_flag desc
 
findApsResult
===
select #{page(
"h.order_no,\n" +
"       h.item_no,\n" + 
"       i.description as item_desc,\n" + 
"       h.quantity_planned,\n" + 
"       h.plan_type,\n" + 
"       d.sequence_no,\n" + 
"       d.operation_description as operation_desc,\n" + 
"       d.sequence_priority,\n" + 
"       round(d.set_up_time / 3600, 2) as set_up_time,\n" + 
"       round(d.runtime / 3600, 2) as runtime,\n" + 
"       round(d.process_time / 3600, 2) as process_time,\n" + 
"       round(d.other_time / 3600, 2) as other_time,\n" + 
"       nvl(d.key_flag, 1) as key_flag,\n" + 
"       d.status_code,\n" + 
"       a.eqm_name,\n" + 
"       to_char(q.start_date,'yyyy-mm-dd hh24:mi:ss') start_date,\n" + 
"       to_char(q.end_date,'yyyy-mm-dd hh24:mi:ss') end_date,\n" + 
"       h.project_no,\n" + 
"       h.order_urgency,\n" + 
"       d.department_code,\n" + 
"       nvl(d.revice_flag, 1) as revice_flag,\n" + 
"       nvl(d.lock_flag, 1) as lock_flag,\n" + 
"       q.team_code,\n" + 
"       w.team_name,\n" + 
"       p.priority,\n"+
"       0 editable"
)}
  from e_sfc_order_header    h,
       e_sfc_order_detail    d,
       e_bom_item            i,
       e_eqm_account         a,
       e_mrp_project_no      p,
       e_aps_schedule_result q,
       e_sfc_work_team       w
 where h.id = d.header_id
   and h.item_no = i.item_no
   and a.eqm_num(+) = q.eqm_num
   and p.project_no(+) = h.project_no
   and q.order_detail_id = d.id
   and w.team_code(+) = q.team_code
   and q.time_flag = 0
 Order By h.order_no, d.sequence_no, q.start_date asc