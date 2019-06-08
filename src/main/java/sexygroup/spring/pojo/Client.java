package sexygroup.spring.pojo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clientId;
    private Integer cardId;
    private Integer clientIsHolder;
    private String clientName;
    private String clientGender;
    private String clientAge;
    private String clientPhone;
}
