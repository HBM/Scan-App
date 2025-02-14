import dgram, { type Socket } from 'dgram'
const socket = dgram.createSocket({ type: 'udp4', reuseAddr: true })
socket.bind(31416, '239.255.77.76')

setInterval(() => {
  const message = {
    jsonrpc: '2.0',
    method: 'announce',
    params: {
      apiVersion: '1.0',
      device: {
        familyType: 'QuantumX',
        firmwareVersion: '4.46.18.0',
        name: 'MX1601B_Advantage',
        type: 'MX1601',
        uuid: '0009E50046CC'
      },
      expiration: 15,
      netSettings: {
        interface: {
          configurationMethod: 'manual',
          description: 'ethernet backplane side',
          ipv4: [
            { address: '172.19.106.101', netmask: '255.255.0.0' },
            { address: '169.254.141.62', netmask: '255.255.0.0' }
          ],
          ipv6: [{ address: 'fe80::209:e5ff:fe00:46cc', prefix: 64 }],
          name: 'eth0',
          type: 'ethernet'
        }
      },
      services: [
        { port: 7411, type: 'daqStream' },
        { port: 5001, type: 'hbmProtocol' },
        { port: 80, type: 'http' },
        { port: 11122, type: 'jetd' },
        { port: 22, type: 'ssh' }
      ]
    }
  }

  console.log('sending')
  socket.send(JSON.stringify(message), 31416, '239.255.77.76')
}, 2000)
