findOrderGantt
===
select #{page(
"        a.id,\n" +
"        a.text,\n" +
"        a.item,\n" + 
"        a.quantity,\n" + 
"        a.parent_id as parent,\n" + 
"        to_char(a.start_date,\n" + 
"        'dd-MM-YYYY hh24:mi:ss') as start_date,\n" + 
"        to_char(a.end_date,\n" + 
"        'yyyy-mm-dd hh24:mi:ss') as end_date,\n" + 
"        a.duration,\n" + 
"        a.progress,\n" + 
"        a.open_id as open,\n" + 
"        a.data_sources"
)}
  from e_aps_schedule_result_view a
 where exists (select 'x'
          from e_aps_schedule_result s
         where s.order_no = a.order_no
           and nvl(s.time_flag, 0) = 0)
   and nvl(a.time_flag, 0) = 0
   order by a.order_no,a.sequence_no
   
findOrderLinks
===
select #{page(
"       rownum as id,\n" +
"       d.id as source,\n" + 
"       (select od.id\n" + 
"          from e_sfc_order_detail od\n" + 
"         where od.header_id = h.id\n" + 
"           and od.sequence_no > d.sequence_no\n" + 
"           and rownum = 1) as target,\n" + 
"       0 type"
)}
  from e_sfc_order_detail d, e_sfc_order_header h
 where h.id = d.header_id
   and d.status_code = 'U'
   and h.status = 'U'
