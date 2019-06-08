package sexygroup.spring.dao;

import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Service;

@Repository
public interface ServiceRepository extends BaseRepository<Service, Integer> {

}
