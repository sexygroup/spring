package sexygroup.spring.pojo;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Recharge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rechargeId;
    private Integer cardId;
    private Double rechargePrice;
    private Double rechargeMoney;

    @CreatedDate
    private Timestamp rechargeDate;
}
