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
}
