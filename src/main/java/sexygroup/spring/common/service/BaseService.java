package sexygroup.spring.common.service;

import java.util.List;
import java.util.Optional;

public interface BaseService<T> {

    List<T> findAll();

    Optional<T> findById(Integer id);

    T save(T entity);

    void deleteById(Integer id);
}
