package com.emis.aps.service;

import org.beetl.sql.core.SQLManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ApsGanttReportService {
    @Autowired
    private SQLManager sqlManager;

    public List<Map> findOrderGantt(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsGanttReport.findOrderGantt", Map.class, params);
    }

    public List<Map> findOrderLinks(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsGanttReport.findOrderLinks", Map.class, params);
    }
}
