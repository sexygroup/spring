package sexygroup.spring.service;

import org.springframework.web.multipart.MultipartFile;
import sexygroup.spring.common.service.BaseService;
import sexygroup.spring.pojo.Image;

import java.io.IOException;

public interface ImageService extends BaseService<Image> {
    Boolean saveImage(Integer clientId, String comment, MultipartFile multipartFile, String savePath) throws IOException;

    Boolean deleteImage(Integer imageId, String fileDir);
}
