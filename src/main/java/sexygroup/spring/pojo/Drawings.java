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
public class Drawings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer drawingsId;
    private Integer cardId;
    private double drawingsPrice;
    private double drawingsMoney;

    @CreatedDate
    @LastModifiedDate
    private Timestamp drawingsDate;
}
