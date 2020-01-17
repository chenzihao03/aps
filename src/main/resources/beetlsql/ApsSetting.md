findRegular
===
select #{page(
"t.id,\n" +
"       t.seq_no,\n" + 
"       t.regular,\n" + 
"       decode(t.regular,\n" + 
"              1,\n" + 
"              '订单紧急度',\n" + 
"              2,\n" + 
"              '订单优先级',\n" + 
"              3,\n" + 
"              '工序优先级',\n" + 
"              5,\n" + 
"              '订单最早开工',\n" + 
"              6,\n" + 
"              '订单最早完工',\n" + 
"              7,\n" + 
"              '工序周期最长',\n" + 
"              8,\n" + 
"              '剩余操作数最多',\n" + 
"              10,\n" + 
"              '最短交付期') as regular_name")}
  from e_aps_regular t
 where nvl(t.flag, 0) = 0
 order by t.seq_no