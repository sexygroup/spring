package sexygroup.spring.service;

import sexygroup.spring.pojo.Rebate;

import java.util.List;
import java.util.Optional;

public interface RebateService {

    List<Rebate> findAll();

    Optional<Rebate> findById(Integer id);

    Rebate save(Rebate rebate);

    void deleteById(Integer id);
}
