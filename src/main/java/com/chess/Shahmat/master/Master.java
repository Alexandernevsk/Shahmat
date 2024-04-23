package com.chess.Shahmat.master;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Master {

    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;
    public Master(String firstName, String lastname) {
        this.firstName = firstName == null ? "Unknown" : firstName;
        this.lastName = lastname;
    }

    @Override
    public String toString() {
        return String.format("%s, %s", firstName, lastName);
    }
}