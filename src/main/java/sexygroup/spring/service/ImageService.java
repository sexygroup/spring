package sexygroup.spring.service;

import sexygroup.spring.pojo.Image;

import java.util.List;
import java.util.Optional;

public interface ImageService {

    List<Image> findAll();

    Optional<Image> findById(Integer id);

    Image save(Image image);

    void deleteById(Integer id);
}
