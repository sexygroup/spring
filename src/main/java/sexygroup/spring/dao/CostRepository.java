package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Cost;

@Repository
public interface CostRepository extends JpaRepository<Cost, Integer>, JpaSpecificationExecutor<Cost> {
}
