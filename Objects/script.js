/*
An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.) 


Property Descriptors Methods and Usage

Object.defineProperty(obj, propName, {})
Object.defineProperties(obj, props)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertyDescriptor(obj, prop)
Object.getOwnPropertyDescriptors(obj)
Object.keys(obj) - list of enumerable properties
Object.values(obj) - list of enumerable prop values
Object.entries(obj)

obj.propertyIsEnumerable(prop)
obj.hasOwnProperty(prop)

Objects can be
1. Extensible - new properties added
2. Frozen - props cannot be changed in any way
3. Sealed - props cannot be deleted or configured but are still writable

Object PROPERTIES can be
1. Writable - change the value
2. Enumerable - seen through a for...in loop
3. Confiurable - change the property descriptors

Object.isExtensible(obj)
Object.isFrozen(obj)
Object.isSealed(obj)
Object.preventExtensions(obj)
Object.freeze(obj)
Object.seal(obj)

Object.is(obj1, obj2)
Object.assign({},obj)
Object.getPrototypeOf()
Object.setPrototypeOf(obj,{})

Descriptor Groups
DATA      ACCESSOR
1.value - get
2.writable - set
3.configurable - configurable
4.enumerable - enumerable

Object.create({}, {})
*/

//____________________________________________________________________

// 

//____________________________________________________________________

const person = Object.create(
    { //prototype
        calculateAge() {
            console.log('Age: ', new Date().getFullYear() - this.birthYear);
        }
    },
    {
        name: {
            value: 'Narek',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 2003,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red'
                console.log('Set age', value);
            }
        }
    }
)

// person.name = 'Rob'

for(let key in person) {
    if (person.hasOwnProperty(key))
        console.log('Key', key, person[key])
}