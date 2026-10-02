package ca.sheridancollege.shshrush.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.shshrush.beans.Florist;
import ca.sheridancollege.shshrush.services.FloristService;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/florists")
public class FloristController {

	private FloristService floristService;
	
	//Get – For all 
	@GetMapping(value={"", "/"})
	public List<Florist> getAllFlorists(){
		return floristService.findAll();
	}
	
	// Get – For a single entity by id
	@GetMapping("/{id}")
	public Florist getFloristById(@PathVariable Long id) {
		return floristService.findById(id);
	}
	
	// Post – New employee
	@PostMapping(value= {"/", ""}, consumes="application/json")
	public Florist addNewFlorist(@RequestBody Florist florist) {
		return floristService.save(florist);
	}
}
