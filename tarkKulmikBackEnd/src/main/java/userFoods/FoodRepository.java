package app.userFoods;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends CrudRepository<Food, Long> {
	@Override
	public List<Food> findAll();
	
	@Query(nativeQuery=true, value = "DELETE FROM FOOD WHERE ID = ?1")
	Food deleteFood(long Id);
}

