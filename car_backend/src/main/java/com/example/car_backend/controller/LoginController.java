// package com.example.skcet_rapido.controller;
package com.example.car_backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.car_backend.service.LoginService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class LoginController {
    LoginService loginService;

    LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<String> login(@PathVariable String email, @PathVariable String password) {
        if (loginService.checkLoginCredentials(email, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

}
