package ca.sheridancollege.shshrush.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.shshrush.beans.Flower;
import ca.sheridancollege.shshrush.services.FlowerService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/flowers")
public class FlowerController {

	private FlowerService flowerService;
	
	//Get – For all items 
	@GetMapping(value={"", "/"})
	public List<Flower> getAllFlowers(){
		return flowerService.findAll();
	}
	
	//Get – For a single items by id  
	@GetMapping("/{id}")
	public Flower getFlowerById(@PathVariable Long id) {
		return flowerService.findById(id);
	}
	
	//Post – A new items 
	@PostMapping(value= {"/", ""}, consumes="application/json")
	public Flower addNewFlower(@RequestBody Flower flower) {
		return flowerService.save(flower);
	}
	
	//Delete – Delete items by id  
	@DeleteMapping(value={"/{id}"})
	public void deleteFlowerById(@PathVariable Long id)
	{
		flowerService.deleteById(id);
	}
}
