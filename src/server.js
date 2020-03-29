class Server extends Object {
  
  constructor (ipHostNameOrDns, port, name, calls = 0) {
    super(ipHostNameOrDns, port, name, calls)
    this.ipHostNameOrDns = ipHostNameOrDns;
    this.port = port;
    this.name = name;
    this.calls = 0;
  }
  
  call () {
    this.calls = this.calls + 1;
  }

  get () {
    this.call()
    return this;
  }

  getHttpAddress () {
    this.call()
    return `http://${this.ipHostNameOrDns}:${this.port}`;
  }

  getHttpsAddress () {
    this.call()
    return `https://${this.ipHostNameOrDns}:${this.port}`;
  }
}

module.exports = Server;