package sexygroup.spring.common.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import sexygroup.spring.common.service.BaseService;

import java.util.List;
import java.util.Optional;

public class BaseController<T, D extends BaseService> {
    @Autowired
    public D service;

    @GetMapping("/findAll")
    public List<T> findAll() {
        return service.findAll();
    }

    @GetMapping("/findById")
    public Optional<T> findById(Integer id) {
        return service.findById(id);
    }

    @PostMapping("/save")
    public T save(@RequestBody T entity) {
        return (T) service.save(entity);
    }

    @PostMapping("/deleteById")
    public boolean deleteById(Integer id) {
        service.deleteById(id);
        return true;
    }
}
