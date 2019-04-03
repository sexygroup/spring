package sexygroup.spring.service;

import sexygroup.spring.pojo.Recharge;

import java.util.List;
import java.util.Optional;

public interface RechargeService {

    List<Recharge> findAll();

    Optional<Recharge> findById(Integer id);

    Recharge save(Recharge recharge);

    void deleteById(Integer id);
}
