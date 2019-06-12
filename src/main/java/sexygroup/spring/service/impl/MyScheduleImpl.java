package sexygroup.spring.service.impl;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import sexygroup.spring.service.MySchedule;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Logger;

@Service
public class MyScheduleImpl implements MySchedule {
    Logger log = Logger.getLogger(this.getClass().getName());

    //用户名
    @Value("${spring.datasource.username}")
    private String username;
    //密码
    @Value("${spring.datasource.password}")
    private String password;

    //数据库定时备份：每天备份一次
    @Scheduled(fixedDelay = 1000 * 3600 * 24)
    public void dbBackup() {
        //要备份的数据库名
        String dbName = "springdb";
        //保存路径
        String savePath = "D:/春天造型管理系统/数据库备份/";
        //生成文件夹
        File dirFile = new File(savePath);
        if (!dirFile.exists()) {
            dirFile.mkdirs();
        }

        //生成文件名
        DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        String filePath = savePath + dbName + dateFormat.format(new Date()) + ".sql";
        //生成脚本语句
        String cmd = "cmd /c mysqldump.exe  --user=" + username + " --password=" + password +
                " --host=localhost --protocol=tcp --port=3306 " +
                " --default-character-set=utf8 --single-transaction=TRUE " +
                " --routines --events " + dbName + " > " + filePath;
        try {
            Process process = Runtime.getRuntime().exec(cmd);
            log.info("backup database '" + dbName + "' success,filePath: " + filePath);
        } catch (Exception e) {
            e.printStackTrace();
            log.warning(e.getMessage());
        }
    }
}
