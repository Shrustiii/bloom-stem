package ca.sheridancollege.shshrush.services;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.sheridancollege.shshrush.beans.Flower;

@Service
public interface FlowerService {
	
	public List<Flower> findAll();
	public Flower findById(Long id);
	public Flower save(Flower flower);
	public void deleteById(Long id);

}
