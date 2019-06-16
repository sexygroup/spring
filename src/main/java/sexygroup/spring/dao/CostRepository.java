package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Cost;

import java.util.List;

@Repository
public interface CostRepository extends BaseRepository<Cost, Integer> {

    //查询某一天的记录（日期格式：2019-01-01）
    @Query(value = "select * from cost  where cost_date=?1 ", nativeQuery = true)
    JSONObject findByDateEquals(String date);

    //通过日期范围查询（日期格式：2019-01-01）
    @Query(value = "select * from cost  where cost_date between ?1 and ?2 order by cost_id desc ", nativeQuery = true)
    List<JSONObject> findByDateBetween(String startTime, String endTime);

    //通过金额范围查询
    @Query(value = "select * from cost  where cost_money between ?1 and ?2 order by cost_id desc ", nativeQuery = true)
    List<JSONObject> findByMoneyBetween(double min, double max);

    //按周统计
    @Query(value = "select * from cost_week_view order by cost_week ", nativeQuery = true)
    List<JSONObject> findAllWeekly();

    @Query(value = "select * from cost_week_view  where cost_week=?1 ", nativeQuery = true)
    JSONObject findByWeek(String week);

    //按月统计
    @Query(value = "select * from cost_month_view order by cost_month ", nativeQuery = true)
    List<JSONObject> findAllMonthly();

    @Query(value = "select * from cost_month_view  where cost_month=?1 ", nativeQuery = true)
    JSONObject findByMonth(String month);
}
