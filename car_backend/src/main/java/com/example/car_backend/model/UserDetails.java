package com.example.car_backend.model;

import java.sql.Blob;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class UserDetails {

    private String firstName;
    private String lastName;

    @Id
    private String email;
    private String password;
    private String phoneNumber;
    private String department;
    private String yearOfStudy;
    private String licenceId;
    private String registerNumber;
    private int verificationCode;
    private boolean isVerified;
    @Lob
    private Blob idCard;

    // Constructors, getters, and setters
    public UserDetails() {
    }

    public UserDetails(String firstName, String lastName, String email, String password, String phoneNumber,
            String department, String licenceId, String registerNumber, int verificationCode, Blob idCard) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.department = department;
        this.licenceId = licenceId;
        this.registerNumber = registerNumber;
        this.verificationCode = verificationCode;
        this.idCard = idCard;
        this.isVerified = false;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getLicenceId() {
        return licenceId;
    }

    public void setLicenceId(String licenceId) {
        this.licenceId = licenceId;
    }

    public String getRegisterNumber() {
        return registerNumber;
    }

    public void setRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
    }

    public int getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(int verificationCode) {
        this.verificationCode = verificationCode;
    }

    public String getYearOfStudy() {
        return yearOfStudy;
    }

    public void setYearOfStudy(String yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public Blob getIdCard() {
        return idCard;
    }

    public void setIdCard(Blob idCard) {
        this.idCard = idCard;
    }

    public boolean isVerified() {
        return isVerified;
    }

    public void setVerified(boolean isVerified) {
        this.isVerified = isVerified;
    }

    
}
