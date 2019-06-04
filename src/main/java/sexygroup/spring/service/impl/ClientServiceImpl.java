package sexygroup.spring.service.impl;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.ClientRepository;
import sexygroup.spring.pojo.Client;
import sexygroup.spring.service.ClientService;
import sexygroup.spring.utils.JsonUtil;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;


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
        return (List<JSONObject>) JsonUtil.convert(clientRepository.findAllDetail().toString());
    }

    @Override
    public List<JSONObject> findByIdDetail(Integer id) {
        return (List<JSONObject>) JsonUtil.convert(clientRepository.findByIdDetail(id).toString());
    }

    @Override
    public boolean existsByClientPhone(String phone) {
        return clientRepository.existsByClientPhone(phone);
    }

    @Override
    public List<JSONObject> findByClientNameDetail(String name) {
        return (List<JSONObject>) JsonUtil.convert(clientRepository.findByClientNameDetail(name).toString());
    }

    @Override
    public List<JSONObject> findByClientPhoneDetail(String phone) {
        return (List<JSONObject>) JsonUtil.convert(clientRepository.findByClientPhoneDetail(phone).toString());
    }

}
