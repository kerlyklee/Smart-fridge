package ee.ttu.tarvaratehnika;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TarkKulmikAppApplicationTests {
	 private DBHandler db;

    @Before
    public void setUp(){
        DBHandler db = new DBHandler(InstrumentationRegistry.getTargetContext());
    }

    @After
    public void finish() {
        db.close();
    }

	@Test
    public void foodSaved() throws Exception {
        Food food = new Food();
        food.foodId(1);
        food.foodName("porgand");
        food.foodNum(1);
        trip.setStartDate("14.03.2018");
        food.foodName("muu");        

        db.addFood(food);
        Food savedFood = db.getFood(1);
        assertEquals(food, savedFood);
    }
     @Test
    public void foodDeleted() throws Exception {
        Food food = new Food();
        food.foodId(1);
        food.foodName("porgand");
        food.foodNum(1);
        food.foodDate("14.03.2018");
        food.foodName("muu");
        

        db.addFood(food);
        food = db.getFood(1);
        db.deleteFood(food);
        food = db.getFood(1);
        Assert.assertNull(food);
    }

}

