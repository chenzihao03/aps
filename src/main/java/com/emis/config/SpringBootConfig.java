package com.emis.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.beetl.sql.core.ClasspathLoader;
import org.beetl.sql.core.Interceptor;
import org.beetl.sql.core.UnderlinedNameConversion;
import org.beetl.sql.core.db.OracleStyle;
import org.beetl.sql.ext.DebugInterceptor;
import org.beetl.sql.ext.spring4.BeetlSqlDataSource;
import org.beetl.sql.ext.spring4.SqlManagerFactoryBean;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternUtils;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@SpringBootConfiguration
public class SpringBootConfig extends WebMvcConfigurerAdapter {
    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/");
        viewResolver.setSuffix(".jsp");
        viewResolver.setViewClass(JstlView.class);
        return viewResolver;
    }

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource", ignoreUnknownFields = true)
    public DataSource dataSource() {
        DruidDataSource ds = new DruidDataSource();
        return ds;
    }

    //注册后台serlvetbean，用于显示后台界面
    @Bean
    public ServletRegistrationBean<StatViewServlet> druidStatViewServletReg() {
        ServletRegistrationBean<StatViewServlet> servletRegistrationBean = new ServletRegistrationBean<StatViewServlet>(new StatViewServlet(), "/druid/*");
        Map<String, String> params = new HashMap<String, String>();
        params.put("loginUsername", "admin");
        params.put("loginPassword", "1");
        params.put("allow", "");
        params.put("deny", "");
        servletRegistrationBean.setInitParameters(params);
        return servletRegistrationBean;
    }

    @Bean
    public FilterRegistrationBean<WebStatFilter> webStatFilterReg() {
        FilterRegistrationBean bean = new FilterRegistrationBean();
        bean.setFilter(new WebStatFilter());
        bean.addUrlPatterns("/*");
        //设置排序，如果系统中有多个过滤器，order就决定了哪个过滤器先执行，数值越小最先执行
        bean.setOrder(1);
        Map<String, String> params = new HashMap<String, String>();
        params.put("exclusions","*.png,*.jpg,*.woff,*.js,*.css,*.html,*.json");
        bean.setInitParameters(params);
        return bean;
    }

    // ============= 以下是beetlsql配置 =============
    @Bean
    @Primary
    public SqlManagerFactoryBean sqlManager(@Qualifier("dataSource") DataSource dataSource) {
        SqlManagerFactoryBean factory = new SqlManagerFactoryBean();
        BeetlSqlDataSource source = new BeetlSqlDataSource();
        source.setMasterSource(dataSource);
        factory.setCs(source);
        factory.setDbStyle(new OracleStyle());
        factory.setInterceptors(new Interceptor[]{new DebugInterceptor()});
        //开启驼峰
        factory.setNc(new UnderlinedNameConversion());
        // sql文件路径
        factory.setSqlLoader(new ClasspathLoader("/beetlsql"));
        ResourcePatternResolver resource = ResourcePatternUtils.getResourcePatternResolver(new DefaultResourceLoader());
        factory.setConfigLocation(resource.getResource("classpath:beetlsql.properties"));
        return factory;
    }

    // 开启事务
    @Bean(name = "transactionManager")
    public DataSourceTransactionManager getDataSourceTransactionManager(
            @Qualifier("dataSource") DataSource dataSource) {
        DataSourceTransactionManager dsm = new DataSourceTransactionManager();
        dsm.setDataSource(dataSource);
        return dsm;
    }
}
