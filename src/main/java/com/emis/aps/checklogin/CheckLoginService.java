package com.emis.aps.checklogin;

import org.beetl.sql.core.SQLManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CheckLoginService {
    @Autowired
    private SQLManager sqlManager;

    public List<Map> checkLogin(Map<String, Object> params) throws Exception {
        return sqlManager.select("CheckLogin.checkLogin", Map.class, params);
    }
}
