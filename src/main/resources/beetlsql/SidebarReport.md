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
