package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.CardRepository;
import sexygroup.spring.pojo.Card;
import sexygroup.spring.service.CardService;

@Service
@Transactional
public class CardServiceImpl extends BaseServiceImpl<Card, CardRepository> implements CardService {


}
