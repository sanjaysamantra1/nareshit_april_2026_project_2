import { TestBed } from '@angular/core/testing';
import { UserService } from './user-service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensures no unexpected requests are outstanding
  });

  it('should fetch all users', () => {
    const mockUsers = [
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' },
    ];
    service.getUsers().subscribe(users=>{
      expect(users).toHaveLength(2);
      expect(users).toEqual(mockUsers);
    });

    // Expect the GET request
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockUsers);
  });

  it('should fetch user by id', () => {
    const mockUser = { id: 1, name: 'Ervin Howell' }

    service.getUserById(1).subscribe(user=>{
      expect(user).toEqual(mockUser);
    });

    // Expect the GET request
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockUser);
  });
});
