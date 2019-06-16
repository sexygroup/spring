package sexygroup.spring.pojo;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Cost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer costId;

    private Double costMoney;

    //@CreatedDate
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date costDate;
}