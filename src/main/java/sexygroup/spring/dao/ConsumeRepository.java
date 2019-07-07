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

    //撤销消费
    @Query(value = "select cancel_consume(?1)", nativeQuery = true)
    Integer cancelConsume(Integer consumeId);

    //按天统计
    @Query(value = "select * from consume_day_view order by consume_day desc ", nativeQuery = true)
    List<JSONObject> findAllDaily();

    @Query(value = "select * from consume_day_view  where consume_day=?1 ", nativeQuery = true)
    JSONObject findByDay(String day);

    //按周统计
    @Query(value = "select * from consume_week_view order by consume_week desc ", nativeQuery = true)
    List<JSONObject> findAllWeekly();

    @Query(value = "select * from consume_week_view  where consume_week=?1 ", nativeQuery = true)
    JSONObject findByWeek(String week);

    //按月统计
    @Query(value = "select * from consume_month_view order by consume_month desc ", nativeQuery = true)
    List<JSONObject> findAllMonthly();

    @Query(value = "select * from consume_month_view  where consume_month=?1 ", nativeQuery = true)
    JSONObject findByMonth(String month);

    //所有年龄段
    //按时间段统计
    @Query(value = "select * from consume_age_union_day_view where consume_day between ?1 and ?2 order by consume_day desc ", nativeQuery = true)
    List<JSONObject> findAgeByDayBetween(String startDate, String endDate);

    //按天统计
    @Query(value = "select * from consume_age_union_day_view where consume_day=?1 ", nativeQuery = true)
    JSONObject findAgeByDay(String day);
}
