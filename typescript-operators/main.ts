/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };
    age?: number;
  };
}

const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};

v1 && console.log('v1 is truthy');
v2 && console.log('v2 is truthy');

const config1 = v1 || 'default value';
const config2 = v2 || 'default value';

console.log('configs:', config1, config2);

const cfg1 = v1 ?? 'default value';
const cfg2 = v2 ?? 'default value';
const cfg3 = v3 ?? 'default value';

console.log('cfgs:', cfg1, cfg2 || "''", cfg3);

const tern1 = v1 ? 'truthy' : 'falsy';
const tern2 = v2 ? 'truthy' : 'falsy';

console.log('terns:', tern1, tern2);

const oc1 = v1.value;
const oc2 = v5.details?.address?.city;

console.log('ocs:', oc1, oc2);

const sObj = { ...v1, foo: 'bar' };

console.log('sObj:', sObj);

const sArr = [100, ...v4];

console.log('sArr:', sArr);
