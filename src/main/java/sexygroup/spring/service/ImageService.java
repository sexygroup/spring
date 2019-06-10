package sexygroup.spring.service;

import io.swagger.models.auth.In;
import org.springframework.web.multipart.MultipartFile;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Image;

import java.io.IOException;

public interface ImageService extends BaseService<Image> {
    boolean saveImage(Integer clientId, String comment, MultipartFile multipartFile,String savePath) throws IOException;
    boolean deleteImage(Integer imageId,String fileDir);
}
