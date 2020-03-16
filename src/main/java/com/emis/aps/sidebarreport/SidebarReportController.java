package com.emis.aps.sidebarreport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin//解决前端跨域问题
public class SidebarReportController {
    @Autowired
    private SidebarReportService sidebarReportService;

    @RequestMapping("/findTreeTable")
    public Map<String, Object> findTreeTable(@RequestParam Map<String, Object> params) throws Exception {
        return sidebarReportService.findTable(params);
    }
}
