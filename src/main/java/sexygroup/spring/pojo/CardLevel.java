package sexygroup.spring.pojo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class CardLevel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cardLevelId;
    private Double cardLevelPrice;
}
