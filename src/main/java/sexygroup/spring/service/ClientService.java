package sexygroup.spring.service;

import sexygroup.spring.pojo.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {

    List<Client> findAll();

    Optional<Client> findById(Integer id);

    Client save(Client client);

    void deleteById(Integer id);
}
