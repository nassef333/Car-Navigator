import { memo } from 'react';
import VehicleSchematic from '../../components/VehicleSchematic.jsx';

export default memo(function VehicleView({ car }) {
  const tires = car.tirePressure;
  return (
    <div className="au-vehicle-view au-main-enter">
      <div className="au-card au-veh-cluster">
        <span className="au-card-label">Diagnostics</span>
        <div className="au-veh-grid">
          <div className="au-card au-veh-stat"><span>RPM</span><strong>{Math.round(car.rpm)}</strong></div>
          <div className="au-card au-veh-stat"><span>COOLANT</span><strong>{car.coolant.toFixed(0)}°</strong></div>
          <div className="au-card au-veh-stat"><span>FUEL</span><strong>{car.fuel.toFixed(0)}%</strong></div>
          <div className="au-card au-veh-stat"><span>BATTERY</span><strong>{car.battery}%</strong></div>
          <div className="au-card au-veh-stat"><span>FL</span><strong>{tires.fl}</strong></div>
          <div className="au-card au-veh-stat"><span>FR</span><strong>{tires.fr}</strong></div>
          <div className="au-card au-veh-stat"><span>RL</span><strong>{tires.rl}</strong></div>
          <div className="au-card au-veh-stat"><span>RR</span><strong>{tires.rr}</strong></div>
        </div>
      </div>
      <div className="au-card au-veh-schematic">
        <VehicleSchematic data={car} accent="var(--au-accent)" />
      </div>
    </div>
  );
});
