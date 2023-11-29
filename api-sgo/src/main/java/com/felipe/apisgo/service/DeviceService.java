package com.felipe.apisgo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ResponseBody;

import com.felipe.apisgo.dto.DeviceDTO;
import com.felipe.apisgo.dto.mapper.DeviceMapper;
import com.felipe.apisgo.exception.RecordNotFoundException;
import com.felipe.apisgo.repository.DeviceRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class DeviceService {
    private final DeviceRepository deviceRepository;
    private final DeviceMapper deviceMapper;

    public DeviceService(DeviceRepository deviceRepository, DeviceMapper deviceMapper) {
        this.deviceRepository = deviceRepository;
        this.deviceMapper = deviceMapper;
    }

    public @ResponseBody List<DeviceDTO> list() {

        return deviceRepository.findAll().stream().map(deviceMapper::toDTO).collect(Collectors.toList());
    }

    public DeviceDTO findById(@NotNull @Positive Long id) {

        return deviceRepository.findById(id).map(deviceMapper::toDTO)
                .orElseThrow(() -> new RecordNotFoundException(id));
    }

    public DeviceDTO create(@Valid @NotNull DeviceDTO device) {
        return deviceMapper.toDTO(deviceRepository.save(deviceMapper.toEntity(device)));
    }

    public DeviceDTO update(@NotNull @Positive Long id, @Valid @NotNull DeviceDTO device) {
        return deviceRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setName(device.name());
                    recordFound.setSector(this.deviceMapper.convertSectorValue(device.sector()));
                    return deviceMapper.toDTO(deviceRepository.save(recordFound));
                }).orElseThrow(() -> new RecordNotFoundException(id));

    }

    public void delete(@NotNull @Positive Long id) {
        deviceRepository.delete(deviceRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(id)));

    }
}
