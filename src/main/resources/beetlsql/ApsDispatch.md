findApsDispatch
===
select #{page(
"t.id,\n" +
"       t.order_no,\n" + 
"       t.order_detail_id,\n" + 
"       h.id                    as order_header_id,\n" + 
"       d.sequence_no,\n" + 
"       d.operation_description as operation_desc,\n" + 
"       d.work_center_code,\n" + 
"       c.description           as work_center_desc,\n" + 
"       to_char(t.start_date,\n" + 
"       'dd-MM-YYYY hh24:mi:ss') as start_date,\n" + 
"       to_char(t.end_date,\n" + 
"       'yyyy-mm-dd hh24:mi:ss') as end_date,\n" + 
"       t.eqm_num,\n" + 
"       a.eqm_name,\n" + 
"       t.team_code,\n" + 
"       w.team_name,\n" + 
"       d.department_code,\n" + 
"       s.description           as department_name,\n" + 
"       d.status_code,\n" + 
"       h.item_no,\n" + 
"       i.description           as item_desc,\n" + 
"       t.quantity,\n" + 
"       0 as editable"
)}
  from e_aps_schedule_result t,
       e_sfc_order_detail    d,
       e_eqm_account         a,
       e_sfc_work_team       w,
       e_pbd_work_center     c,
       e_smm_department      s,
       e_sfc_order_header    h,
       e_bom_item            i
 where t.order_detail_id = d.id
   and t.eqm_num = a.eqm_num(+)
   and t.team_code = w.team_code(+)
   and c.work_center = d.work_center_code
   and s.department_code = d.department_code
   and h.id = d.header_id
   and i.item_no = h.item_no
   and t.time_flag = 0
   and ep_mes_sfc_basic.uf_get_qty_can_dispatch(d.id) > 0
   and not
        (exists
         (select 'X' from e_sfc_order_detail_task r where r.result_id = t.id) or
         exists
         (select 'X' from e_sfc_dispatch_header dh where dh.result_id = t.id))
 Order By h.order_no, d.sequence_no ASC
