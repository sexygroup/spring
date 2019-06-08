package sexygroup.spring.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sexygroup.spring.common.service.impl.BaseServiceImpl;
import sexygroup.spring.dao.CardLevelRepository;
import sexygroup.spring.pojo.CardLevel;
import sexygroup.spring.service.CardLevelService;

@Service
@Transactional
public class CardLevelServiceImpl extends BaseServiceImpl<CardLevel, CardLevelRepository> implements CardLevelService {


}
