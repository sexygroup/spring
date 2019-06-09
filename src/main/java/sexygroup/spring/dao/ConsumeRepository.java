package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Consume;

import java.util.List;

@Repository
public interface ConsumeRepository extends BaseRepository<Consume, Integer> {

    //查询所有
    @Query(value = "select * from all_consume_detail_view order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    //通过消费id查
    @Query(value = "select * from all_consume_detail_view where consume_id=?1 ", nativeQuery = true)
    JSONObject findByConsumeId(Integer id);
    //通过消费日期范围查询（日期格式：2019-01-01 00:00:00）
    @Query(value = "select * from all_consume_detail_view  where consume_date between ?1 and ?2 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByDateBetween(String startTime, String endTime);

    //通过员工id查
    @Query(value = "select * from all_consume_detail_view where staff_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByStaffId(Integer id);
    //通过员工名称查（模糊查询）
    @Query(value = "select * from all_consume_detail_view where staff_name like CONCAT('%',?1,'%') order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByStaffName(String name);

    //通过卡id查
    @Query(value = "select * from all_consume_detail_view where card_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByCardId(Integer id);
    //通过卡推荐人id查
    @Query(value = "select * from all_consume_detail_view where card_referrer=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByCardReferrer(Integer id);

    //通过客户id查
    @Query(value = "select * from all_consume_detail_view where client_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientId(Integer id);
    //通过客户名称查（模糊查询）
    @Query(value = "select * from all_consume_detail_view where client_name like CONCAT('%',?1,'%') order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientName(String name);
    //通过客户手机号查
    @Query(value = "select * from all_consume_detail_view where client_phone=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientPhone(String phone);
    //通过客户性别查
    @Query(value = "select * from all_consume_detail_view where client_gender=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientGender(String gender);
    //通过客户年龄段查
    @Query(value = "select * from all_consume_detail_view where client_age=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientAge(String age);

    //通过服务id查
    @Query(value = "select * from all_consume_detail_view where service_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByServiceId(Integer id);
    //通过服务名称查(模糊查询)
    @Query(value = "select * from all_consume_detail_view where service_name like CONCAT('%',?1,'%') order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByServiceName(String name);

}
