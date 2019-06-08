package sexygroup.spring.common.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.common.service.BaseService;

import java.util.List;
import java.util.Optional;

@Transactional
public class BaseServiceImpl<T, D extends BaseRepository> implements BaseService<T> {
    @Autowired
    public D repository;


    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<T> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public T save(T entity) {
        return (T) repository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
