package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Client;

import java.util.List;

@Repository
public interface ClientRepository extends BaseRepository<Client, Integer> {

    //查询所有（包含客户和图片信息）
    @Query(value = "select * from client_image_view order by client_id,image_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    //通过图片id查(包含客户和图片信息)
    @Query(value = "select * from client_image_view where client_id=?1 ", nativeQuery = true)
    JSONObject findByImageId(Integer id);
    //通过图片上传时间段查(包含客户和图片信息)
    @Query(value = "select * from client_image_view where image_date between ?1 and ?2 order by client_id,image_id desc ", nativeQuery = true)
    List<JSONObject> findByImageDateBetween(String startTime, String endTime);

    //通过客户id查所有图片信息(包含客户和图片信息)
    @Query(value = "select * from client_image_view where client_id=?1 order by image_id desc ", nativeQuery = true)
    List<JSONObject> findByClientId(Integer id);
    //通过客户名称查所有图片信息（模糊查询）(包含客户和图片信息)
    @Query(value = "select * from client_image_view where client_name like CONCAT('%',?1,'%') order by client_id,image_id desc ", nativeQuery = true)
    List<JSONObject> findByClientName(String name);
    //通过客户手机号查(包含客户和图片信息)
    @Query(value = "select * from client_image_view where client_phone=?1 order by client_id,image_id desc ", nativeQuery = true)
    List<JSONObject> findByClientPhone(String phone);

}
