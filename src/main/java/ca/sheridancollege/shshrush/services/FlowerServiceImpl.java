package ca.sheridancollege.shshrush.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ca.sheridancollege.shshrush.beans.Flower;
import ca.sheridancollege.shshrush.repositories.FlowerRepository;
import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class FlowerServiceImpl implements FlowerService {
	
	private FlowerRepository flowerRepo;

	@Override
	public List<Flower> findAll() {
		return flowerRepo.findAll();
	}

	@Override
	public Flower findById(Long id) {
		Optional<Flower> flower = flowerRepo.findById(id);
		if(flower.isPresent())
			return flower.get();
		else 
			return null;
	}

	@Override
	public Flower save(Flower flower) {
		return flowerRepo.save(flower);
	}

	@Override
	public void deleteById(Long id) {
		flowerRepo.deleteById(id);

	}

}
