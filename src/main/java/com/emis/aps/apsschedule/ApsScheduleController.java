package com.emis.aps.apsschedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin//解决前端跨域问题
public class ApsScheduleController {

    @Autowired
    private ApsScheduleService apsScheduleService;

    @RequestMapping("/findApsScheduleOrder")
    public List findApsScheduleOrder(@RequestParam Map<String, Object> params) throws Exception {
        return apsScheduleService.findApsScheduleOrder(params);
    }

    @RequestMapping("/findApsScheduleDetail")
    public List findApsScheduleDetail(@RequestParam Map<String, Object> params) throws Exception {
        return apsScheduleService.findApsScheduleDetail(params);
    }
}
