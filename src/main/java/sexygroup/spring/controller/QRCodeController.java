package sexygroup.spring.controller;

import com.google.zxing.WriterException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.utils.QRCodeGenerator;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.InetAddress;

@RestController
@RequestMapping("/QRCode")
@Api(tags="二维码生成")
public class QRCodeController {

    @GetMapping("/generateUrlCode")
    @ApiOperation(value = "生成Url二维码(url格式：9988/path1/a.html)",notes = "return boolean")
    public String generateUrlCode(HttpServletRequest request,String url,String pictureName) {
        //获取文件保存路径
        String savePath=request.getSession().getServletContext().getRealPath("/")+"QRCode/";
        //获取ip
        String localIP="";
        InetAddress inetAddress=null;
        try {
            inetAddress=inetAddress.getLocalHost();
            localIP=inetAddress.getHostAddress();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            return "获取本机IP失败 -->\n"+e.getMessage();
        }
        //生成二维码文本
        String text="http://"+localIP+":"+url;
        try {
            QRCodeGenerator.generateQRCodeImage(text,savePath+pictureName);
        } catch (Exception e) {
            return "二维码生成失败 -->\n"+e.getMessage();
        }
        return "成功生成二维码";
    }
}
