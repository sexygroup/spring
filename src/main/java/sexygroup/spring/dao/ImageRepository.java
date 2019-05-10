package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Image;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Integer>, JpaSpecificationExecutor<Image> {
    @Query(value = "select * from card_client_image_view order by image_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    @Query(value = "select * from card_client_image_view  where image_id=?1 ", nativeQuery = true)
    List<JSONObject> findByIdDetail(Integer id);
}
