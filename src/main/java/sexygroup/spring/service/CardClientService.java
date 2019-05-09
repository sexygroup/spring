package sexygroup.spring.service;

import sexygroup.spring.pojo.CardClient;
import sexygroup.spring.pojo.CardClientKey;

import java.util.List;
import java.util.Optional;

public interface CardClientService {

    List<CardClient> findAll();

    Optional<CardClient> findById(CardClientKey id);

    CardClient save(CardClient item);

    void deleteById(CardClientKey id);
}
