package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Drawings;

import java.util.List;

@Repository
public interface DrawingsRepository extends JpaRepository<Drawings, Integer>, JpaSpecificationExecutor<Drawings> {
    @Query(value = "select * from drawings_detail_view order by drawings_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    @Query(value = "select * from drawings_detail_view  where drawings_id=?1 ", nativeQuery = true)
    JSONObject findByIdDetail(Integer id);

    //cardId
    @Query(value = "select * from drawings_detail_view  where card_id=?1 ", nativeQuery = true)
    List<JSONObject> findByCardIdDetail(Integer id);
    //持有人Id
    @Query(value = "select * from drawings_detail_view  where client_id=?1 ", nativeQuery = true)
    List<JSONObject> findByClientIdDetail(Integer id);
    //持有人name
    @Query(value = "select * from drawings_detail_view  where client_name like CONCAT('%',?1,'%') ", nativeQuery = true)
    List<JSONObject> findByClientNameDetail(String name);
    //日期范围
    @Query(value = "select * from drawings_detail_view  where drawings_date between ?1 and ?2 ", nativeQuery = true)
    List<JSONObject> findByDateBetweenDetail(String startTime,String endTime);
}
