package com.felipe.apisgo.exception;

public class RecordNotFoundException extends RuntimeException {

    private static final long serialVersionUID = -9581844841L;

    public RecordNotFoundException(Long id) {
        super("Registro não encontrado com o id: " + id);

    }

}
