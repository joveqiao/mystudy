package com.joveframework.web.servlet.view;

import java.io.File;
import java.util.Locale;

import org.springframework.web.servlet.view.JstlView;

public class MyJstlView extends JstlView {
	@Override
	public boolean checkResource(Locale locale) throws Exception {  
        File file = new File(this.getServletContext().getRealPath("/")+getUrl());  
        return file.exists();//判断是否存在  
    }  

}
