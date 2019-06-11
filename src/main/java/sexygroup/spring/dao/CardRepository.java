package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import io.swagger.models.auth.In;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Card;

import java.util.List;

@Repository
public interface CardRepository extends BaseRepository<Card, Integer> {

    //查询所有(包含卡和客户信息)
    @Query(value = "select * from card_client_view order by card_id,client_id", nativeQuery = true)
    List<JSONObject> findAllDetail();

    //查询所有持有人卡信息(包含卡和持卡人信息)
    @Query(value = "select * from card_client_view where client_is_holder=1 order by card_id ", nativeQuery = true)
    List<JSONObject> findAllHolder();

    //通过卡id查卡下所有客户信息(包含卡和客户信息)
    @Query(value = "select * from card_client_view where card_id=?1 ", nativeQuery = true)
    List<JSONObject> findByCardId(Integer id);

    //通过卡id查询持有人信息(包含卡和持卡人信息)
    @Query(value = "select * from card_client_view where card_id=?1 and client_is_holder=1", nativeQuery = true)
    JSONObject findHolderByCardId(Integer id);
    //通过卡id查询推荐人信息(包含卡和客户信息)
    @Query(value = "select * from card_client_view where card_id=(select card.card_referrer from card where card.card_id=?1) and client_is_holder=1", nativeQuery = true)
    JSONObject findReferrerByCardId(Integer id);

    //查询某个推荐人推荐的所有卡信息(包含卡和客户信息)
    @Query(value = "select * from card_client_view where card_referrer=?1 and client_is_holder=1 order by card_id ", nativeQuery = true)
    List<JSONObject> findByReferrer(Integer referrer);

    //通过持卡人名称查卡信息（模糊查询）(包含卡和持卡人信息)
    @Query(value = "select * from card_client_view where client_name like CONCAT('%',?1,'%') and client_is_holder=1 order by card_id ", nativeQuery = true)
    List<JSONObject> findByHolderName(String name);
    //通过持卡人手机号查询(包含卡和持卡人信息)
    @Query(value = "select * from card_client_view where client_phone=?1 and client_is_holder=1 order by card_id ", nativeQuery = true)
    List<JSONObject> findByHolderPhone(String phone);

    //通过客户id查卡信息(包含卡和客户信息)
    @Query(value = "select * from card_client_view where client_id=?1", nativeQuery = true)
    JSONObject findByClientId(Integer id);
    //通过客户名称查客户的卡信息(包含卡和客户信息)
    @Query(value = "select * from card_client_view where client_name like CONCAT('%',?1,'%') order by client_id ", nativeQuery = true)
    List<JSONObject> findByClientName(String name);
    //通过客户手机号查客户的卡信息(包含卡和客户信息)
    @Query(value = "select * from card_client_view where client_phone=?1 order by client_id ", nativeQuery = true)
    List<JSONObject> findByClientPhone(String phone);
    //通过客户性别查
    @Query(value = "select * from card_client_view where client_gender=?1 order by client_id ", nativeQuery = true)
    List<JSONObject> findByClientGender(String gender);
    //通过客户年龄段查
    @Query(value = "select * from card_client_view where client_age=?1 order by client_id ", nativeQuery = true)
    List<JSONObject> findByClientAge(String age);

    //通过卡余额范围查询(只查持有人和卡信息)
    @Query(value = "select * from card_client_view  where client_is_holder=1 and card_money between ?1 and ?2 order by card_id ", nativeQuery = true)
    List<JSONObject> findByMoneyBetween(double min, double max);
    //通过卡积分范围查询(只查持有人和卡信息)
    @Query(value = "select * from card_client_view  where client_is_holder=1 and card_point between ?1 and ?2 order by card_id ", nativeQuery = true)
    List<JSONObject> findByPointBetween(double min, double max);

    //通过卡id查卡下所有客户的信息(包含客户和图片信息)
    @Query(value = "select * from client_image_view where card_id=?1 order by client_id,image_id desc ", nativeQuery = true)
    List<JSONObject> findClientByCardId(Integer id);
}
