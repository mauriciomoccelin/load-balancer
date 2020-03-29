const assert = require('assert');
const Server = require('../src/server');
const Balancer = require('../src/balancer');

var balancer = Balancer.getInstance();
var balancer1 = Balancer.getInstance();
var balancer2 = Balancer.getInstance();

var localServer = new Server('192.168.1.2', 80, 'LOCAL');
var remoteServer = new Server('192.168.1.3', 80, 'REMOTE');

balancer.setServers([localServer, remoteServer])

for (let index = 0; index < 15; index++) {
  const element = localServer.get();
}

for (let index = 0; index < 15; index++) {
  const element = balancer.next();
}

assert(balancer1 === balancer2 && balancer2 === balancer, 'The instances are not the same.')
assert(localServer.calls === 23, 'The local server must have 23 requests.')
assert(remoteServer.calls === 7, 'The remote server must have 7 requests.')

console.log('Tests performed successfully!')