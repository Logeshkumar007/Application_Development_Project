package com.example.car_backend.repository.bookRide;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.car_backend.model.bookRide.BookRide;

/**
 * BookRide
 */
public interface BookRideRepo extends JpaRepository<BookRide,Integer> {

    
}