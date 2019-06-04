package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.ImageRepository;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ImageServiceImpl implements ImageService {
    @Autowired
    private ImageRepository imageRepository;


    @Override
    public List<Image> findAll() {
        return imageRepository.findAll();
    }

    @Override
    public Optional<Image> findById(Integer id) {
        return imageRepository.findById(id);
    }

    @Override
    public Image save(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public void deleteById(Integer id) {
        imageRepository.deleteById(id);
    }

    @Override
    public List<JSONObject> findAllDetail() {
        return (List<JSONObject>) JsonUtil.convert(imageRepository.findAllDetail().toString());
    }

    @Override
    public List<JSONObject> findByIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(imageRepository.findByIdDetail(id).toString());
    }

}
