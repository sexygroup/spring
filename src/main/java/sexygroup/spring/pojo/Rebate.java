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
public class Rebate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rebateId;
    private Integer cardId;
    private double rebatePrice;
    private double rebateMoney;

    @CreatedDate
    @LastModifiedDate
    private Timestamp rebateDate;
}
