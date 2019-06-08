package sexygroup.spring.dao;

import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Staff;

@Repository
public interface StaffRepository extends BaseRepository<Staff, Integer> {

}
