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

    private Double consumePrice;
    private Double consumeDeduct;
    private Double consumeMoney;
    private Double consumePoint;
    private Double consumeRebatePrice;
    private Double consumeRebatePoint;

    @CreatedDate
    private Timestamp consumeDate;
}
