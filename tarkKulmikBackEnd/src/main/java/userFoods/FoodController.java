package userFoods;
import org.springframework.web.bind.annotaion.RequestBody;
@RestController
public class FoodController {
	@Autowired
	private FoodService foodService;
	
	@RequestMapping(value="/foods/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Food addFood(@RequestBody Food food) {
		return foodService.addFood(food);
	}
}
