package com.emis.aps.controller;

import com.emis.aps.apsschedule.ApsScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin//解决前端跨域问题
public class FindController {

    @Autowired
    private ApsScheduleService apsScheduleService;

    @RequestMapping("/findApsHeader")
    public List findApsHeader(@RequestParam Map<String, Object> params) throws Exception {
        return apsScheduleService.findApsHeader(params);
    }

    @RequestMapping("/findApsDetail")
    public List findApsDetail(@RequestParam Map<String, Object> params) throws Exception {
        return apsScheduleService.findApsDetail(params);
    }

}
