package sexygroup.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import sexygroup.spring.pojo.Admin;
import sexygroup.spring.pojo.CardClient;
import sexygroup.spring.pojo.CardClientKey;

@Repository
public interface CardClientRepository extends JpaRepository<CardClient, CardClientKey>, JpaSpecificationExecutor<CardClient> {
}
