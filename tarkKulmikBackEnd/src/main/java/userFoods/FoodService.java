package app.userFoods;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FoodService {
	
	private FoodRepository foodRepository;
	
	public FoodService(FoodRepository foodRepository) {
		this.foodRepository = foodRepository;
	}
	Food addFood(Food food){
		return foodRepository.save(food);
	}

	List<Food> getAllFoods(){
		return foodRepository.findAll();
	}
	
	Food getFoodById(long foodId) {
		return foodRepository.findOne(foodId);
	}
	
	 void deleteFood(Food food) {foodRepository.delete(food.getId());}
}
