package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Card;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Integer>, JpaSpecificationExecutor<Card> {
    @Query(value = "select * from card_client_view order by card_id asc ,client_id asc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    @Query(value = "select * from card_client_view  where card_id=?1 order by client_id asc", nativeQuery = true)
    List<JSONObject> findByIdDetail(Integer id);

}
