package sexygroup.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sexygroup.spring.pojo.Image;
import sexygroup.spring.service.ImageService;

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

}
