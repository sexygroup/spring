package sexygroup.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CardClientRepository;
import sexygroup.spring.pojo.CardClient;
import sexygroup.spring.pojo.CardClientKey;
import sexygroup.spring.service.AdminService;
import sexygroup.spring.service.CardClientService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CardClientServiceImpl implements CardClientService {
    @Autowired
    private CardClientRepository cardClientRepository;


    @Override
    public List<CardClient> findAll() {
        return cardClientRepository.findAll();
    }

    @Override
    public Optional<CardClient> findById(CardClientKey id) {
        return cardClientRepository.findById(id);
    }

    @Override
    public CardClient save(CardClient admin) {
        return cardClientRepository.save(admin);
    }

    @Override
    public void deleteById(CardClientKey id) {
        cardClientRepository.deleteById(id);
    }

}
