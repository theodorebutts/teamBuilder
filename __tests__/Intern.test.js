const Intern = require('../lib/Intern')

test('Creates new Intern object', () => {
    const intern = new Intern('Person', 20508, 'intern@company.com', 'U of U')

    expect(intern.name).toBe('Person')
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.roleInfoType).toEqual(expect.any(String))
    expect(intern.getRole()).toEqual(expect.any(String))
})