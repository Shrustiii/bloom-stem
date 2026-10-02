package ca.sheridancollege.shshrush.bootstrap;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import ca.sheridancollege.shshrush.beans.Florist;
import ca.sheridancollege.shshrush.beans.Flower;
import ca.sheridancollege.shshrush.services.FloristService;
import ca.sheridancollege.shshrush.services.FlowerService;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class bootstrapData implements CommandLineRunner { 
	
	 private FloristService floristService;
	 private FlowerService flowerService;

	@Override
	public void run(String... args) throws Exception {
		
		 if (floristService.findAll().size() > 0) return;
		
		floristService.save(Florist.builder().name("Emma").build());
		floristService.save(Florist.builder().name("Liam").build());
		floristService.save(Florist.builder().name("Sophia").build());
		
		 if (flowerService.findAll().size() > 0) return;

		flowerService.save(Flower.builder().name("Roses").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Tulips").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Lavender").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Orchids").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Sunflower").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Daisies").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Asters").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Lilies").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Daffodils").price(12.5).quantity(30).floristName("Emma").build());
		flowerService.save(Flower.builder().name("Peonies").price(12.5).quantity(30).floristName("Emma").build());
	}

}
