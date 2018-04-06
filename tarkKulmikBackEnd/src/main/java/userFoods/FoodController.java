package app.userFoods;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FoodController {

	private final FoodService foodService;
	
	public FoodController(FoodService foodService) {
		this.foodService = foodService;
	}
	
	@RequestMapping(value="/foods/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Food addFood(@RequestBody Food food) {
		return foodService.addFood(food);
	}
	
	@RequestMapping(value="/foods", method=RequestMethod.GET)
	public List<Food> getAllFoods() {
		return foodService.getAllFoods();
	}
	
	@RequestMapping(value = "/foods/{id}", method=RequestMethod.GET)
	public Food getFood(@PathVariable("id") long foodId) {
		return foodService.getFoodById(foodId);
	}
	
	@RequestMapping(value = "/foods/delete/{id}", method = RequestMethod.DELETE)
	  public void deleteFood(@PathVariable("id") long Id){
	     foodService.deleteFood(foodService.getFoodById(Id));
	}
	
	@RequestMapping(value = "/foods/expired", method = RequestMethod.GET)
	  public List<Food> getAllFoodsExpired() {
	    return foodService.getAllFoodsExpired();
	}
	
	@RequestMapping(value = "/foods/tobeexpired", method = RequestMethod.GET)
	  public List<Food> getAllFoodsToBeExpired() {
	    return foodService.getAllFoodsToBeExpired();
	}
}