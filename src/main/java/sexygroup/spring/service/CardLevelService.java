package sexygroup.spring.service;

import sexygroup.spring.pojo.CardLevel;

import java.util.List;
import java.util.Optional;

public interface CardLevelService {

    List<CardLevel> findAll();

    Optional<CardLevel> findById(Integer id);

    CardLevel save(CardLevel cardLevel);

    void deleteById(Integer id);
}
