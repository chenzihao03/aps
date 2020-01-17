package com.emis.aps.service;

import org.beetl.sql.core.SQLManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ApsReportService {
    @Autowired
    private SQLManager sqlManager;

    public List<Map> findApsResultTime(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsReport.findApsResultTime", Map.class, params);
    }

    public List<Map> findApsResult(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsReport.findApsResult", Map.class, params);
    }
}
