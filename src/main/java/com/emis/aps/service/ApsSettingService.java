package com.emis.aps.service;

import org.beetl.sql.core.SQLManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ApsSettingService {
    @Autowired
    private SQLManager sqlManager;

    public List<Map> findRegular(Map<String, Object> params) throws Exception {
        return sqlManager.select("ApsSetting.findRegular", Map.class, params);
    }
}
