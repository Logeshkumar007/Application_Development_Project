package com.example.car_backend.model.userRideHistory;

import com.example.car_backend.model.UserDetails;
import com.example.car_backend.model.bookRide.BookRide;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.util.*;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@Entity
public class UserRideHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String status;
    @ManyToOne
    @JsonManagedReference
    public UserDetails userDetails;
    @ManyToOne
    @JsonManagedReference
    public BookRide bookRide;

}
