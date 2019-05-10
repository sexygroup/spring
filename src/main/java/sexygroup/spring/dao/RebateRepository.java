package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Rebate;

import java.util.List;

@Repository
public interface  RebateRepository extends JpaRepository<Rebate, Integer>, JpaSpecificationExecutor<Rebate> {
    @Query(value = "select * from rebate_detail_view order by rebate_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    @Query(value = "select * from rebate_detail_view  where rebate_id=?1 ", nativeQuery = true)
    JSONObject findByIdDetail(Integer id);

    //cardId
    @Query(value = "select * from rebate_detail_view  where card_id=?1 ", nativeQuery = true)
    List<JSONObject> findByCardIdDetail(Integer id);
    //持有人Id
    @Query(value = "select * from rebate_detail_view  where client_id=?1 ", nativeQuery = true)
    List<JSONObject> findByClientIdDetail(Integer id);
    //持有人name
    @Query(value = "select * from rebate_detail_view  where client_name like CONCAT('%',?1,'%') ", nativeQuery = true)
    List<JSONObject> findByClientNameDetail(String name);
    //推荐人卡号
    @Query(value = "select * from rebate_detail_view  where card_referrer=?1 ", nativeQuery = true)
    List<JSONObject> findByReferrerIdDetail(Integer id);

    //日期范围
    @Query(value = "select * from rebate_detail_view  where rebate_date between ?1 and ?2 ", nativeQuery = true)
    List<JSONObject> findByDataBetweenDetail(String startTime,String endTime);
}
