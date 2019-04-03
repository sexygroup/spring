package sexygroup.spring.service;

import sexygroup.spring.pojo.Service;

import java.util.List;
import java.util.Optional;

public interface ServiceService {

    List<Service> findAll();

    Optional<Service> findById(Integer id);

    Service save(Service service);

    void deleteById(Integer id);
}
