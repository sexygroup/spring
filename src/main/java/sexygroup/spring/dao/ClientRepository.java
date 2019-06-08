package sexygroup.spring.dao;

import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Client;

@Repository
public interface ClientRepository extends BaseRepository<Client, Integer> {

}
