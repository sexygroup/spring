package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Rebate;

@Repository
public interface RebateRepository extends JpaRepository<Rebate, Integer>, JpaSpecificationExecutor<Rebate> {
}
