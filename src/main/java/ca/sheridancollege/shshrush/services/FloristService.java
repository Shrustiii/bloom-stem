package ca.sheridancollege.shshrush.services;

import java.util.List;

import org.springframework.stereotype.Service;

import ca.sheridancollege.shshrush.beans.Florist;

@Service
public interface FloristService {

	public List<Florist> findAll();
	public Florist findById(Long id);
	public Florist save(Florist florist);
}
