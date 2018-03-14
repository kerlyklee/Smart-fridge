package userFoods;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface FoodRepository extends CrudRepository<Food, Long> {

}
