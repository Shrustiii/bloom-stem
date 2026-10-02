package ca.sheridancollege.shshrush.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import ca.sheridancollege.shshrush.beans.Florist;
import ca.sheridancollege.shshrush.repositories.FloristRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FloristServiceImpl implements FloristService {
	
	private FloristRepository floristRepo;

	@Override
	public List<Florist> findAll() {
		return floristRepo.findAll();
	}

	@Override
	public Florist findById(Long id) {
		Optional<Florist> florist = floristRepo.findById(id);
		if(florist.isPresent())
			return florist.get();
		else 
			return null;
	}

	@Override
	public Florist save(Florist florist) {
		return floristRepo.save(florist);
	}

}
