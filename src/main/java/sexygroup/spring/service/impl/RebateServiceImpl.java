package sexygroup.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.RebateRepository;
import sexygroup.spring.pojo.Rebate;
import sexygroup.spring.service.RebateService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RebateServiceImpl implements RebateService {
    @Autowired
    RebateRepository rebateRepository;


    @Override
    public List<Rebate> findAll() {
        return rebateRepository.findAll();
    }

    @Override
    public Optional<Rebate> findById(Integer id) {
        return rebateRepository.findById(id);
    }

    @Override
    public Rebate save(Rebate rebate) {
        return rebateRepository.save(rebate);
    }

    @Override
    public void deleteById(Integer id) {
        rebateRepository.deleteById(id);
    }

}
