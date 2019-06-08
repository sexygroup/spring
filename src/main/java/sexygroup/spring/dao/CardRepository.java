package sexygroup.spring.dao;

import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Card;

@Repository
public interface CardRepository extends BaseRepository<Card, Integer> {

}
