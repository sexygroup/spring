package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.ClientRepository;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.ClientService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {
    @Autowired
    ClientRepository clientRepository;


    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> findById(Integer id) {
        return clientRepository.findById(id);
    }

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void deleteById(Integer id) {
        clientRepository.deleteById(id);
    }

    @Override
    public List<JSONObject> findAllDetail() {
        return clientRepository.findAllDetail();
    }

    @Override
    public List<JSONObject> findByIdDetail(Integer id) {
        return clientRepository.findByIdDetail(id);
    }

}
