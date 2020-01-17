package com.emis.aps.controller;

import com.emis.aps.service.ApsReportService;
import com.emis.aps.service.ApsScheduleService;
import com.emis.aps.service.ApsSettingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class FindController {

//    @Resource
//    private LogIdService logIdService = null;

    @Autowired
    private ApsScheduleService apsScheduleService;

    @Autowired
    private ApsSettingService apsSettingService;

    @Autowired
    private ApsReportService apsReportService;

//    @RequestMapping("/findLogId")
//    public List findLogId(@RequestParam Map<String, String> params) throws Exception {
//        return logIdService.findLogId(params);
//    }

    @RequestMapping("/findApsHeader")
    public List findApsHeader(@RequestParam Map<String, Object> params) throws Exception {
        return apsScheduleService.findApsHeader(params);
    }

    @RequestMapping("/findApsDetail")
    public List findApsDetail(@RequestParam Map<String, Object> params) throws Exception {
        return apsScheduleService.findApsDetail(params);
    }

    @RequestMapping("/findRegular")
    public List findRegular(@RequestParam Map<String, Object> params) throws Exception {
        return apsSettingService.findRegular(params);
    }

    @RequestMapping("/findApsResultTime")
    public List findApsResultTime(@RequestParam Map<String, Object> params) throws Exception {
        return apsReportService.findApsResultTime(params);
    }

    @RequestMapping("/findApsResult")
    public List findApsResult(@RequestParam Map<String, Object> params) throws Exception {
        return apsReportService.findApsResult(params);
    }
}
