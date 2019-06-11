package sexygroup.spring.pojo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer staffId;
    private Integer staffIsAdmin;
    private String staffPassword;
    private String staffName;
    private String staffPhone;
    private String staffQuestion;
    private String staffAnswer;
}