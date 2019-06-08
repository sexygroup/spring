package sexygroup.spring.dao;

import org.springframework.stereotype.Repository;
import sexygroup.spring.common.dao.BaseRepository;
import sexygroup.spring.pojo.Image;

@Repository
public interface ImageRepository extends BaseRepository<Image, Integer> {

}
