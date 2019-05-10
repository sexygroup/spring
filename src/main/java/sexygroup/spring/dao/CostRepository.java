package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Cost;

import java.util.List;

@Repository
public interface CostRepository extends JpaRepository<Cost, Integer>, JpaSpecificationExecutor<Cost> {
    @Query(value = "select * from cost_detail_view order by cost_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();
    //costId
    @Query(value = "select * from cost_detail_view  where cost_id=?1 ", nativeQuery = true)
    JSONObject findByIdDetail(Integer id);

    //cardId
    @Query(value = "select * from cost_detail_view  where card_id=?1 ", nativeQuery = true)
    List<JSONObject> findByCardIdDetail(Integer id);
    //客户Id
    @Query(value = "select * from cost_detail_view  where client_id=?1 ", nativeQuery = true)
    List<JSONObject> findByClientIdDetail(Integer id);
    //客户name
    @Query(value = "select * from cost_detail_view  where client_name like CONCAT('%',?1,'%')  ", nativeQuery = true)
    List<JSONObject> findByClientNameDetail(String name);
    //服务Id
    @Query(value = "select * from cost_detail_view  where service_id=?1 ", nativeQuery = true)
    List<JSONObject> findByServiceIdDetail(Integer id);
    //服务name
    @Query(value = "select * from cost_detail_view  where service_name like CONCAT('%',?1,'%') ", nativeQuery = true)
    List<JSONObject> findByServiceNameDetail(String name);
    //日期范围
    @Query(value = "select * from cost_detail_view  where cost_date between ?1 and ?2 ", nativeQuery = true)
    List<JSONObject> findByDateBetweenDetail(String startTime,String endTime);

}
