package sexygroup.spring.service;

import sexygroup.spring.pojo.Cost;

import java.util.List;
import java.util.Optional;

public interface CostService {

    List<Cost> findAll();

    Optional<Cost> findById(Integer id);

    Cost save(Cost cost);

    void deleteById(Integer id);
}
