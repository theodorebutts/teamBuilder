const Employee = require('../lib/Employee')

test('Creates Emloyee object', () => {
    const person = new Employee('Person', 2345, 'person@company.com')

    expect(person.name).toBe('Person')
    expect(person.id).toEqual(expect.any(Number))
    expect(person.email).toEqual(expect.any(String))
    expect(person.getName()).toEqual(expect.any(String))
    expect(person.getId()).toEqual(expect.any(Number))
    expect(person.getEmail()).toEqual(expect.any(String))
    expect(person.getRole()).toEqual(expect.any(String))
} )