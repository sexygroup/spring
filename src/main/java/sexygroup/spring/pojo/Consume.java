package sexygroup.spring.pojo;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Consume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer consumeId;
    private Integer staffId;
    private Integer cardId;
    private Integer clientId;
    private Integer serviceId;

    private double consumePrice;
    private double consumeDeduct;
    private double consumeMoney;
    private double consumePoint;
    private double consumeRebatePrice;
    private double consumeRebatePoint;

    @CreatedDate
    private Timestamp consumeDate;
}
