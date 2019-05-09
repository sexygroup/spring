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
}
