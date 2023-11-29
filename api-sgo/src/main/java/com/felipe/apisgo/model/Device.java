package com.felipe.apisgo.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.felipe.apisgo.enums.Sector;
import com.felipe.apisgo.enums.Status;
import com.felipe.apisgo.enums.converter.SectorConverter;
import com.felipe.apisgo.enums.converter.StatusConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
@SQLDelete(sql = "UPDATE Device SET status = 'Inactive' WHERE id = ?")
@Where(clause = " status = 'Active'")
public class Device {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @NotBlank
    @NotNull
    @Length(min = 4, max = 10)
    @Column(length = 10, nullable = false)
    private String name;

    @NotNull
    @Column(length = 10, nullable = false)
    @Convert(converter = SectorConverter.class)
    private Sector sector;

    @NotNull
    @Column(length = 10, nullable = false)
    @Convert(converter = StatusConverter.class)
    private Status status = Status.ACTIVE;
}
