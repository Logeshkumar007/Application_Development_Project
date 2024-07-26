package com.example.car_backend.controller.bookRide;

import org.springframework.web.bind.annotation.RestController;

import com.example.car_backend.model.bookRide.BookRide;
import com.example.car_backend.repository.bookRide.BookRideRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;;

/**
 * BookRideController
 */
@RestController
public class BookRideController {
    @Autowired
    BookRideRepo repo;

    @GetMapping("/app/bookride/getallrides")
    public List<BookRide> getMethodName() {
        return repo.findAll();
    }

    @PostMapping("/app/createride")
    public BookRide createAnRide(@RequestBody BookRide bookRide) {
        return repo.save(bookRide);
    }

}