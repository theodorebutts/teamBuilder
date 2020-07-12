const Manager = require('../lib/Manager')

test('Creates Manager object', () => {
    const manager = new Manager('Manager', 22222, 'manager@company.com')

    expect(manager.name).toBe('Manager')
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.roleInfoType).toEqual(expect.any(String))
    expect(manager.getRole()).toEqual(expect.any(String))

})