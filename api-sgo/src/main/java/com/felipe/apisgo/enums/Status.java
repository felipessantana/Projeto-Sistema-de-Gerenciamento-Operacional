package com.felipe.apisgo.enums;

public enum Status {
    ACTIVE("Active"), INACTIVE("Inactive");

    private String value;

    public String getValue() {
        return value;
    }

    private Status(String value) {
        this.value = value;
    }

    @Override
    public String toString() {

        return value;
    }

}
