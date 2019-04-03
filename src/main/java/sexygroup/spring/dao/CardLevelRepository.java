package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.CardLevel;

@Repository
public interface CardLevelRepository extends JpaRepository<CardLevel, Integer>, JpaSpecificationExecutor<CardLevel> {
}
