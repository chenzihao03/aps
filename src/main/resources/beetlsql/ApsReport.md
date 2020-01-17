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
"q.id,\n" +
"       d.id as detail_id,\n" + 
"       h.order_no,\n" + 
"       h.item_no,\n" + 
"       i.description as item_desc,\n" + 
"       h.quantity_planned,\n" + 
"       h.plan_type,\n" + 
"       d.sequence_no,\n" + 
"       d.operation_code,\n" + 
"       d.operation_description as operation_desc,\n" + 
"       to_char(d.advise_start_date, 'yyyy-mm-dd hh24:mi:ss') as advise_start_date,\n" + 
"       to_char(d.operation_due_date, 'yyyy-mm-dd hh24:mi:ss') as operation_due_date,\n" + 
"       d.sequence_priority,\n" + 
"       round(d.set_up_time / 3600, 2) as set_up_time,\n" + 
"       round(d.runtime / 3600, 2) as runtime,\n" + 
"       round(d.process_time / 3600, 2) as process_time,\n" + 
"       round(d.other_time / 3600, 2) as other_time,\n" + 
"       decode(nvl(d.key_flag, 1), 0, 1, 0) as key_flag,\n" + 
"       decode(d.status_code, 'U', '正常', 'S', '结束', 'F', '完成') as status_code,\n" + 
"       q.eqm_num,\n" + 
"       a.eqm_name,\n" + 
"       to_char(q.start_date, 'yyyy-mm-dd hh24:mi:ss') as start_date,\n" + 
"       to_char(q.end_date, 'yyyy-mm-dd hh24:mi:ss') as end_date,\n" + 
"       h.project_no,\n" + 
"       h.order_urgency,\n" + 
"       d.department_code,\n" + 
"       nvl(d.revice_flag, 1) as revice_flag,\n" + 
"       (select wm_concat(distinct t1.fault_name)\n" + 
"          from e_sfc_fault_report t, e_sfc_dispatch_fault t1\n" + 
"         where t.order_detail_id = d.id\n" + 
"           and t1.fault_code = t.fault_code) as fault_info,\n" + 
"       decode(nvl(d.lock_flag, 1), 0, 1, 0) as lock_flag,\n" + 
"       (select nvl(max(s.confirm_flag), 1)\n" + 
"          from e_aps_schedule s\n" + 
"         where s.order_detail_id = d.id) as confirm_flag,\n" + 
"       q.team_code,\n" + 
"       w.team_name,\n" + 
"       p.priority as order_priority")}
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