findApsScheduleOrder
===
select #{page("h.id,\n" +
    "       h.order_no,\n" + 
    "       h.project_no,\n" + 
    "       i.item_no,\n" + 
    "       i.description as item_desc,\n" + 
    "       h.quantity_planned,\n" + 
    "       h.plan_type,\n" + 
    "       h.project_no,\n" + 
    "       h.order_urgency,\n" + 
    "       1 has_Children,\n"+
    "       p.priority")}
  from e_sfc_order_header h, e_bom_item i, e_mrp_project_no p
 where h.item_no = i.item_no
   and h.project_no = p.project_no(+)
   and exists (select 'X'
             from e_aps_schedule_result t
            where t.order_header_id = h.id
              and t.time_flag = 0)
              
findApsScheduleDetail
===
select #{page(
"       d.id,\n" +
"       d.sequence_no,\n" + 
"       d.sequence_no || ' ' || d.operation_description as order_no,\n" + 
"       d.operation_description as operation_desc,\n" + 
"       d.sequence_priority,\n" + 
"       round(d.set_up_time / 3600, 2) as set_up_time,\n" + 
"       round(d.runtime / 3600, 2) as runtime,\n" + 
"       round(d.process_time / 3600, 2) as process_time,\n" + 
"       round(d.other_time / 3600, 2) as other_time,\n" + 
"       nvl(d.key_flag, 1) as key_flag,\n" + 
"       d.status_code,\n" + 
"       a.eqm_name,\n" + 
"       to_char(t.start_date, 'yyyy-mm-dd hh24:mi:ss') start_date,\n" + 
"       to_char(t.end_date, 'yyyy-mm-dd hh24:mi:ss') end_date,\n" + 
"       d.department_code,\n" + 
"       nvl(d.revice_flag, 1) as revice_flag,\n" + 
"       nvl(d.lock_flag, 1) as lock_flag,\n" + 
"       t.team_code,\n" + 
"       w.team_name"
)}
  from e_sfc_order_detail    d,
       e_aps_schedule_result t,
       e_eqm_account         a,
       e_sfc_work_team       w
 where d.id = t.order_detail_id
   and a.eqm_num = t.eqm_num
   and t.team_code = w.team_code
   and t.time_flag = 0
   and t.order_no = #{orderNo}

