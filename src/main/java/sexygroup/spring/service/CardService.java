package sexygroup.spring.service;

import sexygroup.spring.pojo.Card;

import java.util.List;
import java.util.Optional;

public interface CardService {

    List<Card> findAll();

    Optional<Card> findById(Integer id);

    Card save(Card card);

    void deleteById(Integer id);
}
