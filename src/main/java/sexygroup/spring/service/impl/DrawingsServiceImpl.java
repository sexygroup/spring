package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.DrawingsRepository;
import sexygroup.spring.pojo.Drawings;
import sexygroup.spring.service.DrawingsService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DrawingsServiceImpl implements DrawingsService {
    @Autowired
    DrawingsRepository drawingsRepository;


    @Override
    public List<Drawings> findAll() {
        return drawingsRepository.findAll();
    }

    @Override
    public Optional<Drawings> findById(Integer id) {
        return drawingsRepository.findById(id);
    }

    @Override
    public Drawings save(Drawings drawings) {
        return drawingsRepository.save(drawings);
    }

    @Override
    public void deleteById(Integer id) {
        drawingsRepository.deleteById(id);
    }

    @Override
    public List<JSONObject> findAllDetail() {
        return drawingsRepository.findAllDetail();
    }

    @Override
    public JSONObject findByIdDetail(Integer id) {
        return drawingsRepository.findByIdDetail(id);
    }

    @Override
    public List<JSONObject> findByCardIdDetail(Integer id) {
        return drawingsRepository.findByCardIdDetail(id);
    }

    @Override
    public List<JSONObject> findByClientIdDetail(Integer id) {
        return drawingsRepository.findByClientIdDetail(id);
    }

    @Override
    public List<JSONObject> findByClientNameDetail(String name) {
        return drawingsRepository.findByClientNameDetail(name);
    }

    @Override
    public List<JSONObject> findByDataBetweenDetail(String startTime, String endTime) {
        return drawingsRepository.findByDataBetweenDetail(startTime, endTime);
    }

}
