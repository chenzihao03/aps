findLogId
===
select rownum as row_num,
           t.id,
           t.log_id,
           t.log_name,
           t.create_user,
           to_char(t.create_date, 'yyyy-mm-dd') as create_date
      from e_log_id t
        where t.log_name like '%陈梓豪%'