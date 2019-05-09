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

    @Query(value = "select * from cost_detail_view  where cost_id=?1 ", nativeQuery = true)
    JSONObject findByIdDetail(Integer id);
}
