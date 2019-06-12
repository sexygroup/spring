package sexygroup.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.ImageRepository;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@Service
@Transactional
public class ImageServiceImpl extends BaseServiceImpl<Image, ImageRepository> implements ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public boolean saveImage(Integer clientId, String comment, MultipartFile multipartFile, String savePath) throws IOException {
        Image image = new Image();
        image.setClientId(clientId);
        image.setImageComment(comment);
        //保存获取ImageId
        Image savedImage = imageRepository.save(image);

        //获取文件名
        String fileName = multipartFile.getOriginalFilename();
        String suffix = fileName.substring(fileName.lastIndexOf("."));
        savedImage.setImageName(savedImage.getImageId() + suffix);
        //保存文件
        File dest = new File(savePath + savedImage.getImageName());
        //判断文件父目录是否存在/不存在就创建
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        multipartFile.transferTo(dest);
        //保存修改后的文件名
        imageRepository.save(savedImage);
        return true;
    }

    @Override
    public boolean deleteImage(Integer imageId, String fileDir) {
        //获取图片名
        Optional<Image> imageOptional = imageRepository.findById(imageId);
        if (!imageOptional.isPresent()) {
            return true;
        }
        Image image = imageOptional.get();
        String filePath = fileDir + image.getImageName();
        File file = new File(filePath);
        //删除文件
        if (file.exists()) {
            file.delete();
        }
        //删除数据库中图片信息
        imageRepository.deleteById(imageId);
        return true;
    }
}
