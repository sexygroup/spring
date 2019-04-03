package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Recharge;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, Integer>, JpaSpecificationExecutor<Recharge> {
}
