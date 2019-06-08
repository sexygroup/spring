package sexygroup.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sexygroup.spring.common.controller.BaseController;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;

@RestController
@RequestMapping("/image")
public class ImageController extends BaseController<Image, ImageService> {

}
