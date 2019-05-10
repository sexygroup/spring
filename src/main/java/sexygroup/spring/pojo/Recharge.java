package sexygroup.spring.pojo;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
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
    private double rechargePrice;
    private double rechargeMoney;

    @CreatedDate
    @LastModifiedDate
    private Timestamp rechargeDate;
}
