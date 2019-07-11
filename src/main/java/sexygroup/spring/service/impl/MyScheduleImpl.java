package sexygroup.spring.service.impl;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import sexygroup.spring.service.MySchedule;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.logging.Logger;

@Service
public class MyScheduleImpl implements MySchedule {
    private Logger log = Logger.getLogger(this.getClass().getName());

    //用户名
    @Value("${spring.datasource.username}")
    private String username;
    //密码
    @Value("${spring.datasource.password}")
    private String password;

    //数据库定时备份：每天备份一次
    @Scheduled(fixedDelay = 1000 * 3600 * 24)
    //@Scheduled(fixedDelay = 1000 * 30)
    public void dbBackup() {
        //要备份的数据库名
        String dbName = "springdb";
        //保存路径
        String savePath = "C:/春天造型管理系统/数据库备份/";
        //生成文件夹
        File dirFile = new File(savePath);
        if (!dirFile.exists()) {
            dirFile.mkdirs();
        }

        //日期格式
        DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        //获取当前日期
        Date now = new Date();
        String nowDateString = dateFormat.format(now);
        //获取七天前日期
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(now);
        calendar.add(Calendar.DATE, -7);
        String dataString = dateFormat.format(calendar.getTime());
        String beforeFileName = dbName + dataString + ".sql";
        //删除一周前备份
        File[] childFiles = dirFile.listFiles();
        for (File file : childFiles) {
            //文件名
            String fileName = file.getName();
            if (fileName.matches("^springdb(\\d){14}.sql$")) {
                //如果小于七天前日期，即为七天前文件，可删除
                if (fileName.compareToIgnoreCase(beforeFileName) < 0) {
                    if (file.exists()) {
                        file.delete();
                    }
                    log.warning("delete sql file: " + fileName);
                }
            }
        }

        //生成文件名
        String filePath = savePath + dbName + nowDateString + ".sql";
        //生成脚本语句
        String cmd = "cmd.exe /c mysqldump.exe  --user=" + username + " --password=" + password +
                " --host=localhost --protocol=tcp --port=3306 " +
                " --default-character-set=utf8 --single-transaction=TRUE " +
                " --routines --events " + dbName + " > " + filePath;
        try {
            Process process = Runtime.getRuntime().exec(cmd);
            log.info("backup database '" + dbName + "' success,filePath: " + filePath);
        } catch (Exception e) {
            log.severe(e.getMessage());
        }
    }
}
