package com.emis.aps.apsdispatch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin//解决前端跨域问题
public class ApsDispatchController {
    @Autowired
    private ApsDispatchService apsDispatchService;

    @RequestMapping("/findApsDispatch")
    public List findApsDispatch(@RequestParam Map<String, Object> params) throws Exception {
        return apsDispatchService.findApsDispatch(params);
    }

}
