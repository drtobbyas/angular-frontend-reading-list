
import { AuthService } from 'src/app/data/isAuth.service';

describe('should be true if authenticated', () => {
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
    });

    it('should return true if Auth is true', () => {

       expect(service.isAuthenticated()).toBeTruthy();
    });
});
