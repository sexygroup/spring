package sexygroup.spring.pojo;

import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class CardClientKey implements Serializable {
    private Integer cardId;
    private Integer clientId;
}
