import { useState, type ChangeEvent } from 'react';
import { DIVIDED, DIVIDER, OFFSET } from '../config/Temperature.config';

const TemperatureConvertor = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const celsiusCalc = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(+e.target.value);
    const result = +(((+e.target.value * DIVIDER )/DIVIDED + OFFSET).toFixed(2))
    setFahrenheit(result);
  };
  const faCalc = (e: ChangeEvent<HTMLInputElement>) => {
    setFahrenheit(+e.target.value);
    const result = +(((+e.target.value-OFFSET) * DIVIDER)/DIVIDED).toFixed(2)
    setCelsius(result);
  };
  return (
    <div className="flex gap-4 px-5 py-4">
      <input
        type="number"
        value={celsius}
        onChange={(e) => {
          celsiusCalc(e);
        }}
        className="border bg-white"
        placeholder="Celsius"
      />
      <h1>Celsius =</h1>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => {
          faCalc(e);
        }}
        className="border bg-white"
        placeholder="Fahrenheit"
      />
    </div>
  );
};

export default TemperatureConvertor;
