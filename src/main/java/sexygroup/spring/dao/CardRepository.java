package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, Integer>, JpaSpecificationExecutor<Card> {
}
