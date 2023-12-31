package com.felipe.apisgo.enums.converter;

import com.felipe.apisgo.enums.Sector;
import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class SectorConverter implements AttributeConverter<Sector, String> {

    @Override
    public String convertToDatabaseColumn(Sector sector) {
        if (sector == null) {
            return null;

        }
        return sector.getValue();
    }

    @Override
    public Sector convertToEntityAttribute(String value) {
        if (value == null) {
            return null;
        }
        return Stream.of(Sector.values())
                .filter(c -> c.getValue().equals(value))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}