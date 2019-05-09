package sexygroup.spring.pojo;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class CardClient {
    @EmbeddedId
    private CardClientKey cardClientKey;
    private String isHolder;
}
