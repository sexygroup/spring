package sexygroup.spring.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;

@RestController
@RequestMapping("/image")
@Api(tags="图片")
public class ImageController extends BaseController<Image, ImageService> {

}
