/**
 * Hooks for interacting with portAudio
 */
import { ipcRenderer } from 'electron';
import { useStateMemoArray } from './useStateMemoArray';

export type DeviceInfo = {
  id: number;
  name: string;
};

export function useDevices(): DeviceInfo[] {
  const [devices, setDevices] = useStateMemoArray<DeviceInfo, number>(
    [],
    (info) => info.id
  );
  ipcRenderer.invoke('get-devices').then((devices) => {
    setDevices(devices);
  });
  return devices;
}

export function startBroadcast(device: DeviceInfo) {
  ipcRenderer.invoke('start-broadcast', device);
}

export function stopBroadcast() {
  ipcRenderer.invoke('stop-broadcast');
}
