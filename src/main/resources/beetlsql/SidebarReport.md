findSidebar
===
select t.*
  from e_sys_menu t
 where 1 = 1 
@if(!isEmpty(level)) {
and t.leve = #{level}
@}
@pageIgnoreTag() {
order by t.seq_no
@}

findOrder
===
select #{page("h.order_no,h.item_no,h.project_no")}
from e_Sfc_order_header h
where rownum <= 1


findDetail
===
select  #{page("d.id, d.sequence_no, d.operation_description")}
  from e_sfc_order_header h, e_sfc_order_detail d
 where d.header_id = h.id
   and h.order_no = #{orderNo}
