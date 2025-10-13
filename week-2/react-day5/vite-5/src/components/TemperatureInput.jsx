import React from "react";

export default function TemperatureInput({ temperature, onTemperatureChange, scale}) {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }

    return (
        <fieldset>
            <legend>Masukkan temperatur suhu {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={(e) => onTemperatureChange(e.target.value, scale)} />
        </fieldset>
    );
}