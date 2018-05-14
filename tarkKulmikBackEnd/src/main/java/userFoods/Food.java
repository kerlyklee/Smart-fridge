package app.userFoods;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Food {
	@Id
	@GeneratedValue
	private long id;
	private String foodName;
	private int foodNum;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date foodDate = new Date();
	private String foodType;
	private String foodUnit;
}