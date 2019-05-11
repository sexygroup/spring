package sexygroup.spring.dao;

import com.alibaba.fastjson.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Client;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer>, JpaSpecificationExecutor<Client> {
    @Query(value = "select * from card_client_view order by client_id asc ,card_id asc ", nativeQuery = true)
    List<JSONObject> findAllDetail();

    @Query(value = "select * from card_client_view  where client_id=?1 order by card_id asc", nativeQuery = true)
    List<JSONObject> findByIdDetail(Integer id);

    boolean existsByClientPhone(String phone);

    @Query(value = "select * from card_client_view  where client_name like CONCAT('%',?1,'%') ", nativeQuery = true)
    List<JSONObject> findByClientNameDetail(String name);

    @Query(value = "select * from card_client_view  where client_phone=?1 ", nativeQuery = true)
    List<JSONObject> findByClientPhoneDetail(String phone);

}
