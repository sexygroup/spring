package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Recharge;

import java.util.List;

@Repository
public interface RechargeRepository extends BaseRepository<Recharge, Integer> {

    //查询所有（包含卡信息和充值信息）
    @Query(value = "select * from all_card_recharge_view order by recharge_id desc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    //通过充值id查询（包含卡信息和充值信息）
    @Query(value = "select * from all_card_recharge_view where recharge_id=?1", nativeQuery = true)
    JSONObject findByRechargeId(Integer id);

    //通过卡id查询（包含卡信息和充值信息）
    @Query(value = "select * from all_card_recharge_view where card_id=?1 order by recharge_id desc ", nativeQuery = true)
    List<JSONObject> findByCardId(Integer id);

    //通过充值日期范围查询（日期格式：2019-01-01 00:00:00）（包含卡信息和充值信息）
    @Query(value = "select * from all_card_recharge_view  where recharge_date between ?1 and ?2 order by recharge_id desc ", nativeQuery = true)
    List<JSONObject> findByDateBetween(String startTime, String endTime);

    //通过充值金额金额范围查询（包含卡信息和充值信息）
    @Query(value = "select * from all_card_recharge_view  where recharge_price between ?1 and ?2 order by recharge_id desc ", nativeQuery = true)
    List<JSONObject> findByPriceBetween(double min, double max);
}
