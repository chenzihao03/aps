package com.emis.aps.service;

import org.beetl.sql.core.SQLManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SidebarReportService {
    @Autowired
    private SQLManager sqlManager;

    public Map<String, Object> findTable(Map<String, Object> params) throws Exception {
        Map<String, Object> result = new HashMap<String, Object>();
        Map<String, Object> detailParams = new HashMap<String, Object>();
        try {
            List<Map> list = sqlManager.select("SidebarReport.findOrder", Map.class, params);
            for (int i = 0; i < list.size(); i++) {
                Map<String, Object> detailList = new HashMap<String, Object>();
                detailParams.put("orderNo", list.get(i).get("orderNo"));
                List<Map> list1 = sqlManager.select("SidebarReport.findDetail", Map.class, detailParams);
                detailList.put("orderNo", list.get(i).get("orderNo"));
                detailList.put("children", list1);
                list.set(i, detailList);
            }
            result.put("root", list);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

}
