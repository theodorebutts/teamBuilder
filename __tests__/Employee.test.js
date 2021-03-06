const Employee = require('../lib/Employee')

test('Creates Employee object', () => {
    const person = new Employee('Person', 69420, 'person@company.com')

    expect(person.name).toBe('Person')
    expect(person.id).toEqual(expect.any(Number))
    expect(person.email).toEqual(expect.any(String))
    expect(person.getName()).toEqual(expect.any(String))
    expect(person.getId()).toEqual(expect.any(Number))
    expect(person.getEmail()).toEqual(expect.any(String))
    expect(person.getRole()).toEqual(expect.any(String))
})
  
