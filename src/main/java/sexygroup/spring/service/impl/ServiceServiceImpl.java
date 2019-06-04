package sexygroup.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.ServiceRepository;
import sexygroup.spring.service.ServiceService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceServiceImpl implements ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;


    @Override
    public List<sexygroup.spring.pojo.Service> findAll() {
        return serviceRepository.findAll();
    }

    @Override
    public Optional<sexygroup.spring.pojo.Service> findById(Integer id) {
        return serviceRepository.findById(id);
    }

    @Override
    public sexygroup.spring.pojo.Service save(sexygroup.spring.pojo.Service service) {
        return serviceRepository.save(service);
    }

    @Override
    public void deleteById(Integer id) {
        serviceRepository.deleteById(id);
    }

}
