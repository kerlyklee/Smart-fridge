package userFoods;

import org.springframework.stereotype.Service;
@Service
public class FoodServise {
	
	private FoodRepository foodRepository;
	
	public FoodService(FoodRepository foodRepository) {
		this.foodRepository = foodRepository;
	}
	public Food addUser(Food food) {
		return foodRepository.save(food);
	}
}
