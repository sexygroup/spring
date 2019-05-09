package sexygroup.spring.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/image")
public class ImageController {
    @Autowired
    ImageService imageService;

    @GetMapping("/findAll")
    public List<Image> findAll() {
        return imageService.findAll();
    }

    @GetMapping("/findById")
    public Optional<Image> findById(Integer id) {
        return imageService.findById(id);
    }

    @PostMapping("/save")
    public Image save(@RequestBody Image image) {
        return imageService.save(image);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        imageService.deleteById(id);
        return true;
    }

    @GetMapping("/findAllDetail")
    public List<JSONObject> findAllDetail() {
        return imageService.findAllDetail();
    }

    @GetMapping("/findByIdDetail")
    public JSONObject findByIdDetail(Integer id) {
        return imageService.findByIdDetail(id);
    }

    /*
    //上传图片
    @RequestMapping(value="/upload", method=RequestMethod.POST)
    public @ResponseBody
    String handleFileUpload(HttpServletRequest request){
        String code=request.getParameter("repairCode");
        String mail=request.getParameter("repairMail");
        String place=request.getParameter("repairPlace");
        String reason=request.getParameter("repairReason");

        RepairEntity repairEntity=new RepairEntity();
        repairEntity.setRepairCode(code);
        repairEntity.setRepairMail(mail);
        repairEntity.setRepairPlace(place);
        repairEntity.setRepairReason(reason);

        //添加保修日期
        ApparatusEntity apparatusEntity=apparatusService.findByCode(code);
        if (apparatusEntity!=null){
            repairEntity.setWarranty(apparatusEntity.getWarranty());
        }else {
            repairEntity.setWarranty("未指定");
        }
        //初始化接单人信息
        repairEntity.setName("无");
        repairEntity.setPhone("无");
        repairEntity.setMail("无");

        //获取时间
        String time=myTools.getTime();
        repairEntity.setRepairTime(time);
        //处理状态
        repairEntity.setState("待维修");
        System.out.println(repairEntity);


        //获取文件列表
        List<MultipartFile> files =((MultipartHttpServletRequest)request).getFiles("files[]");
        //保存文件
        MultipartFile file = null;
        BufferedOutputStream stream = null;
        //保存路径/相对于项目根目录
        File file1=new File("");
        String path1="";
        try {
            path1=file1.getCanonicalPath();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("path1:"+path1);
        //必须实际路径/从文件获取
        String path=path1+"/images/";
        String myPath="http://localhost:8081/images/";

        if (files.size()==1){
            String fileName1=files.get(0).getOriginalFilename();
            repairEntity.setPhoto1(myPath+fileName1);
        }else {
            String fileName21=files.get(0).getOriginalFilename();
            repairEntity.setPhoto1(myPath+fileName21);
            String fileName22=files.get(1).getOriginalFilename();
            repairEntity.setPhoto2(myPath+fileName22);
        }
        for (int i =0; i< files.size(); ++i) {
            file = files.get(i);
            if (!file.isEmpty()) {
                try {

                    //获取文件名
                    String fileName=file.getOriginalFilename();

                    File dest = new File(path+ fileName);
                    //判断文件父目录是否存在/不存在就创建
                    if(!dest.getParentFile().exists()){
                        dest.getParentFile().mkdir();
                    }
                    byte[] bytes = file.getBytes();
                    stream = new BufferedOutputStream(new FileOutputStream(dest));
                    stream.write(bytes);
                    stream.close();
                } catch (Exception e) {
                    stream =  null;
                    return "You failed to upload " + i + " =>" + e.getMessage();
                }
            } else {
                return "You failed to upload " + i + " because the file was empty.";
            }
        }
        repairService.saveRepair(repairEntity);
        return "发送成功!";
    }

     */

}
