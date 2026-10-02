package ca.sheridancollege.shshrush.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.shshrush.beans.Florist;

@Repository
public interface FloristRepository extends JpaRepository<Florist, Long> {

}
