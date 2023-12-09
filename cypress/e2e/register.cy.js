/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when password not same
 *   - should display alert when email is already registered
 *   - should display login page when data are correct
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display login page correctly', () => {
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[name="confirm_password"]').should('be.visible');
    cy.get('button').contains('Register').should('be.visible');
  });

  it('should display alert when name is empty', () => {
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    cy.get('input[name="name"]').type('sahabat mindi');
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[name="name"]').type('sahabat mindi');
    cy.get('input[name="email"]').type('sahabatmindi@gmail.com');
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when password not same', () => {
    cy.get('input[name="name"]').type('sahabat mindi');
    cy.get('input[name="email"]').type('sahabatmindi@gmail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('input[name="confirm_password"]').type('12345');
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Password not same');
    });
  });

  it('should display alert when email is already registered', () => {
    cy.get('input[name="name"]').type('sahabat mindi');
    cy.get('input[name="email"]').type('sahabatmindi@gmail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('input[name="confirm_password"]').type('123456');
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email is already taken');
    });
  });

  it('should display login page when data are correct', () => {
    const uniqueTimestamp = new Date().getTime();
    const email = `penggunabaru${uniqueTimestamp}@gmail.com`;

    cy.get('input[name="name"]').type(`pengguna baru ${uniqueTimestamp}`);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type('123456');
    cy.get('input[name="confirm_password"]').type('123456');
    cy.get('button').contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Registered successfully');
    });

    cy.get('button').contains('Login').should('be.visible');
  });
});