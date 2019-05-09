package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Recharge;

import java.util.List;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, Integer>, JpaSpecificationExecutor<Recharge> {
    @Query(value = "select * from recharge_detail_view order by recharge_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    @Query(value = "select * from recharge_detail_view  where recharge_id=?1 ", nativeQuery = true)
    JSONObject findByIdDetail(Integer id);
}
