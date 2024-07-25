package com.example.car_backend.model.bookRide;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class BookRide {
       @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String phone;
    String email;
    String leavingFrom;
    String goingTo;
    int availableSeats;
    double price;
    String carName;
    String carNumber;
    String date; 
    String startTime; 
    String endTime; 
}
