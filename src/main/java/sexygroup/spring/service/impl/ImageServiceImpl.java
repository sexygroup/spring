package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.ImageRepository;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;

@Service
@Transactional
public class ImageServiceImpl extends BaseServiceImpl<Image, ImageRepository> implements ImageService {


}
