const oidKey = '__EC_OID';
let generator = 0;

export function OID(o: Object): number {
  if (!o.hasOwnProperty(oidKey)) {
    Object.defineProperty(o, oidKey, {
      value: ++generator,
      enumerable: false,
      writable: false
    });
  }

  const descriptor = Object.getOwnPropertyDescriptor(o, oidKey);

  if (descriptor instanceof Object) {
    return descriptor.value;
  }

  throw new TypeError('Object has wrong OID property');
}
