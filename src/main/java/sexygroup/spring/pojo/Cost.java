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
public class Cost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer costId;
    private Integer cardId;
    private Integer clientId;
    private Integer serviceId;
    private double costPrice;
    private double costMoney;

    @CreatedDate
    @LastModifiedDate
    private Timestamp costData;
}
