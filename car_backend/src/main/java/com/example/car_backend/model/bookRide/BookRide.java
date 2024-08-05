package com.example.car_backend.model.bookRide;



import com.example.car_backend.model.userRideHistory.UserRideHistory;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import java.util.*;
@Entity
@Data
public class BookRide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String phone;
    String email;
    String leaving;
    String going;
    int availableSeats;
    double price;
    String carName;
    String carNumber;
    String date; 
    String startTime; 
    String endTime; 
    @JsonBackReference
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "bookRide")
    private List<UserRideHistory> userRideHistory;
}
