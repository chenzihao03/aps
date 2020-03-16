package com.emis.aps.apsgantt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin//解决前端跨域问题
public class ApsGanttController {

    @Autowired
    private ApsGanttService apsGanttService;

    @RequestMapping("/findOrderGantt")
    public List findOrderGantt(@RequestParam Map<String, Object> params) throws Exception {
        return apsGanttService.findOrderGantt(params);
    }


    @RequestMapping("/findOrderLinks")
    public List findOrderLinks(@RequestParam Map<String, Object> params) throws Exception {
        return apsGanttService.findOrderLinks(params);
    }
}
