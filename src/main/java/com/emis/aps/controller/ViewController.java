package com.emis.aps.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ViewController {

    //主页访问
    @RequestMapping("")
    public ModelAndView index() {
        ModelAndView index = new ModelAndView("index");
        return index;
    }

    @RequestMapping("/portal")
    public ModelAndView portal() {
        ModelAndView portal = new ModelAndView("model/portal/main");
        return portal;
    }

    @RequestMapping("/orderGantt")
    public ModelAndView orderGantt() {
        ModelAndView orderGantt = new ModelAndView("model/orderGantt/main");
        return orderGantt;
    }

    @RequestMapping("/eqmGantt")
    public ModelAndView eqmGantt() {
        ModelAndView eqmGantt = new ModelAndView("model/eqmGantt/main");
        return eqmGantt;
    }
}
