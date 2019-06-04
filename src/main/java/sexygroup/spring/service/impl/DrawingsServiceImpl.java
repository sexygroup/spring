package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.DrawingsRepository;
import sexygroup.spring.pojo.Drawings;
import sexygroup.spring.service.DrawingsService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DrawingsServiceImpl implements DrawingsService {
    @Autowired
    private DrawingsRepository drawingsRepository;


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
        return (List<JSONObject>) JsonUtil.convert(drawingsRepository.findAllDetail().toString());
    }

    @Override
    public JSONObject findByIdDetail(Integer id) {
        return (JSONObject)JsonUtil.convert(drawingsRepository.findByIdDetail(id).toJSONString());
    }

    @Override
    public List<JSONObject> findByCardIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(drawingsRepository.findByCardIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(drawingsRepository.findByClientIdDetail(id).toString());
    }

    @Override
    public List<JSONObject> findByClientNameDetail(String name) {
        return (List<JSONObject>) JsonUtil.convert(drawingsRepository.findByClientNameDetail(name).toString());
    }

    @Override
    public List<JSONObject> findByDateBetweenDetail(String startTime, String endTime) {
        return (List<JSONObject>) JsonUtil.convert(drawingsRepository.findByDateBetweenDetail(startTime, endTime).toString());
    }

}
