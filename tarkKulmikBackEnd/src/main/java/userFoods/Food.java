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
	String foodDate; 
	String foodType;
}