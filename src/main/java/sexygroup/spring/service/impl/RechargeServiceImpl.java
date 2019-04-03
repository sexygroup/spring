package sexygroup.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.RechargeRepository;
import sexygroup.spring.pojo.Recharge;
import sexygroup.spring.service.RechargeService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RechargeServiceImpl implements RechargeService {
    @Autowired
    RechargeRepository rechargeRepository;


    @Override
    public List<Recharge> findAll() {
        return rechargeRepository.findAll();
    }

    @Override
    public Optional<Recharge> findById(Integer id) {
        return rechargeRepository.findById(id);
    }

    @Override
    public Recharge save(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteById(Integer id) {
        rechargeRepository.deleteById(id);
    }

}
