package ca.sheridancollege.shshrush.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.shshrush.beans.Flower;


@Repository
public interface FlowerRepository extends JpaRepository<Flower, Long> {
	


}
