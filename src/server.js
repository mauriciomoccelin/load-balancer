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
    return this.port > 0
      ? `http://${this.ipHostNameOrDns}:${this.port}`
      : `http://${this.ipHostNameOrDns}`;
  }

  getHttpsAddress () {
    this.call()
    return this.port > 0
      ? `https://${this.ipHostNameOrDns}:${this.port}`
      : `https://${this.ipHostNameOrDns}`;
  }
}

module.exports = Server;