function sumSeconds(time: string): number {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds;
}

function secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const time = [hours, minutes, remainingSeconds].map(value => value.toString().padStart(2, '0')).join(':');
  return time;
}


export function convertTo25HourFormat(timeString: string) {
  const hoursInput = document.getElementById('hours') as HTMLInputElement || 24;
  const hoursValue = hoursInput.value;
  return secondsToTime(Math.floor(sumSeconds(timeString)/24*parseFloat(hoursValue)));
}


