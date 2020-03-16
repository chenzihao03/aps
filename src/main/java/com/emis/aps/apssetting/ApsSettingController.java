package com.emis.aps.apssetting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin//解决前端跨域问题
public class ApsSettingController {
    @Autowired
    private ApsSettingService apsSettingService;

    @RequestMapping("/findRegular")
    public List findRegular(@RequestParam Map<String, Object> params) throws Exception {
        return apsSettingService.findRegular(params);
    }
}
