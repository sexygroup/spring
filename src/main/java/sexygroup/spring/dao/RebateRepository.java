package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Consume;

import java.util.List;

@Repository
public interface RebateRepository extends BaseRepository<Consume, Integer> {

    //查询所有
    @Query(value = "select * from all_rebate_detail_view order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    //通过消费id(即返利id)查
    @Query(value = "select * from all_rebate_detail_view where consume_id=?1 ", nativeQuery = true)
    JSONObject findByConsumeId(Integer id);

    //通过消费日期范围查询（日期格式：2019-01-01 00:00:00）
    @Query(value = "select * from all_rebate_detail_view  where consume_date between ?1 and ?2 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByDateBetween(String startTime, String endTime);

    //通过员工id查
    @Query(value = "select * from all_rebate_detail_view where staff_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByStaffId(Integer id);

    //通过员工名称查（模糊查询）
    @Query(value = "select * from all_rebate_detail_view where staff_name like CONCAT('%',?1,'%') order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByStaffName(String name);

    //通过卡id查,查出这个卡给他的推荐人返利的记录
    @Query(value = "select * from all_rebate_detail_view where card_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByCardId(Integer id);

    //通过推荐人卡id查，查该推荐人收到的返利的记录
    @Query(value = "select * from all_rebate_detail_view where referrer_card_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByReferrerCardId(Integer id);

    //通过客户id查，查出这个客户的卡给它的推荐人返利的记录
    @Query(value = "select * from all_rebate_detail_view where client_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientId(Integer id);

    //通过客户名称查（模糊查询），查出这个客户的卡给它的推荐人返利的记录
    @Query(value = "select * from all_rebate_detail_view where client_name like CONCAT('%',?1,'%') order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientName(String name);

    //通过客户手机号查
    @Query(value = "select * from all_rebate_detail_view where client_phone=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByClientPhone(String phone);

    //通过推荐人id查，查该推荐人收到的返利的记录(推荐人clientId即开卡客户id)
    @Query(value = "select * from all_rebate_detail_view where referrer_client_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByReferrerClientId(Integer id);

    //通过推荐人名称查（模糊查询），查该推荐人收到的返利的记录(推荐人clientName即开卡客户name)
    @Query(value = "select * from all_rebate_detail_view where referrer_client_name like CONCAT('%',?1,'%') order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByReferrerClientName(String name);

    //通过推荐人手机号查
    @Query(value = "select * from all_rebate_detail_view where referrer_client_phone=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByReferrerClientPhone(String phone);

    //通过服务id查
    @Query(value = "select * from all_rebate_detail_view where service_id=?1 order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByServiceId(Integer id);

    //通过服务名称查(模糊查询)
    @Query(value = "select * from all_rebate_detail_view where service_name like CONCAT('%',?1,'%') order by consume_id desc ", nativeQuery = true)
    List<JSONObject> findByServiceName(String name);


}
