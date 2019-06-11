package sexygroup.spring.pojo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cardId;
    private Integer cardReferrer;
    private String cardPassword;
    private String cardQuestion;
    private String cardAnswer;
    private Double cardMoney;
    private Double cardPoint;

}
