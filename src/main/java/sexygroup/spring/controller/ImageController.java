package sexygroup.spring.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/image")
@Api(tags = "图片")
public class ImageController extends BaseController<Image, ImageService> {
    @Autowired
    private ImageService imageService;

    //上传图片
    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    @ApiOperation(value = "上传图片和图片信息", notes = "return String")
    @ResponseBody
    public String handleFilesUpload(HttpServletRequest request, MultipartFile[] files, String[] comments, Integer clientId) {
        //获取文件保存路径
        String savePath = request.getSession().getServletContext().getRealPath("/") + "upload/";
        //保存文件
        if (files.length == 0) {
            return "received 0 files";
        }
        for (int i = 0; i < files.length; ++i) {
            MultipartFile multipartFile = files[i];
            if (multipartFile.isEmpty()) {
                return "You failed to upload " + i + " because the file was empty.";
            }
            //保存图片与数据
            try {
                imageService.saveImage(clientId, comments[i], multipartFile, savePath);
            } catch (Exception e) {
                return "You failed to upload " + i + " =>" + e.getMessage();
            }
        }
        return "upload succeed!";
    }

    //通过图片id删除图片
    @GetMapping("/deleteImage")
    @ApiOperation(value = "通过图片id删除图片及其信息", notes = "return boolean")
    public boolean deleteImage(HttpServletRequest request, Integer imageId) {
        //获取文件保存路径
        String fileDir = request.getSession().getServletContext().getRealPath("/") + "upload/";
        return imageService.deleteImage(imageId, fileDir);
    }
}
