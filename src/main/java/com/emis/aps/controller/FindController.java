package com.emis.aps.controller;

import com.emis.aps.apsschedule.ApsScheduleService;
import com.emis.aps.service.*;
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

    @Autowired
    private ApsSettingService apsSettingService;

    @Autowired
    private ApsReportService apsReportService;

    @Autowired
    private LogIdService logIdService;

    @Autowired
    private ApsGanttReportService apsGanttReportService;

    @Autowired
    private ApsDispatchService apsDispatchService;

    @Autowired
    private CheckLoginService checkLoginService;

    @Autowired
    private SidebarReportService sidebarReportService;

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

    @RequestMapping("/findLogId")
    public List findLogId(@RequestParam Map<String, Object> params) throws Exception {
        return logIdService.findLogId(params);
    }

    @RequestMapping("/findOrderGantt")
    public List findOrderGantt(@RequestParam Map<String, Object> params) throws Exception {
        return apsGanttReportService.findOrderGantt(params);
    }

    @RequestMapping("/findApsDispatch")
    public List findApsDispatch(@RequestParam Map<String, Object> params) throws Exception {
        return apsDispatchService.findApsDispatch(params);
    }

    @RequestMapping("/findOrderLinks")
    public List findOrderLinks(@RequestParam Map<String, Object> params) throws Exception {
        return apsGanttReportService.findOrderLinks(params);
    }

    @RequestMapping("/checkLogin")
    public List checkLogin(@RequestParam Map<String, Object> params) throws Exception {
        return checkLoginService.checkLogin(params);
    }

    @RequestMapping("/findTreeTable")
    public Map<String, Object> findTreeTable(@RequestParam Map<String, Object> params) throws Exception {
        return sidebarReportService.findTable(params);
    }

}
