package sexygroup.spring.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.dao.CardLevelRepository;
import sexygroup.spring.pojo.CardLevel;
import sexygroup.spring.service.CardLevelService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CardLevelServiceImpl implements CardLevelService {
    @Autowired
    private CardLevelRepository cardLevelRepository;


    @Override
    public List<CardLevel> findAll() {
        Sort sort=new Sort(Sort.Direction.ASC,"cardLevelPrice");
        return cardLevelRepository.findAll(sort);
    }

    @Override
    public Optional<CardLevel> findById(Integer id) {
        return cardLevelRepository.findById(id);
    }

    @Override
    public CardLevel save(CardLevel cardLevel) {
        return cardLevelRepository.save(cardLevel);
    }

    @Override
    public void deleteById(Integer id) {
        cardLevelRepository.deleteById(id);
    }

}
