package com.felipe.apisgo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.felipe.apisgo.enums.Sector;
import com.felipe.apisgo.model.Device;
import com.felipe.apisgo.repository.DeviceRepository;

@SpringBootApplication
public class ApiSgoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiSgoApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(DeviceRepository deviceRepository) {
		return args -> {
			deviceRepository.deleteAll();
			Device d = new Device();
			d.setName("C001");
			d.setSector(Sector.SUL);
			deviceRepository.save(d);
		};
	}
}
