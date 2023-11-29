package com.felipe.apisgo.dto.mapper;

import org.springframework.stereotype.Component;

import com.felipe.apisgo.dto.DeviceDTO;
import com.felipe.apisgo.enums.Sector;
import com.felipe.apisgo.model.Device;

@Component
public class DeviceMapper {
    public DeviceDTO toDTO(Device device) {
        if (device == null) {
            return null;
        }
        return new DeviceDTO(device.getId(), device.getName(), device.getSector().getValue());
    }

    public Device toEntity(DeviceDTO deviceDTO) {
        if (deviceDTO == null) {
            return null;
        }
        Device device = new Device();
        if (deviceDTO.id() != null) {
            device.setId(deviceDTO.id());

        }
        device.setName(deviceDTO.name());
        device.setSector(convertSectorValue(deviceDTO.sector()));
        return device;
    }

    public Sector convertSectorValue(String value) {
        if (value == null) {
            return null;
        }
        return switch (value) {
            case "Sul" -> Sector.SUL;
            case "Norte" -> Sector.NORTE;
            case "Leste" -> Sector.LESTE;
            case "N2" -> Sector.N2;
            case "Visitante" -> Sector.VISITANTE;
            case "SuperNorte" -> Sector.SUPERNORTE;
            case "Oeste-2" -> Sector.OESTE2;
            default -> throw new IllegalArgumentException("Sector Invalido: " + value);

        };
    }
}
