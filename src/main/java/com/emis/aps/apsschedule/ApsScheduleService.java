package com.emis.aps.apsschedule;

import org.beetl.sql.core.SQLManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ApsScheduleService {

    @Autowired
    private SQLManager sqlManager;

    public List<Map> findApsHeader(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsSchedule.findApsHeader", Map.class, params);
    }

    public List<Map> findApsDetail(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsSchedule.findApsDetail", Map.class, params);
    }

    public List<Map> findApsScheduleOrder(Map<String, Object> params) throws Exception {
        return sqlManager.select("aps/ApsSchedule.findApsScheduleOrder", Map.class, params);
    }

    public List<Map> findApsScheduleDetail(Map<String, Object> params) throws Exception {
        return sqlManager.select("aps/ApsSchedule.findApsScheduleDetail", Map.class, params);
    }
}
