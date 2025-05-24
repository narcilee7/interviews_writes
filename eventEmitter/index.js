class EventEmitter {
  constructor() {
    this.cached = {};
  }

  on(event, callback) {
    if (!this.cached[event]) {
      this.cached[event] = [];
    }
    this.cached[event].push(callback);
  }

  emit(event, ...args) {
    if (this.cached[event]) {
      this.cached[event].forEach(callback => callback(...args));
    }
  }

  off(event, callback) {
    if (!this.cached[event]) return;

    if (!callback) {
      delete this.cached[event];
    } else {
      this.cached[event] = this.cached[event].filter(cb => cb !== callback);
    }
  }

  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      // 调用后自动移除
      this.off(event, wrapper); 
    }
    this.on(event, wrapper);
  }
}