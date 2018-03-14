package userFoods;
import org.springframework.web.bind.annotaion.RequestBody;
public class FoodController {
	private FoodService foodService;
	
	public FoodController(FoodService foodService) {
		this.foodService = foodService;
	}
	@RequestMapping(value="/foods/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Food addUser(@RequestBody Food food) {
		return foodService.addUser(food);
	}
}
