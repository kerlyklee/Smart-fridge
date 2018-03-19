package userFoods;

import org.springframework.stereotype.Service;
@Service
public class FoodService {
	
	private FoodRepository foodRepository;
	
	public FoodService(FoodRepository foodRepository) {
		this.foodRepository = foodRepository;
	}
	public Food addFood(Food food) {
		return foodRepository.save(food);
	}
}
