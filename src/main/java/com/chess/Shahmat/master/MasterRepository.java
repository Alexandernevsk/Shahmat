package com.chess.Shahmat.master;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MasterRepository extends JpaRepository<Master, Long> {
    Optional<Master> findByLastName(String lastName);

    Optional<Master> findByFirstName(String firstName);
}