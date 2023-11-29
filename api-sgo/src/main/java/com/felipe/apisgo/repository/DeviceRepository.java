package com.felipe.apisgo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.felipe.apisgo.model.Device;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Long> {

}
