package com.felipe.apisgo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.felipe.apisgo.dto.DeviceDTO;
import com.felipe.apisgo.service.DeviceService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/api/devices")
public class DeviceController {

    private final DeviceService deviceService;

    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    @GetMapping
    public List<DeviceDTO> list() {
        return deviceService.list();
    }

    @GetMapping("/{id}")
    public DeviceDTO findById(@PathVariable @NotNull @Positive Long id) {
        return deviceService.findById(id);
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public DeviceDTO create(@RequestBody @Valid @NotNull DeviceDTO device) {
        return deviceService.create(device);
    }

    @PutMapping("/{id}")
    public DeviceDTO update(@PathVariable @NotNull @Positive Long id, @RequestBody @Valid @NotNull DeviceDTO device) {
        return deviceService.update(id, device);

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable @NotNull @Positive Long id) {
        deviceService.delete(id);

    }

}
