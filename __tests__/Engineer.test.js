  
const Engineer = require('../lib/Engineer')

test('Creates Engineer object', () => {
    const engineer = new Engineer('Person', 55540, 'engineer@company.com', 'personEngineer')

    expect(engineer.name).toBe('Person')
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.roleInfoType).toEqual(expect.any(String))
    expect(engineer.getRole()).toEqual(expect.any(String))
    
})