package userFoods;

import javax.persistence.Entity;
@Entity
@Getter
@Setter
public class Food {
	@Id
	@GeneratedValue
	long id;
	String foodName;
	int foodNum;
	Date foodDate; 
	String foodType;
}