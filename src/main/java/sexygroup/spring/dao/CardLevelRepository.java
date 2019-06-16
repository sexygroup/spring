package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.CardLevel;

import java.util.List;

@Repository
public interface CardLevelRepository extends BaseRepository<CardLevel, Integer> {

    //查询所有(包含卡和客户信息)
    @Query(value = "select * from card_level order by card_level_price ", nativeQuery = true)
    List<CardLevel> findAll();

}
