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
    private String cardPassword;
    private double cardMoney;
    private double cardPoint;
    private String cardIsShared;
    private Integer cardReferrer;
    private String cardQuestion;
    private String cardAnswer;
}
