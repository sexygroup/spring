package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Drawings;

@Repository
public interface DrawingsRepository extends JpaRepository<Drawings, Integer>, JpaSpecificationExecutor<Drawings> {
}
