package sexygroup.spring.service;

import sexygroup.spring.pojo.Drawings;

import java.util.List;
import java.util.Optional;

public interface DrawingsService {

    List<Drawings> findAll();

    Optional<Drawings> findById(Integer id);

    Drawings save(Drawings drawings);

    void deleteById(Integer id);
}
