package com.felipe.apisgo.enums;

public enum Sector {

    SUL("Sul"),
    NORTE("Norte"),
    LESTE("Leste"),
    N2("N2"),
    VISITANTE("Visitante"),
    SUPERNORTE("SuperNorte"),
    OESTE2("Oeste-2");

    private String value;

    private Sector(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {

        return value;
    }

}
