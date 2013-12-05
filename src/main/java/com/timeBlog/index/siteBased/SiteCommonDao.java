package com.timeBlog.index.siteBased;

import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface SiteCommonDao {
	public Map<String,String> getUserList();
}
