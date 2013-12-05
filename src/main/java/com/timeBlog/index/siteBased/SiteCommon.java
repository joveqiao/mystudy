package com.timeBlog.index.siteBased;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.timeBlog.index.siteBased.util.VerifyCodeUtils;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/site")
public class SiteCommon {
	
	/**
	 * 用户登录
	 * @param request
	 * @param response
	 * @param modelMap
	 * @return
	 */
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public ModelAndView login(HttpServletRequest request,HttpServletResponse response,ModelMap modelMap){
		String userName = request.getParameter("userName").toString();
		String userPwd = request.getParameter("userPwd").toString();
		modelMap.put("userName", userName);
		modelMap.put("userPwd", userPwd);
		return new ModelAndView("index", modelMap);
	}
	
	/**
	 * 404异常页面
	 * @return
	 */
	@RequestMapping(value="/404")
	public ModelAndView notFound(){
		return new ModelAndView("404");
	}
	
	/**
	 * 500异常页面
	 * @return
	 */
	@RequestMapping(value="/500")
	public ModelAndView siteError(){
		return new ModelAndView("500");
	}
	
	@RequestMapping(value="/verifyImage")
	@ResponseBody
	public void getVerifyImage(HttpServletRequest request,HttpServletResponse response){
		
		try {
			VerifyCodeUtils.getVerifyCode(request,response,4,80,30);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
