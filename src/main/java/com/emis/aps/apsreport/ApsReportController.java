package com.emis.aps.apsreport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin//解决前端跨域问题
public class ApsReportController {
    @Autowired
    private ApsReportService apsReportService;

    @RequestMapping("/findApsResultTime")
    public List findApsResultTime(@RequestParam Map<String, Object> params) throws Exception {
        return apsReportService.findApsResultTime(params);
    }

    @RequestMapping("/findApsResult")
    public List findApsResult(@RequestParam Map<String, Object> params) throws Exception {
        return apsReportService.findApsResult(params);
    }
}
