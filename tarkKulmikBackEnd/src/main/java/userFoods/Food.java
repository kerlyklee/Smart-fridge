package app.userFoods;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

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