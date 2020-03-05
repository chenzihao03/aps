package com.emis.aps.service;

import org.beetl.sql.core.SQLManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ApsDispatchService {

    @Autowired
    private SQLManager sqlManager;

    public List<Map> findApsDispatch(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsDispatch.findApsDispatch", Map.class, params);
    }
}
