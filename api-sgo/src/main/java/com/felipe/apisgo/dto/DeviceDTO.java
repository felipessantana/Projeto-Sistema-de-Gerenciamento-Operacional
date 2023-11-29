package com.felipe.apisgo.dto;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DeviceDTO(
                @JsonProperty("_id") Long id,
                @NotBlank @NotNull @Length(min = 4, max = 10) String name,
                @NotNull String sector) {

}
