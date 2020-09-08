/**
 * Context that manages state for the DeviceSelect
 * component.
 */
import React, { createContext, useState } from 'react';
import { DeviceInfo, useDevices } from '../../hooks/portAudioHooks';

type ContextType = {
  devices: DeviceInfo[];
  currentDevice: DeviceInfo | null;
  setCurrentDevice: (device: DeviceInfo | null) => void;
};

const initialState: ContextType = {
  devices: [],
  currentDevice: null,
  setCurrentDevice() {
    console.log("setCurrentDevice() hasn't been initialized yet");
  },
};

export const DeviceSelectContext = createContext<ContextType>(initialState);

export const DeviceSelectProvider: React.FC = ({ children }) => {
  const devices = useDevices();
  const [currentDevice, setCurrentDevice] = useState<DeviceInfo | null>(null);

  const value = {
    devices,
    currentDevice,
    setCurrentDevice,
  };

  return (
    <DeviceSelectContext.Provider value={value}>
      {children}
    </DeviceSelectContext.Provider>
  );
};
