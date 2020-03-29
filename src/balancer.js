class Balancer extends Object {
  
  static instance = new Balancer();

  constructor (current, servers) {
    super(current, servers)
    this.current = current || -1;
    this.servers = servers || [];
  }

  static getInstance () {  
    if (typeof this.instance === 'object') {
      return this.instance;
    }
    return this.instance;
  }

  setServers (servers) {
    this.servers = servers;
  }

  next () {
    if (this.current >= this.servers.length - 1) {
      this.current = -1;
    }
    this.current = this.current + 1;
    return this.servers[this.current].get();
  }
}

module.exports = Balancer;