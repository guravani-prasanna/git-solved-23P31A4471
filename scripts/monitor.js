/**
 * System Monitoring Script
 * Supports both production and development modes
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000, // 1 minute
    alertThreshold: 80,
    metricsEndpoint: 'http://localhost:8080/metrics',
    debugMode: false
  },
  development: {
    interval: 5000, // 5 seconds
    alertThreshold: 90,
    metricsEndpoint: 'http://localhost:3000/metrics',
    debugMode: true,
    verboseLogging: true
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log(`DevOps Simulator - Monitor ${ENV === 'production' ? 'v1.0' : 'v2.0-beta'}`);
console.log(`Environment: ${ENV}`);
if (config.debugMode) {
  console.log('Development Mode: ENABLED');
  console.log('Debug features enabled');
}
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Simulated metrics
  const cpuUsage = Math.random() * 100;
  const memUsage = Math.random() * 100;
  const diskUsage = Math.random() * 100;

  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  console.log(`✓ Disk space: ${diskUsage.toFixed(2)}% used`);

  if (config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    console.log('✓ Source maps: Enabled');
  }

  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (max